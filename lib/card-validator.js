function cardValidator(cardNumber){
  const replaced = cardNumber.replace(/[^\w\s]/gi, '');

  if (replaced.length !== 16){
    return false;
  }

  const separatedDigits = replaced.split('');
  const convertedToNumber = separatedDigits.map(Number);
  const multiply = convertedToNumber.map((convertedToNumber, idNum) => idNum % 2 ? convertedToNumber * 2 : convertedToNumber);
  const verifyMultiplication = multiply.map((multiply)=> multiply > 9 ? (multiply % 10) + 1 : multiply);
  const result = verifyMultiplication.reduce((acc, multiply)=> acc += multiply) % 10 === 0;

  return result % 10 === 0 ? true : false
}

module.exports.cardValidator = cardValidator;