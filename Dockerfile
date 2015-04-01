FROM node

VOLUME ["/src"]
VOLUME ["/frontend"]

# Install app dependencies
ADD package.json .
RUN npm install

EXPOSE  8000
CMD ["node", "/src/bin/www"]