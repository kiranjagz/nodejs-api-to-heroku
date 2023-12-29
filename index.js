const express = require('express');
const bodyParser = require('body-parser');
const { createLogger, transports, format } = require('winston');

const addRoutes = require("./routes/add");
const subtractRoutes = require("./routes/subtract");

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

const {
    urlencoded,
    json
} = bodyParser;
const port = process.env.PORT || 8080;
const app = express();

app.use(json());
app.use(urlencoded({
    extended: false
}));

app.use("/api/addition", addRoutes);
app.use("/api/subtraction", subtractRoutes);

// route to catch all
app.get('/', (req, res) => {
    logger.info("This route is too catch all the logs");
    res.status(200).send({
        message: 'Hello from Bobbo!',
    })
});

app.listen(port, (err) => {
    if (!err) {
        console.log(`listening on: ${port}`);
    } else {
        console.log(err);
    }
});

module.exports = app;