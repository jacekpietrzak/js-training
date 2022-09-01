/////////////////////////////
// === Autosprawdzanie === //
/////////////////////////////

// === 12/41 === //
// ============ //
/** Napisz funkcję countProps(object), która zlicza i zwraca liczbę własnych właściwości obiektu w parametrze object. Użyj zmiennej propCount do przechowywania liczby właściwości obiektu. */

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       // propCount = Object.keys(object).length;
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   console.log(propCount);
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 });

// const fruit = { name: "Mango", age: 2 };
// console.log(fruit);
// console.log(Object.keys(fruit).length);

// === 13/41 === //
// ============ //
/** Iteruj po obiekcie apartment za pomocą metody Object.keys() i pętli for...of. Zapisz w zmiennej keys tablicę kluczy własnych właściwości obiektu apartment, i dodaj wszystkie wartości jego właściwości do tablicy values. */

// const book = {
//   title: "Ostatnie królestwo",
//   author: "Bernard Cornwell",
//   genres: ["proza ​​historyczna", "przygody"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Klucz
//   console.log(key);
//   // Wartość właściwości
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// === 14/41 === //
// ============ //
/** Refaktoryzuj funkcję countProps(object) za pomocą metody Object.keys() i opcjonalnie, ale niekoniecznie, pętli for...of. */

function countProps(object) {
  // Change code below this line
  let propCount = 0;
  const keys = Object.keys(object);

  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  console.log(propCount);
  return propCount;
  // Change code above this line
}

// countProps({ name: "Mango", age: 2 }); //2
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); //3

// === 16/41 === //
// ============ //
/** Napisz funkcję countTotalSalary(salaries), która pobiera obiekt wynagrodzeń, gdzie nazwą właściwości jest nazwisko pracownika, a wartością właściwości jest wynagrodzenie. Funkcja powinna obliczyć łączną kwotę wynagrodzeń pracowników i zwrócić ją. Użyj zmiennej totalSalary, aby zapisać łączną pensję. */

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  keys = Object.values(salaries);

  for (const key of keys) {
    totalSalary += key;
  }

  // Change code above this line
  console.log(totalSalary);
  return totalSalary;
}

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // 330
// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // 400

// === 17/41 === //
// ============ //
/** Iteruj po tablicy obiektów colors używając pętli for...of. Dodaj do tablicy hexColors wartości właściwości hex, do tablicy rgbColors wartości właściwości rgb ze wszystkich obiektów w tablicy colors. */

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  //   console.log(color.hex);
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

// console.log(hexColors);
// console.log(rgbColors);

// === 18/41 === //
// ============ //
/** Napisz funkcję getProductPrice(productName) która przyjmuje jeden parametr productName - nazwę produktu. Funkcja szuka obiektu produktu o tej nazwie (właściwość name) w tablicy products i zwraca jego cenę (właściwość price). Jeśli nie zostanie znaleziony żaden produkt o tej nazwie, funkcja powinna zwrócić null. */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.price);
//       return product.price;
//     }
//   }
//   console.log(null);
//   return null;

//   // Change code above this line
// }

// getProductPrice("Radar"); // 1300
// getProductPrice("Grip"); // 1200
// getProductPrice("Scanner"); // 2700
// getProductPrice("Droid"); // 400
// getProductPrice("Grip"); // 1200
// getProductPrice("Engine"); // null

// === 19/41 === //
// ============ //
/** Napisz funkcję getAllPropValues(propName), która przyjmuje jeden parametr propName - nazwę (klucz) właściwości. Funkcja powinna zwrócić tablicę wszystkich wartości właściwości o tej nazwie z każdego obiektu w tablicy products. Jeśli w obiektach nie ma właściwości o tej nazwie, funkcja musi zwrócić pustą tablicę. */

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const values = [];

//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName]);
//     }
//   }

//   for (const product of products) {
//     for (const key in product) {
//       if (key === propName) {
//         values.push(product[key]);
//       }
//     }
//   }

//   for (const product of products) {
//     if (product[propName]) {
//       values.push(product[propName]);
//     }
//   }

//   console.log(values);
//   return values;

// Change code above this line
// }

// getAllPropValues("name"); // ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity"); // [4, 3, 7, 9]
// getAllPropValues("price"); // [1300, 2700, 400, 1200]
// getAllPropValues("category"); // []

// === 20/41 === //
// ============ //
/** Napisz funkcję calculateTotalPrice(productName), która przyjmuje jeden parametr productName - nazwę produktu. Funkcja powinna zwrócić całkowity koszt (cena * ilość) produktu o tej nazwie z tablicy products. */

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
  let totalPrice;

  for (const product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      console.log(totalPrice);
      return totalPrice;
    }
  }
  totalPrice = 0;
  console.log(totalPrice);
  return totalPrice;
  // Change code above this line
}

calculateTotalPrice("Blaster"); // 0
calculateTotalPrice("Radar"); // 5200
calculateTotalPrice("Droid"); // 2800
calculateTotalPrice("Grip"); // 10800
calculateTotalPrice("Scanner"); // 8100
