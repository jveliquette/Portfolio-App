# Use the latest version of Node.js
FROM node:latest

# Use the /app directory as the work directory
WORKDIR /app

# Install Vite
RUN npm install -g create-vite
