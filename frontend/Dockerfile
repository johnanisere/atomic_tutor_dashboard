FROM node:10-alpine

# Create app directory
WORKDIR /code/frontend

RUN echo hostname is $HOSTNAME

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY . /code/frontend

RUN npm install
# Bundle app source


# EXPOSE 3000
CMD [ "npm", "start" ]
