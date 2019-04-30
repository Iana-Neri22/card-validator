function cardValidator(cardNumber){
  const replaced = cardNumber.replace(/[^\w\s]/gi, '');

  if (replaced.length !== 16){
    return false;
  }

  return calculate(replaced) % 10 === 0 ? true : false
}

function calculate(replaced){
  return replaced.split('').map(Number)
  .map((separatedDigits, idNum) => idNum % 2 ? separatedDigits * 2 : separatedDigits)
  .map((separatedDigits)=> separatedDigits > 9 ? (separatedDigits % 10) + 1 : separatedDigits)
  .reduce((acc, separatedDigits)=> acc += separatedDigits) % 10 === 0
}

module.exports.cardValidator = cardValidator;