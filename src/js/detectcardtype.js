export default function detectCardType(cardNumber) {
    cardNumber = cardNumber.replace(/\s/g, '');
  
    if (cardNumber.length >= 3) {
      let firstThreeDigits = cardNumber.slice(0, 3);
    
      switch (firstThreeDigits) {
        case '300':
        case '301':
        case '302':
        case '303':
        case '304':
        case '305':
        case '362':
        case '366':
        case '369':
        case '540':
        case '547':
          return 'Diners Club';
        case '601':
        case '644':
        case '645':
        case '646':
        case '647':
        case '648':
        case '649':
        case '65':
          return 'Discover';
      }
    }
    
    if (cardNumber.length >= 2) {
      let firstTwoDigits = cardNumber.slice(0, 2);
  
      switch (firstTwoDigits) {
        case '22':
        case '23':
          return 'Mir';
        case '40':
        case '41':
        case '42':
        case '43':
        case '44':
        case '45':
        case '46':
        case '47':
        case '48':
        case '49':
          return 'Visa';
        case '06':
        case '27':
        case '50':
        case '51':
        case '52':
        case '53':
        case '54':
        case '55':
        case '67':
          return 'Master Card';
        case '35':
          return 'JCB';
      }
    }
  
    if (cardNumber.length >= 4) {
      let firstFourDigits = cardNumber.slice(0, 4);
  
      if (firstFourDigits === '6011') {
        return 'Discover';
      }
    }
  
    if (cardNumber.length >= 6) {
      let firstTwoDigits = cardNumber.slice(0, 2);
  
      switch (firstTwoDigits) {
        case '34':
        case '37':
          return 'American Express';
      }
    }
  
    return false;
  }
