function cardValidator(cardNumber){
  var digits = cardNumber.toString().split('');
  var realDigits = digits.map(Number);
  
  let numero = realDigits.map((realDigits,idNum) => idNum % 2 ? realDigits * 2 : realDigits)
  
  let kaka = numero.map((numero)=> numero > 9 ? (numero % 10) + 1 : numero )

  let result = kaka.reduce((acc, numero)=> acc += numero ) % 10 === 0;

  if (result % 10 === 0){
    return true
  } else{
    return false
  }
   
}
module.exports.cardValidator = cardValidator;