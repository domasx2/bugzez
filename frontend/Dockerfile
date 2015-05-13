FROM node

ADD package.json .
ADD bower.json .

RUN npm install gulp-cli bower -g && npm install && bower --allow-root install -p

CMD ["gulp", "develop"]