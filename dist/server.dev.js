"use strict";

var express = require('express');

var dotenv = require('dotenv'); //Route Files


var bootcamps = require('./routes/bootcamps'); //Load env vars


dotenv.config({
  path: './config/config.env'
}); //Import middleware logger function

var logger = require('./middleware/logger');

var morgan = require('morgan');

var app = express(); // app.use(logger);
//Dev logging middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} //Mount routers


app.use('/api/v1/bootcamps', bootcamps); //Get the port on which the application server should run on

var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log("Server running in ".concat(process.env.NODE_ENV, " mode on port ").concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
