const express = require("express");
const router = express.Router();

const addNumbers = (firstNumber, secondNumber) => {
    if (typeof(Number(firstNumber)) !== 'number' || typeof(Number(secondNumber)) !== 'number') {
        return 'Values should be integer or numbers';
    };
    return Number(firstNumber) + Number(secondNumber);
}

router.get('', (req, res) => {
    console.log("add route hit!");
    res.status(200).send({
        message: 'Hello from add!',
    })
});

router.post("", (req, res) => {
    const {
        firstNumber,
        secondNumber
    } = req.body;
    const result = addNumbers(firstNumber, secondNumber);
    return res.status(200).send({
        result
    });
});

module.exports = router;