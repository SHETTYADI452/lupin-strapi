# Use the official Node.js image as the base image

FROM node:18-alpine3.18
 
# Installing dependencies for sharp compatibility

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
 
# Set the NODE_ENV environment variable

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}
 
# Set the working directory

WORKDIR /opt/
 
# Copy package.json and package-lock.json

COPY package.json package-lock.json ./
 
# Install node-gyp globally (needed for native modules)

RUN npm install -g node-gyp
 
# Install dependencies using npm

RUN npm install
 
# Add node_modules/.bin to the PATH environment variable

ENV PATH /opt/node_modules/.bin:$PATH
 
# Set the working directory for the application

WORKDIR /opt/app
 
# Copy the entire Strapi project into the container

COPY . .
 
# Build the Strapi application

RUN npm run build
 
# Expose the port that Strapi will run on

EXPOSE 1337
 
# Install PM2 globally

RUN npm install -g pm2
 
# Use PM2 to run the Strapi application

CMD ["pm2-runtime", "npm", "--", "start"]

 