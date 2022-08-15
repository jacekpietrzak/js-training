// setInterval(() => {
//   console.log("Hello World");
// }, 1000);

// Mamy 2 typy zmiennych:
// 1. Primitive
// number
// string
// boolean (true/false)
// undefined

// 2. Referencyjne
// obiekt
// tablica
// funkcja
// null - zamierzona pusta wartosc

// Standard ES 6 wprowadzil 2 typy zmiennych. Let i const.
// (var) to praojciec // var - variable
// Deklarujemy zmienna za pomoca:
// (var) / let/const
// nie zaleca sie korzystania z (var) jedynie w strict mode, wzgledy bezpieczenstwa
// Nalezy nazywac zmienne i jakiekolwiek fragmenty kody zgodnie z ich przeznaczeniem. Piszemy kod czytelny i zrozumialy

// hoisting -> JIT - Just In Time compilation
// console.log(a);

// 1. Primitive - bazujemy na zmiennej
let name = "Jakub"; // string // primitive // let mozna nadpisac
let city = "Poznan"; // string // primitive
const code = "1234"; // number // primitive // const nie nadpiszemy // Musimy zadeklarowac zmienna przy inicjalizacji
let likesCoffee = true; // boolean // primitive

// code = "12345"; // const nie nadpiszemy. funkcja const jest stała. Niema prawa sie zmienic
// console.log(name);
// name = "Jacek";

var a; // variable // inicjalizacja zmiennej
a = 1; // definicja zmiennej

// 2. Referencyjne // bazujemy na adresie zmiennej - mozna mutowac czyli nadpisywac i dodawac
// tablice - [] - do elementu odnosimy sie po indeksie
// obiekty - {} - do elementu odnosimy sie po kropce np person.name lub nawiasie kwadratowym np. person ['name']
// funkcje - name() {} - sluza do wywolania np. introduce() {console.log(name)} // pamietac o () po nazwie funkcji

// const people = ["Jakub", "Jacek"]; // array/tablica // reference
// console.log(people);
// people.push("Michal");
// console.log(people);
let animals = null; // null // reference

// typeof sluzy do sprawdzenia typu zmiennej
let username;
console.log(typeof username); // "undefined"

let inputValue = null;
console.log(typeof inputValue); // "object"

const quantity = 17;
console.log(typeof quantity); // "number"

const message = "JavaScript is awesome!";
console.log(message);
console.log(typeof message); // "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // "boolean"

// const messageModal = "JavaScript is awesome!";
// alert(messageModal);

// Prosimy klienta o potwierdzenie rezerwacji hotelu
// i zapisujemy te dane do zmiennej przy kliknięciu confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// Pytamy się o nazwę hotelu, z którego chciałby skorzystać klient
// i zapisujamy wartość do zmiennej jako rezultat wykorzystania prompt.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

const person = {
  // obiekt posiada nawiasy {} tzw wasiki
  name: "jakub", // pole, element statyczny
  lastName: "Buskiewicz", // pole, element statyczny
  phoneNumber: 555555555, // pole, element statyczny
  introduce() {
    // nawiasy klamrowe {} w funkcji oznaczaja cialo funkcji
    console.log("Hi, my name is", name);
  }, // metoda - w tym wypadku funkcja. Funkcje mozna poznac po tym ze posiada nawiasy () przy nazwie funkcji
};

//=== Kluczowe operatory ===//

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x:", x, "y:", y, "z:", z);
// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false

// znak == przyrownuje wartosci
// znak === przyrownuje nie tylko wartosci ale tez typ

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (totalPrice >= customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   if (maxLength > message.length) {
//     result = message;
//   } else {
//     result = `${message.slice(0, maxLength)} ...`;
//   }

//   /// Change code above this line
//   return result;
// }

// let counter = 0;

// while (counter <= 10) {
//   console.log("counter: ", counter);
//   counter += 2;
// }

// let clientCounter = 0;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
//   // clientCounter++;
// }

// let password = "";

// do {
//   password = prompt("Wprowadź hasło dłuższe niż 4 znaki", "");
// } while (password.length < 5);

// console.log("Hasło zostało wprowadzone: ", password);
// const people = ["Jakub", "Janek", "Jacek", "Madzia"];
// let firstLetter = "J";
// let containLetter = "k";

// console.log(people.length);

// for (let i = 0; i < people.length; i++) {
//   if (people[i][0] === firstLetter) {
//     console.log(people[i]);
//   }
// }

// for (let i = 0; i < people.length; i++) {
//   if (people[i].includes(containLetter)) {
//     console.log(people[i]);
//     continue;
//   }
// }

function multiply(a, b) {
  return a * b;
}
console.log(multiply(1, 2));
