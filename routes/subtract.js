const express = require("express");
const router = express.Router();

function subtraction(numberOne, numberTwo) {
    return numberOne - numberTwo;
};

router.get('', (req, res) => {
    console.log("subtraction route hit!");
    res.status(200).send({
        message: 'Hello from subtraction!',
    })
});


router.post("", (req, res, next) => {
    const {
        firstNumber,
        secondNumber
    } = req.body;
    const result = subtraction(firstNumber, secondNumber);
    return res.status(200).send({
        result
    });
});

module.exports = router;