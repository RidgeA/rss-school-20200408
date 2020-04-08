const {createWriteStream} = require('fs');
const express = require('express');
/**
 * @link https://www.npmjs.com/package/morgan
 */
const morgan = require('morgan');

const app = express();

app.use(morgan('combined', {stream: createWriteStream('access.log')}));

app.use((req, res) => {
  res.send("Hello world");
});

app.listen(3000);
