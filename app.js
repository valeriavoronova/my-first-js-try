"use strict";

let mineralPrice = 3;
let quantity = 50;

let discount;

if (quantity % 3 === 0) {
  discount = (mineralsPrice * quantity) / 3; // скидка 2 по цене 3
} else if (quantity > 5) {
  discount = mineralPrice * quantity * 0.1; // скидка 10%
} else {
  discount = 0;
}

let total = mineralPrice * quantity - discount;

console.log(total);

// const countryName = "КитаЙ";

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } else {
//   country = countryName[0].toUpperCase + countryName.slice.toLowerCase; // Write code on this line
//   switch (country) {
//   // Write code under this line
//     case CHINA:{
//     country = CHINA;
// 	price = 100;
// 	break;
// 	}

// 	case
// 	AUSTRALIA:{
// 	price = 170;
// 	break;
// 	}

// 	case
// 	INDIA:{
// 	price = 80;
// 	break;
// 	}

// 	case
// 	JAMAICA:{
// 	price = 120;
// 	break;
// 	}

//   }
// }

// if ( price > 0) { // Write code on this line
//   message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

// let a = 2;
// let b = 4;
// let c = 10;
// console.log("a =", a, ",b =", b);
// b = c;
// let cona = a + b;
// console.log(cona);
// console.log(typeof a);

// let e = 10;

// let d = `Oн сказал ${e} раз Привет`

// console.log(d);
// console.log(typeof d);

// let carOne = {
//     color: 'green'
// }

// let carTwo = {
//     color: 'red'
// }

// console.log(carOne, carTwo);

// // carOne["color"] = carTwo["color"];
// carOne = carTwo;

// console.log(carOne)
