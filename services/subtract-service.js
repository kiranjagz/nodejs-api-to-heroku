function subtraction(firstNumber, secondNumber) {
    if (typeof(Number(firstNumber)) !== 'number' || typeof(Number(secondNumber)) !== 'number') {
        return 'Values should be integer or numbers';
    };
    return Number(firstNumber) - Number(secondNumber);
};

module.exports = {
    subtract: subtraction
}