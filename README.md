
## Isomorphic React Example

With router, babel, jsx, node and express.

Routing, not rendering, took the pain to setup. The trick is that you have to use two routers. On the server-side, you use StaticRouter. On the client, you use Router with browserHistory.

Note that all these things get outdated all the time, and it's kind of difficult to keep up with the latest versions. This works with webpack 3, should work with webpack 4... but it is by not means future-proof.

To compile the client: 
 ./node_modules/.bin/nodemon -w src/client.jsx --exec " ./node_modules/.bin/webpack --config webpack/config.js "
To compile the server:
  npm run dev

Take a look at the `scripts` portion of package.json, that's what I'd recommend using for keeping track of, and running, build scripts.

The proof-of-concept demonstration is the following:
* build everything
* go to localhost:8080/ and observe that the server received the request, and rendered.
* go to localhost:8080/blog and observe that the server rendered this page as well.
* click on "home" link and observe that server didn't receive a request - it was filled by client only.

That's the common usecase of isomorhpic react: load the initial state, and have the client take control from there.
 
Made by Victor Pudeyev. victor@wasya.co