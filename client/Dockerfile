# Build react client
FROM node:16.13.1-alpine AS build-stage

# Working directory be app
WORKDIR /app-ui

COPY package*.json /app-ui/

###  Installing dependencies

RUN npm install

# copy local files to app folder
COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

RUN npm run build

FROM nginx:1.20-alpine

COPY --from=build-stage /app-ui/build /usr/share/nginx/html
RUN rm /etc/nginx/nginx.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'