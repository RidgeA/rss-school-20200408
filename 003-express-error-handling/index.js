const express = require('express');
const {INTERNAL_SERVER_ERROR, BAD_REQUEST, getStatusText} = require('http-status-codes');

const app = express();

class ValidationError extends Error {
  status = BAD_REQUEST;
  text = getStatusText(this.status)
}

app.use((req, res, next) => {
  if (!req.query.param || req.query.param !== 'value') {
    throw new ValidationError()
  }
  throw new Error();
});

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(err.status).send(err.text);
    return;
  }
  next(err);
});

app.use((err, req, res, next) => {
  res.status(INTERNAL_SERVER_ERROR).send(getStatusText(INTERNAL_SERVER_ERROR))
});

app.listen(3000);
