function cardValidator(cardNumber){
  Number.isInteger(cardNumber) ? cardNumber = cardNumber.toString() : false;
  const validNumber = cardNumber.replace(/[^\w\s]/gi, '').split('');
  return (validNumber.length !== 16) ? false : calculate(validNumber);
}

function calculate(validNumber){
  const multiply = validNumber.map((number, index) => (index % 2 === 0) ? Number(number) * 2 : Number(number));
  const sumTwoDigits = multiply.map((number)=> number > 9 ? (number - 9) : number);
  const sumAll = sumTwoDigits.reduce((acc, number)=> acc + number);
  return sumAll % 10 === 0;
}

module.exports.cardValidator = cardValidator;