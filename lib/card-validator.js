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
  .map((allDigits, i) => i % 2 === 0 ? allDigits * 2 : allDigits)
  .map((allDigits)=> allDigits > 9 ? (allDigits % 10) + 1 : allDigits)
  .reduce((acc, allDigits)=> acc += allDigits) % 10 === 0;
}

module.exports.cardValidator = cardValidator;