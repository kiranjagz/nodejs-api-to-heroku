const express = require("express");
const router = express.Router();
const subtractService = require('./../services/subtract-service');

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
    const result = subtractService.subtract(firstNumber, secondNumber);
    return res.status(200).send({
        result
    });
});

module.exports = router;