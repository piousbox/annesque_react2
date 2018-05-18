
#
# annesque_react2
#

cd express-es6-rest-api

<pre>
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
</pre>

 PORT=8080 npm run dev

 ./node_modules/.bin/babel src/client.jsx -d dist
 ./node_modules/.bin/webpack --config webpack/config.js
 ./node_modules/.bin/nodemon -w src/client.jsx --exec " ./node_modules/.bin/webpack --config webpack/config.js "