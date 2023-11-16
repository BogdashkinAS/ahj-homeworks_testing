export default function validateCard(cardNumber) {
    let numDigits = cardNumber.length;
    let parity = numDigits % 2;
    let sum = 0;
    
    if (numDigits < 12 || numDigits > 19) {
      return false;
    };
    
    for (let i = 0; i < numDigits; i++) {
      let digit = parseInt(cardNumber.charAt(i));
  
      if (i % 2 === parity) {
        digit *= 2;
  
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
    }
  
    return sum % 10 === 0;
  }
