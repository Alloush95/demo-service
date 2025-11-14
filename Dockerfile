FROM node:18-slim

RUN apt-get update || : && apt-get install -y

RUN apt-get install -y ca-certificates wget

WORKDIR /usr/src/app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm install --only=production --ignore-scripts

# Copy the pre-compiled build directory
COPY build/ ./build/

CMD [ "node", "build/src/index.js" ]

