const express = require('express');
const bodyParser = require('body-parser');

const addNumbers = (firstNumber, secondNumber) => {
    //   check that input is a number
    if (typeof(Number(firstNumber)) !== 'number' || typeof(Number(secondNumber)) !== 'number') {
        return 'Values should be integer or numbers';
    };
    return Number(firstNumber) + Number(secondNumber);
}

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

app.post('/api/add', (req, res) => {
    const {
        firstNumber,
        secondNumber
    } = req.body;
    const result = addNumbers(firstNumber, secondNumber);
    return res.status(200).send({
        result
    });
});

app.get('/', (req, res) =>
    res.status(200).send({
        message: 'Hello from Bobbo!',
    }));
// route to catch all
app.get('*', (req, res) =>
    res.status(200).send({
        message: 'Catch all Bobbi.',
    }));

app.listen(port, (err) => {
    if (!err) {
        console.log(`listening on: ${port}`);
    } else {
        console.log(err);
    }
});

module.exports = app;