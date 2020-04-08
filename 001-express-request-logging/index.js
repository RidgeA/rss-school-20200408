const {finished} = require('stream');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  const {method, url} = req;
  const start = Date.now(); // process.hrtime

  next();

  finished(res, () => {  // npm package on-finished
    const ms = Date.now() - start;
    const {statusCode} = res;
    console.log(`${method} ${url} ${statusCode} [${ms}ms]`);
  })
});

app.use((req, res) => {
  setTimeout(() => {
    res.status(201).send("Hello world");
  }, 200);
});

app.listen(3000);
