function cardValidator(cardNumber){
  const replaced = cardNumber.replace(/[^\w\s]/gi, '');

  if (replaced.length !== 16){
    return false;
  }

  const separatedDigits = replaced.split('')
  .map(Number)
  .map((separatedDigits, idNum) => idNum % 2 ? separatedDigits * 2 : separatedDigits)
  .map((separatedDigits)=> separatedDigits > 9 ? (separatedDigits % 10) + 1 : separatedDigits)
  .reduce((acc, separatedDigits)=> acc += separatedDigits) % 10 === 0

  return separatedDigits % 10 === 0 ? true : false
}

module.exports.cardValidator = cardValidator;