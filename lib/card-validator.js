function cardValidator(cardNumber){
  const digits = cardNumber.toString().split('');
  const realDigits = digits.map(Number);
  const numero = realDigits.map((realDigits,idNum) => idNum % 2 ? realDigits * 2 : realDigits)
  const kaka = numero.map((numero)=> numero > 9 ? (numero % 10) + 1 : numero )
  const result = kaka.reduce((acc, numero)=> acc += numero ) % 10 === 0;

  if (result % 10 === 0){
    return true
  } else{
    return false
  }
   
}
module.exports.cardValidator = cardValidator;