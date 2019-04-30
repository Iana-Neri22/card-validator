function cardValidator(cardNumber){

  if (Number.isInteger(cardNumber)){
    cardNumber = cardNumber.toString()
  }

  const cardDigits = cardNumber.replace(/[^\w\s]/gi, '');

  if (cardDigits.length !== 16){
    return false;
  }

  return calculate(cardDigits);
}

function calculate(cardDigits){
  return cardDigits.split('').map(Number)
  .map((separatedDigits, idNum) => idNum % 2 === 0 ? separatedDigits * 2 : separatedDigits)
  .map((separatedDigits)=> separatedDigits > 9 ? (separatedDigits % 10) + 1 : separatedDigits)
  .reduce((acc, separatedDigits)=> acc += separatedDigits) % 10 === 0;
}

module.exports.cardValidator = cardValidator;