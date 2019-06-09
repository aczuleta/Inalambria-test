FROM node:8.11.4-alpine

# Change working directory
WORKDIR "/app"

# Update packages and install dependency packages for services
RUN apk update 
RUN apk upgrade --no-cache
RUN echo 'Finished installing dependencies'

# Install npm production packages
COPY ./package.json /app/

RUN cd /app; npm install

COPY . /app

ENV NODE_ENV production
ENV PORT 8000
EXPOSE 8000

CMD ["npm", "start"]
