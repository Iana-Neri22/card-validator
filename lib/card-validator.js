function cardValidator(cardNumber){
  Number.isInteger(cardNumber) ? cardNumber = cardNumber.toString() : false;
  const validNumber = cardNumber.replace(/[^\w\s]/gi, '');
  return (validNumber.length !== 16) ? false : calculate(validNumber);
}

function calculate(validNumber){
  return validNumber.split('').map((number, index) => (index % 2 === 0) ? parseInt(number) * 2 : parseInt(number))
    .map((number)=> number > 9 ? (number % 10) + 1 : number)
    .reduce((acc, number)=> acc += number) % 10 === 0;
}

module.exports.cardValidator = cardValidator;