FROM node:alpine
WORKDIR /app
COPY index.html .
COPY server.js .
EXPOSE 3000
CMD ["node", "server.js"]