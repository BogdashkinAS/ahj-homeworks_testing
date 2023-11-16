import validateCard from './validatecard.js';
import detectCardType from './detectcardtype.js';

export default function cardInfo() {
    document.getElementById("button-get-input").addEventListener("click", () => {
      const cardNumber = document.getElementById("input-field");
      const validResult = validateCard(cardNumber.value);
      console.log("Номер карты:", cardNumber.value);
      console.log("Валидность карты:", validResult);
      const active = document.querySelector('.active');
      if (active) {
        active.classList.remove('active');
      };
      if (validResult) {
        const result = detectCardType(cardNumber.value);
        const cardItem = document.getElementById(result);
        cardItem.classList.add('active');
        console.log("Платежная система карты:", result);
        console.log(cardItem);
        } else {
          cardNumber.placeholder = 'No valid number!!!';
          setTimeout(() => {
            cardNumber.placeholder = 'Credit card number';
          }, 3500);
        };
      cardNumber.value = "";
    });
  };
