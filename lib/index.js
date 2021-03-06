function cardValidator(cardNumber){
  Number.isInteger(cardNumber) ? cardNumber = cardNumber.toString() : false;
  const validNumber = cardNumber.replace(/[^\w\s]/gi, '').split('');
  return (validNumber.length !== 16) ? false : calculate(validNumber);
}

function calculate(validNumber){
  const sumAll = multiply(validNumber).reduce((acc, number)=> acc + number);
  return sumAll % 10 === 0;
}

function multiply(validNumber){
  const multiply = validNumber.map((number, index) => {
    if (index % 2 === 0){
      number = parseInt(number) * 2;
    }
    if (number > 9){
      return (parseInt(number) - 9);
    } else {
      return parseInt(number);
    }
  });
  return multiply;
}

module.exports.cardValidator = cardValidator;