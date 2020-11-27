const credits = 23580;
const pricePerDroid = 3000;
let quantity = prompt (`How many droids you want to buy?`);
let totalPrice = (quantity * pricePerDroid);
let result = (credits - totalPrice);

if (quantity === null) {
  alert (`Canceled by user`)
} else if (totalPrice > credits){ 
  alert (`Not enough money on account`)
  } else {
    alert (`You bought ${quantity} droids, there are ${result} credits on your ammount`)
  }
