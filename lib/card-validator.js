function cardValidator(cardNumber){
  Number.isInteger(cardNumber) ? cardNumber = cardNumber.toString() : false;

  const replaced = cardNumber.replace(/[^\w\s]/gi, '');

  return (replaced.length !== 16) ? false : calculate(replaced)
}

function calculate(replaced){

  return replaced.split('').map((separatedDigits, idNum) => (idNum % 2 === 0 )? parseInt(separatedDigits) * 2 : parseInt(separatedDigits))
  .map((separatedDigits)=> separatedDigits > 9 ? (separatedDigits % 10) + 1 : separatedDigits)
  .reduce((acc, separatedDigits)=> acc += separatedDigits) % 10 === 0
}

module.exports.cardValidator = cardValidator;