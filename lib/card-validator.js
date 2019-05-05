function cardValidator(cardNumber){
  Number.isInteger(cardNumber) ? cardNumber = cardNumber.toString() : false;
  const validNumber = cardNumber.replace(/[^\w\s]/gi, '').split('');
  return (validNumber.length !== 16) ? false : calculate(validNumber);
}

function calculate(validNumber){
  const multiply = validNumber.map((number, index) => (index % 2 === 0) ? parseInt(number) * 2 : parseInt(number))
  const sumGreaterThanTen = multiply.map((number)=> number > 9 ? (number % 10) + 1 : number)
  return sumGreaterThanTen.reduce((acc, number)=> acc + number) % 10 === 0;
}

module.exports.cardValidator = cardValidator;