const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const css = fs.readFileSync(`${__dirname}/../client/style.css`);

// form response to send
const formResponse = (request, response, code, json) => {
  response.writeHead(code, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(json));
  response.end();
};

// header response
const headResponse = (request, response, code) => {
  response.writeHead(code, { 'Content-Type': 'application/json' });
  response.end();
};

// index
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// css
const getStyle = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

// notfound
const getNotFound = (request, response) => {
  formResponse(request, response, 404, { id: 'Page Not Found', message: 'The requested resource was not found on the server (404)' });
};
const getNotFoundMeta = (request, response) => {
  headResponse(request, response, 404);
};

//get users
const getUsers = (request, response, users) => {
  formResponse(request, response, 200, { message: users });
};
const getUsersMeta = (request, response) => {
  headResponse(request, response, 200);
};

//add users
const addUsers = (request, response, user) => {
    
}

module.exports = {
  getIndex,
  getStyle,
  getNotFound,
  getNotFoundMeta,
  getUsers,
  getUsersMeta,
};
