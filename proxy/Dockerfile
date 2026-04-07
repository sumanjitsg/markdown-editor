FROM node:20-slim
RUN npm install -g pnpm
WORKDIR /app
COPY package.json .
RUN pnpm install --prod
COPY server.js .
CMD ["node", "server.js"]
