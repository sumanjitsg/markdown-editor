const http = require('node:http');
const { Storage } = require('@google-cloud/storage');

const BUCKET = process.env.BUCKET;
const PORT = process.env.PORT || 8080;
const storage = new Storage();
const bucket = storage.bucket(BUCKET);

const serve = async (res, path) => {
    const file = bucket.file(path);
    const [exists] = await file.exists();
    if (!exists) return null;

    const [metadata] = await file.getMetadata();
    res.setHeader(
        'Content-Type',
        metadata.contentType || 'application/octet-stream'
    );
    res.setHeader('Cache-Control', 'public, max-age=3600');
    file.createReadStream().pipe(res);
    return true;
};

http.createServer(async (req, res) => {
    try {
        const path = req.url === '/' ? 'index.html' : req.url.slice(1);

        // Try exact path first, then fallback to index.html for SPA routing
        const served =
            (await serve(res, path)) || (await serve(res, 'index.html'));
        if (!served) {
            res.writeHead(404);
            res.end('Not Found');
        }
    } catch (err) {
        res.writeHead(500);
        res.end('Internal Server Error');
    }
}).listen(PORT);
