FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Create a directory for database persistence
RUN mkdir -p /app/data
VOLUME ["/app/data"]

EXPOSE 3000

CMD ["node", "index.js"]




