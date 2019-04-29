function cardValidator(cardNumber){
  if (cardNumber.length !== 16){
    return false;
  } 

  const separatedDigits = cardNumber.toString().split('');
  const numberDigits = separatedDigits.map(Number);
  const multiply = numberDigits.map((numberDigits,idNum) => idNum % 2 ? numberDigits * 2 : numberDigits)
  const verify = multiply.map((multiply)=> multiply > 9 ? (multiply % 10) + 1 : multiply )
  const result = verify.reduce((acc, multiply)=> acc += multiply ) % 10 === 0;

  if (result % 10 === 0){
    return true
  } else{
    return false
  }
   
}



module.exports.cardValidator = cardValidator;