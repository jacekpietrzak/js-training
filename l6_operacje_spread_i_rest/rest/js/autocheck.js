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

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       console.log(totalPrice);
//       return totalPrice;
//     }
//   }
//   totalPrice = 0;
//   console.log(totalPrice);
//   return totalPrice;
//   // Change code above this line
// }

// calculateTotalPrice("Blaster"); // 0
// calculateTotalPrice("Radar"); // 5200
// calculateTotalPrice("Droid"); // 2800
// calculateTotalPrice("Grip"); // 10800
// calculateTotalPrice("Scanner"); // 8100

// === 25/41 === //
// ============ //
/** Otrzymaliśmy prognozę pogody na dwa dni, z minimalną i maksymalną temperaturą oraz opcjonalnymi ikonami. Zastąp wszystkie deklaracje zmiennych jedną operacją destrukturyzującą właściwości obiektu forecast. Ustaw domyślną wartość dla ikon, zmiennych todayIcon i tomorrowIcon - ciąg "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". */

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// === 26/41 === //
// ============ //
/** Funkcja calculateMeanTemperature(forecast) przyjmuje jeden parametr forecast - obiekt temperatury na dwa dni następnego formatu.

{
  today: { low: 10, high: 20 },
  tomorrow: { low: 20, high: 30 }
}
Zastąp deklaracje zmiennych todayLow, todayHigh, tomorrowLow i tomorrowHigh jedną operacją destrukturyzacji właściwości obiektu forecast. */

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// calculateMeanTemperature({
//   today: { low: 28, high: 32 },
//   tomorrow: { low: 25, high: 29 },
// }); // 28.5
// calculateMeanTemperature({
//   today: { low: 37, high: 40 },
//   tomorrow: { low: 33, high: 38 },
// }); // 37

// === 27/41 === //
// ============ //
/** Zmienna scores przechowuje tablicę wyników testów. Używając rozkładania i metod Math.max() i Math.min(), uzupełnij kod tak, aby zmienna bestScore miała najwyższy wynik, natomiast worstScore miała najniższy. */

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// === 30/41 === //
// ============ //
/** Napisz funkcję makeTask(data), która przyjmuje jeden parametr data - obiekt o następujących właściwościach.

text - tekst zadania.
category - kategoria zadania.
priority - priorytet zadania.
Funkcja powinna utworzyć i zwrócić nowy obiekt zadania bez bezpośredniej modyfikacji parametru data. Nowy obiekt musi mieć właściwość completed, której wartość jest przechowywana w zmiennej lokalnej o tej samej nazwie.

W parametrze data jest gwarantowana tylko właściwość text, i może brakować pozostałych dwóch category i priority. Wtedy w nowym obiekcie zadania właściwości category i priority powinny zawierać wartości domyślne przechowywane w zmiennych lokalnych o tej samej nazwie.
 */

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

//   const defaultObject = { completed, category, priority };
//   const newObject = { ...defaultObject, ...data };

//   console.log(newObject);
//   return newObject;
//   // Change code above this line
// }

// makeTask({}); // zwraca { category: "General", priority: "Normal", completed: false }
// makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }); // zwraca { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// makeTask({ category: "Finance", text: "Take interest" }); // zwraca { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// makeTask({ priority: "Low", text: "Choose shampoo" }); // zwraca { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// makeTask({ text: "Buy bread" }); // zwraca { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// === 31/41 === //
// ============ //
/** Korzystając z operacji rest, uzupełnij kod funkcji add(), aby przyjmowała dowolną liczbę argumentów, odczytywała i zwracała ich sumę. */

// Change code below this line
// function add(...args) {
//   console.log(args);
//   let sum = 0;
//   for (const key in args) {
//     sum += args[key];
//   }

//   console.log(sum);
//   // Change code above this line
// }

// add(15, 27);

// === 32/41 === //
// ============ //
/** Funkcja addOverNum() oblicza sumę wszystkich argumentów. Zmień parametry i ciało funkcji addOverNum() tak, aby obliczała tylko sumę tych argumentów, które są większe niż określona liczba. Ta liczba musi być pierwszym parametrem funkcji. */

// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }

// addOverNum(50, 15, 27); // 0
// addOverNum(10, 12, 4, 11, 48, 10, 8); // 71

// === 33/41 === //
// ============ //
/** Funkcja findMatches() przyjmuje dowolną liczbę argumentów. Pierwszy argument zawsze będzie tablicą liczb, a pozostałe argumenty będą tylko liczbami.

Uzupełnij kod funkcji, aby zwracała nową tablicę matches, która będzie zawierać tylko te argumenty, zaczynając od drugiego, które znajdują się w tablicy pierwszego argumentu.

Na przykład findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) powinno zwrócić tablicę [1, 2], ponieważ tylko one znajdują się w tablicy pierwszego argumentu. */

// // Change code below this line
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line

//   for (const key in arr) {
//     for (const arg in args) {
//       if (arr[key] === args[arg]) {
//         matches.push(arr[key]);
//       }
//     }
//   }

//   // Change code above this line
//   console.log(matches);
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // [1, 2]
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // [17, 89, 2]

// === 34/41 === //
// ============ //
/** Dodaj dwie dodatkowe metody do obiektu bookShelf, które na razie będą zwracały tylko ciągi przez analogię do getBooks() i addBook(bookName).

Metoda removeBook(bookName) usunie książkę według tytułu. Zwraca ciąg "Deleting book <tytuł książki>", gdzie <tytuł ksiązki> jest wartością parametru bookName.

Metoda updateBook(oldName, newName) zaktualizuje tytuł książki. Zwraca ciąg "Updating book <stary tytuł> to <nowy tytuł>", gdzie <stary tytuł> i <nowy tytuł> są wartościami parametrów oldName i newName odpowiednio. */

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     console.log("Returning all books");
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// bookShelf.getBooks(); // "Returning all books"
// bookShelf.addBook("Haze"); // "Adding book Haze"
// bookShelf.removeBook("Red sunset"); // "Deleting book Red sunset"
// bookShelf.updateBook("Sands of dune", "Dune"); // "Updating book Sands of dune to Dune"

// === 34/41 === //
// ============ //
/** Uzupełnij metodę updateBook(oldName, newName) tak, aby zmieniała tytuł książki z oldName na newName we właściwości books. Użyj indexOf(), aby znaleźć żądany element tablicy, i splice(), aby zastąpić ten element. */

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     // console.log(bookIndex);
//     this.books.splice(bookIndex, 1, newName);
//     // Change code above this line
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles"); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.books);
// bookShelf.updateBook("The last kingdom", "Dune"); // ["Dune", "Haze", "The guardian of dreams"]

// === 36/41 === //
// ============ //
/** Zwrócił się do nas właściciel sklepu z eliksirami "U Starej Ropuchy" i zamówił program do prowadzenia inwentarza - dodawania, usuwania, wyszukiwania i aktualizacji mikstur. Dodaj do obiektu atTheOldToad właściwość potions, której wartość jest pustą tablicą. */

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],
//   // Change code above this line
// };

// console.log(atTheOldToad);

// === 37/41 === //
// ============ //
/** Dodaj do obiektu atTheOldToad metodę getPotions(), która po prostu zwraca wartość właściwości potions. */

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     console.log(this.potions);
//     return this.potions;
//   },
//   // Change code above this line
// };

// atTheOldToad.getPotions(); // ["Speed potion", "Dragon breath", "Stone skin"]

// === 38/41 === //
// ============ //
/** Uzupełnij metodę addPotion(potionName), aby ona dodawała miksturę potionName na końcu tablicy mikstur we właściwości potions. */

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

//     this.potions.push(potionName);

//     // Change code above this line
//   },
// };

// atTheOldToad.addPotion("Invisibility"); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion("Power potion"); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]
// console.log(atTheOldToad.potions);

// === 39/41 === //
// ============ //
/** Uzupełnij metodę removePotion(potionName) aby usunąć miksturę potionName z tablicy mikstur we właściwości potions. */

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);

//     return this.potions;
//     // Change code above this line
//   },
// };

// atTheOldToad.removePotion("Dragon breath"); // ["Speed potion", "Stone skin"]
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion"); // ["Stone skin"]
// console.log(atTheOldToad.potions);

// === 40/41 === //
// ============= //
/** Uzupełnij metodę updatePotionName(oldName, newName) tak, aby aktualizowała nazwę mikstury z oldName do newName, w tablicy mikstur we właściwości potions. */

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);

//     // Change code above this line
//   },
// };

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth"); // ["Speed potion", "Polymorth", "Stone skin"]
// console.log(atTheOldToad.potions);
// atTheOldToad.updatePotionName("Stone skin", "Invisibility"); // ["Speed potion", "Polymorth", "Invisibility"]
// console.log(atTheOldToad.potions);

// === 41/41 === //
// ============= //
/** Klient chce, aby każda mikstura była reprezentowana nie tylko nazwą, ale także ceną, a w przyszłości może mieć inne cechy. Dlatego teraz tablica obiektów o następujących właściwościach będzie przechowywana we właściwości potions.

{
  name: "Dragon breath",
  price: 700
}
Refaktoryzuj metody obiektu atTheOldToad aby nie działały z tablica ciągów, ale z tablicą obiektów.

getPotions() - metoda na zdobycie wszystkich mikstur. Zwraca wartość właściwości potions.
addPotion(newPotion) - dodany potions newPotion (już obiekt) w tablicy właściwośći potions, nie tylko jeśli potions jeszcze nie jest w tablicy. W przeciwnym razie zwracany jest ciąg.
removePotion(potionName) - usuwa obiekt mikstury o nazwie potionName z tablicy we właściwości potions.
updatePotionName(oldName, newName) - aktualizuje właściwość name obiektu-eliksiru z oldName do newName w tablicy potions. */

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        console.log(
          `Error! Potion ${newPotion.name} is already in your inventory!`
        );
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);
        return;
      }
    }

    console.log(`Potion ${potionName} is not in inventory!`);
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName;
      }
    }
    console.log(`Potion ${oldName} is not in inventory!`);
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

// atTheOldToad.getPotions();
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.potions);

// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.potions);

// atTheOldToad.removePotion("Dragon breath");
// console.log(atTheOldToad.potions);
// atTheOldToad.removePotion("Speed potion");
// console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName("Stone skinn", "Invulnerability potion");
console.log(atTheOldToad.potions);
