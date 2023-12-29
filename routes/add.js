const express = require("express");
const router = express.Router();
const addService = require('./../services/add-service');
const log = require('./../log');

router.get('', (req, res) => {
    var message = "add route hit!";

    // test the logger
    log.info(message);
    console.log(message);

    res.status(200).send({
        message: 'Hello from add!',
    })
});

router.post("", (req, res) => {
    const {
        firstNumber,
        secondNumber
    } = req.body;
    const result = addService.add(firstNumber, secondNumber);
    return res.status(200).send({
        result
    });
});

module.exports = router;