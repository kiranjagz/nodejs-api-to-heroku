'use strict';

const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    format: format.combine(
      format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
      format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
      new transports.File({
        filename: 'c:/logs/nodejs-api-to-heroku/log-nodejs-api-to-hero.log',
        json: false,
        maxsize: 5242880,
        maxFiles: 5,
      }),
      new transports.Console(),
    ]
  });

  module.exports = logger;