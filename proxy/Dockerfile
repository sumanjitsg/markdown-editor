FROM node:20-slim
WORKDIR /app
COPY package.json .
RUN npm ci --production
COPY server.js .
CMD ["node", "server.js"]
