const express = require('express');
const bodyParser = require('body-parser');

const addRoutes = require("./routes/add");
const subtractRoutes = require("./routes/subtract");
const log = require('./log');

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
    log.info("This route is too catch all the logs");
    res.status(200).send({
        message: 'Hello from Bobbo!',
    })
});

app.listen(port, (err) => {
    if (!err) {
        log.info(`listening on: ${port}`);
        console.log(`listening on: ${port}`);
    } else {
        console.log(err);
    }
});

module.exports = app;