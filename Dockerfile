
# ### STAGE 1: Build ###
# FROM node:latest AS build
# WORKDIR /usr/src/app
# COPY package.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# ### STAGE 2: Run ###
# FROM nginx:alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist/waterbodyadmin /usr/share/nginx/html

# BASE IMAGE with an alias #
FROM node:16.10.0-alpine3.11 as build
WORKDIR /usr/src/app

# Install Angular CLI to run Build #
RUN npm install -g @angular/cli@13.1.2

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# BASE IMAGE with an alias #
FROM nginx as runtime
COPY nginx.conf /etc/nginx/nginx.conf
# Copy contents from the other container with alias "build" #
# onto the specified path in the current container#
COPY --from=build /usr/src/app/dist/waterbodyadmin /usr/share/nginx/html