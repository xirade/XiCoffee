# Dockerfile for React client

# Build react client
FROM node:16.13.1-alpine AS development

# Working directory be app
WORKDIR /app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]