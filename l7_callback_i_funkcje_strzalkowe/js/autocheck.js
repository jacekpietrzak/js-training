/////////////////////////////
// === Autosprawdzanie === //
/////////////////////////////

// === 2/48 === //
// ============ //
/** Uzupełnij funkcję makeMessage tak, aby ona oczekiwała jako drugiego parametru (parametr callback) funkcji callback i zwracała jej wywołanie. Funkcja deliverPizza lub makePizza będzie przekazywana jako callback i oczekiwała jako argumentu nazwy gotowej pizzy w dostawie. */

// function deliverPizza(pizzaName) {
//   console.log(`Delivering ${pizzaName} pizza.`);
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// makeMessage("Royal Grand", makePizza); //zwraca łańcuch "Pizza Royal Grand is being prepared, please wait..."
// makeMessage("Ultracheese", deliverPizza); //zwraca łańcuch "Delivering Ultracheese pizza."

// const user = {
//   email: "email",
//   age: 20,
// };
// const { username = "User" } = user;
// console.log(username);
// console.log(user);

// const profile = {
//   user: "Mango",
//   age: 2,
// };

// const profileUpdate = {
//   user: "Banana",
//   age: 2,
// };

// const updateProfile = {
//   ...profile,
//   ...profileUpdate,
// };
// console.log(updateProfile);

// === 4/48 === //
// ============ //
/** Należy napisać logikę opracowywania zamówień pizzy. Wykonaj refaktor metody order tak, aby jako drugi i trzeci parametr przyjmowała dwa callbacki onSuccess i onError.

Jeśli we właściwości pizzas nie ma pizzy o nazwie z parametru pizzaName, metoda order powinna zwracać rezultat callbacku onError, przekazując mu jako argument łańcuch "There is no pizza with a name <nazwa pizzy> in the assortment."
Jeśli we właściwości pizzas jest pizza o nazwie z parametru pizzaName, metoda order powinna zwracać rezultat wywołania callbacku onSuccess, przekazując mu jako argument nazwę zamówionej pizzy.
Po zadeklarowaniu obiektu pizzaPalace dodaliśmy callbacki i wywołanie metod. Prosimy niczego tam nie zmieniać. */

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  console.log(
    `Error! There is no pizza with a name ${error} in the assortment.`
  );
  return `Error! There is no pizza with a name ${error} in the assortment.`;
}

// Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError); // "Your order is accepted. Cooking pizza Smoked."
// pizzaPalace.order("Four meats", makePizza, onOrderError); // "Your order is accepted. Cooking pizza Four meats."
// pizzaPalace.order("Big Mike", makePizza, onOrderError); // "Error! There is no pizza with a name Big Mike in the assortment."
// pizzaPalace.order("Vienna", makePizza, onOrderError); // "Error! There is no pizza with a name Vienna in the assortment."

// === 6/48 === //
// ============ //
/** Funkcja filterArray(numbers, value) przyjmuje tablicę liczb numbers i zwraca nową tablicę, na której będą tylko te elementy oryginalnej tablicy, które są większe niż wartość parametru value.

Wykonaj refaktor funkcji tak, aby zamiast pętli for wykorzystywała metodę forEach. */

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]

// === 7/48 === //
// ============ //
/** Funkcja getCommonElements(firstArray, secondArray) przyjmuje dwie tablice dowolnej długości jako parametry firstArray i secondArray i zwraca nową tablicę ich wspólnych elementów, to znaczy tych, które można znaleźć na obu tablicach.

Wykonaj refaktor funkcji tak, aby zamiast cyklu for wykorzystywała metodę forEach. */

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   console.log(secondArray);
//   // Change code below this line

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }

//   firstArray.forEach(function (element) {
//     console.log("second array:", secondArray);
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]); // [2]

// === 7/48 === //
// ============ //
/** Wykonaj refaktor funkcji calculateTotalPrice(orderedItems), zamieniając jej zadeklarowanie na funkcję strzałkową. Zamień funkcję callback przekazywaną do metody forEach() na funkcję strzałkową. */

// Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   console.log(totalPrice);
//   return totalPrice;
// }

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
//   console.log(totalPrice);
//   return totalPrice;
// };
// // Change code above this line

// calculateTotalPrice([12, 85, 37, 4]); // 138

// === 11/48 === //
// ============= //
/** Zamień zadeklarowanie funkcji filterArray() i callback dla metody forEach() na funkcje strzałkowe. */

// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   console.log(filteredNumbers);
//   return filteredNumbers;
// }

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   console.log(filteredNumbers);
//   return filteredNumbers;
// };

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]

// === 12/48 === //
// ============= //
/** Zamień zadeklarowanie funkcji getCommonElements() i callback dla metody forEach() na funkcje strzałkowe. */

// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   console.log(commonElements);
//   return commonElements;
// };

// getCommonElements([1, 2, 3], [2, 4]); // [2]

// === 13/48 === //
// ============= //
/** Funkcja changeEven(numbers, value) przyjmuje tablicę liczb numbers i odnawia każdy element, wartością którego jest liczba parzysta, dodając do niego wartość parametru value.

Wykonaj refaktor funkcji tak, aby stała się czysta – nie zmieniała tablic liczb numbers, a tworzyła, wypełniała i zwracała nową tablicę z odnowionymi wartościami. */

// function changeEven1(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   console.log(numbers);
//   // Change code above this line
// }

// function changeEven(numbers, value) {
//   // Change code below this line

//   const newArray = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//       return;
//     }
//     newArray.push(number);
//   });
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10); // [1, 12, 3, 14, 5]

// === 13/48 === //
// ============= //
/** Uzupełnij kod tak, aby w zmiennej planetsLengths otrzymać tablicę długości nazw planet. Obowiązkowo wykorzystaj metodę map(). */

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

// === 15/48 === //
// ============= //
/** Wykorzystując metodę map() spraw, aby w zmiennej titles otrzymać tablicę tytułów książek (właściwość title) ze wszystkich obiektów tablicy books. */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);

// console.log(titles);

// === 17/48 === //
// ============= //
/** Uzupełnij funkcję getUserNames(users) tak, aby zwracała tablicę imion użytkowników (właściwość name) z tablicy obiektów w parametrze users. */

// usersArr = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// console.log(usersArr);

// // Change code below this line
// const getUserNames = (users) => {
//   //   const userNames = [];
//   const userNames = users.map((user) => user.name);
//   console.log(userNames);
//   return userNames;
// };
// // Change code above this line

// getUserNames(usersArr);

// === 22/48 === //
// ============= //
/** Uzupełnij funkcję getUsersWithEyeColor(users, color) tak, aby zwracała tablicę użytkowników, u których kolor oczu (właściwość eyeColor) jest zgodny z właściwością parametru color. */

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   console.log(users.filter((user) => user.eyeColor === color));
//   return users.filter((user) => user.eyeColor === color);
// };
// // Change code above this line

// getUsersWithEyeColor(users, "blue");

// === 22/48 === //
// ============= //
/** Uzupełnij funkcję getUsersWithAge(users, minAge, maxAge) tak, aby zwracała tablicę użytkowników, wiek których (właściwość age) mieści się w przedziale między minAge i maxAge. */

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUsersWithAge1 = (users, minAge, maxAge) => {
//   const userWithAge = [];
//   users.filter((user) => {
//     if (user.age > minAge && user.age < maxAge) {
//       userWithAge.push(user.name);
//     }
//   });
//   console.log(userWithAge);
//   return userWithAge;
// };

// // Change code above this line

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   console.log(users.filter((user) => user.age >= minAge && user.age <= maxAge));
//   return users.filter((user) => user.age >= minAge && user.age <= maxAge);
// };
// // Change code above this line

// getUsersWithAge(users, 30, 40);

// === 24/48 === //
// ============= //
/** Uzupełnij funkcję getUsersWithFriend(users, friendName) tak, aby zwracała tablicę użytkowników, którzy mają przyjaciela o imieniu z parametru friendName. Tablica przyjaciół użytkowników zapisuje się we właściwości friends. */

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   console.log(users.filter((user) => user.friends.includes(friendName)));
//   return users.filter((user) => user.friends.includes(friendName));
// };
// // Change code above this line

// getUsersWithFriend(users, "Sharron Pace");

// === 25/48 === //
// ============= //
/** Uzupełnij funkcję getFriends(users) tak, aby zwracała tablicę przyjaciół wszystkich użytkowników (właściwość friends). Kilku użytkowników może mieć tych samych przyjaciół. Spraw, aby zwracana tablica nie zawierała powtórzeń. */

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqueFriends = allFriends.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   console.log(uniqueFriends);
//   return uniqueFriends;
// };
// Change code above this line

// getFriends(users);


// === 35/48 === //
// ============= //

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   const avgPlayTime = player.playtime / player.gamesPlayed;
//   console.log(total + avgPlayTime);
//   return total + avgPlayTime;
// }, 0);

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   console.log(total + player.playtime / player.gamesPlayed);
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// === 36/48 === //
// ============= //

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // Change code below this line
// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => {
//     console.log(total + user.balance);
//     return total + user.balance;
//   }, 0);
// };
// // Change code above this line
// calculateTotalBalance(users);

// === 37/48 === //
// ============= //

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getTotalFriendCount = users => {
//   // const friendsArr = users.flatMap(element => element.friends);
//    return users.reduce((total, user) => total + user.friends.length, 0);
// };

// console.log(getTotalFriendCount(users))
// // Change code above this line

// === 42/48 === //
// ============= //

// Change code below this line
const sortByAscendingBalance = users => {
  return ascendingBalance = [...users].sort((userA, userB) => userA.balance - userB.balance );
};
// Change code above this line

// === 45/48 === //
// ============= //
/** Uzupełnij kod tak, aby w zmiennej 
 * - names - otrzymać tablicę imion autorów w porządku alfabetycznym, 
 *           ktorych rating książek jest większy niż wartość zmiennej MIN_BOOK_RATING. */

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];

// // Change code below this line

// const MIN_BOOK_RATING = 8;

// const names = books
// .filter((book) => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((authorA, authorB) => authorA.localeCompare(authorB));

// console.log(names);

// === 46/48 === //
// ============= //
/** Uzupełnij funkcję getNamesSortedByFriendCount(users) tak, aby zwracała 
 * - tablicę imion użytkowników = posortowaną po zwiększaniu się ilości ich przyjaciół (właściwość friends). */

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   const usersByAscendingFriendCount = [...users]
//   .sort((userA, userB) => userA.friends.length - userB.friends.length)
//   .map(user => user.name);  
//   console.log(usersByAscendingFriendCount);
// return usersByAscendingFriendCount;
// };

// getNamesSortedByFriendCount(users);
// // Change code above this line

// === 47/48 === //
// ============= //
/** Uzupełnij funkcję getSortedFriends(users) tak, aby zwracała tablicę unikalnych imion przyjaciół (własciwość friends) posortowaną w porządku alfabetycznym. */

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getSortedFriends = users => {
//    const sortedFriends = [...users]
// .flatMap(user => user.friends)
//    .filter((friend, index, array) => array.indexOf(friend) === index)
//    .sort((friendA, friendB) => friendA.localeCompare(friendB));


//    console.log(sortedFriends);
//   return sortedFriends;

// };
// // Change code above this line

// getSortedFriends(users);

// === 48/48 === //
// ============= //
/** Uzupełnij funkcję getTotalBalanceByGender(users, gender) tak, aby zwracała 
 * - ogólny bilans użytkowników (właściwość balance), = których płeć (właściwość gender) jest zgodna z wartością parametru gender. */

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

// Change code below this line
const getTotalBalanceByGender = (users, gender) => {
const totalBalanceByGender = [...users]
.filter(user => user.gender === gender)
.map(user => user.balance)
.reduce((previousValue, number) => {return previousValue + number},0);


console.log(totalBalanceByGender);
return totalBalanceByGender;
};
// Change code above this line

getTotalBalanceByGender(users, "male");