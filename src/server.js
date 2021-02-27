const http = require('http');
const url = require('url');

const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlPair = {
  GET: {
    '/': responses.getIndex,
    '/style.css': responses.getStyle,
    '/getUsers': responses.getUsers,
    '/notReal': responses.getNotFound,
    notFound: responses.getNotFound,
  },
  POST: {
    //
  },
  HEAD: {
    '/getUsers': responses.getUsersMeta,
    '/notReal': responses.getNotFoundMeta,
  },
};

const onReq = (request, response) => {
  console.log(request.url);
  const parsedURL = url.parse(request.url);
  if (urlPair[request.method][parsedURL.pathname]) {
    urlPair[request.method][parsedURL.pathname](request, response, { users: '' });
  }
};

http.createServer(onReq).listen(port);
console.log(`Listening on 127.0.0.1:${port}`);
