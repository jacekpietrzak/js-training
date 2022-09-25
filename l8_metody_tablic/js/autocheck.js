// === 01/20 === //
// ============= //
/** Wykonaj refaktor metod obiektu pizzaPalace, wstawiając brakujące this w miejscach zwracania się do właściwości i metod obiektu. */

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//         console.log(this.pizzas.includes(pizzaName));
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         console.log(`Sorry, there is no pizza named «${pizzaName}»`);
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
//       console.log( `Order accepted, preparing «${pizzaName}» pizza`);
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };
  
//   pizzaPalace.order("Smoked");
//   pizzaPalace.order("Four meats");
//   pizzaPalace.order("Big Mike");
//   pizzaPalace.order("Viennese");

// === 02/20 === //
// ============= //
/** Przed zwolnieniem programista popsuł kod źródłowy zarządzania kontami użytkowników naszego serwisu dostawy jedzenia. Wykonaj refaktor metod obiektu customer, umieszczając brakujące this przy zwracaniu się do właściwości obiektu.

Po zadeklarowaniu obiektu dodaliśmy wywołanie metod w tej kolejności, w jakiej twój kod będą sprawdzać testy. Prosimy niczego tam nie zmieniać. */

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
  
// === 03/20 === //
// ============= //
/** Testerzy znaleźli błędy w kodzie serwisu zapisywania historii zamówień jedzenia. Napraw je, prawidłowo rozmieszczając this w metodach obiektu historyService, aby metody zaczęły pracować poprawnie. */

// const historyService = {  orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     console.log(this.orders.filter(order => order.email === email));
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };


// historyService.getOrdersByEmail("solomon@topmail.net");

// === 10/20 === //
// ============= //
/** Napisz klasę Storage, która będzie tworzyć obiekty dla zarządzania magazynem towarów. Klasa oczekuje tylko jednego argumentu – początkowej tablicy towarów, który zapisuje się na tworzonym obiekcie we właściwości items.

Zadeklaruj następujące metody klasy:

getItems() - zwraca tablicę aktualnych towarów we właściwości items obiektu, który wywołuje tę metodę.
addItem(newItem) - przyjmuje nowy towar newItem i dodaje go do tablicy towarów we właściwości items obiektu, który wywołuje tę metodę.
removeItem(itemToRemove) - przyjmuje towar itemToRemove i usuwa go z tablicy towarów we właściwości items obiektu, który wywołuje tę metodę.
Pod komentarzem dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będą sprawdzać testy. Prosimy nieczego tam nie zmieniać. */


// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
//     getItems() {
//         return this.items
//     }
//     addItem(newItem) {
//         this.items.push(newItem);
//     }
//     removeItem(itemToRemove) {
//        const indexOfItem = this.items.indexOf(itemToRemove);
//         this.items.splice(indexOfItem, 1);
//     }
// }
// // Change code above this line


// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// === 11/20 === //
// ============= //
/** Napisz klasę StringBuilder, która przyjmuje jeden parametr initialValue - dowolny łańcuch, który zapisuje się na tworzonym obiekcie we właściwości value.

Zadeklaruj następujące metody klasy:

getValue() - zwraca aktualne znaczenie właściwości value.
padEnd(str) - przyjmuje parametr str (łańcuch) i dodaje go na końcu wartości właściwości value obiektu, który wywołuje tę metodę.
padStart(str) - otrzymuje parametr str (łańcuch) i dodaje go na początku wartości właściwości value obiektu, który wywołuje tę metodę.
padBoth(str) - otrzymuje parametr str (łańcuch) i dodaje go na początku i na końcu wartości właściwości value obiektu, który wywołuje tę metodę.
Pod komentarzem dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będą sprawdzać testy. Prosimy nieczego tam nie zmieniać. */


// class StringBuilder {
    
//     constructor(value) {
//     this.value = value
//     }
//     getValue(value) {
//         return this.value
//     }
//     padEnd(str) {
//         this.value = this.value + str
//     }
//     padStart(str) {
//         this.value = str + this.value
//     }
//     padBoth(str) {
//         this.value = str + this.value + str
//     }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder);
// console.log(builder.getValue()); // "."

// builder.padStart("^");
// console.log(builder.getValue()); // "^."

// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"

// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// === 16/20 === //
// ============= //

// class Car {
//     // Change code below this line
//     #price;
//     maxPrice = 50000;
    
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//      if(newPrice < this.maxPrice){
 
//         return this.#price = newPrice;
//      }
      
//       return;
//     }
//     // Change code above this line
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000


// === 17/20 === //
// ============= //
/** Dodaj do klasy Car publiczną metodę statyczną checkPrice(price), przyjmującą cenę samochodu. Metoda powinna porównać wartości parametru price i prywatnej statycznej właściwości MAX_PRICE.

- Jeżeli cena samochodu przewyższa maksymalną, metoda powinna zwrócić łańcuch "Error! Price exceeds the maximum".
- W przeciwnym yrazie metoda powinna zwrócić łańuch "Success! Price is within acceptable limits".

Pod zadeklarowaniem klasy dodaliśmy inicjalizację egzemplarza i wywołanie metod, aby pokazać, jak wykorzystywana będzie metoda checkPrice(price). */

// class Car {
// static #MAX_PRICE = 50000;
// // Change code below this line

// static checkPrice(price) {
//     if(price > Car.#MAX_PRICE){
//         return "Error! Price exceeds the maximum";
//     }

//     return "Success! Price is within acceptable limits";
// }

// // Change code above this line
// constructor({ price }) {
//     this.price = price;
// }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// === 18/20 === //
// ============= //
/** W aplikacji potrzebny jest administrator z możliwością dodawania poczty użytkowników do czarnej listy.

Zadeklaruj klasę Admin, która dziedziczy od klasy User
Dodaj do klasy Admin publiczną właściwość statyczną AccessLevel (poziom dostępu), wartością której jest obiekt { BASIC: "basic", SUPERUSER: "superuser" } */

// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
  
//   class Admin extends User {
//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     }

//   } 

// === 19/20 === //
// ============= //
/** Dodaj klasę Admin metodę constructor, która przyjmuje jeden parametr – obiekt ustawień z dwiema właściwościami email i accessLevel. Dodaj klasę Admin publiczną właściwość accessLevel, wartość której będzie przekazywana przy wywołaniu konstruktora.

Aby pokazać, jak używa się klasy Admin, dodaliśmy inicjalizację egzemplarza pod zadeklarowaniem klasy. */

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({email, accessLevel}) {
//         super(email)
//         this.accessLevel= accessLevel;
//     }

//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

// === 20/20 === //
// ============= //
/** Dodaj klasie Admin następujące właściwości i metody.

- Publiczną właściwość blacklistedEmails dla przechowywania czarnej listy adresów pocztowych użytkowników. Wartość domyślna to pusta tablica.
- Publiczną metodę blacklist(email) dla dodania poczty na czarną listę. Metoda powinna dodawać wartości parametru email do tablicy zapisującej się we właściwości blacklistedEmails.
- Publiczną metodę isBlacklisted(email) dla sprawdzenia poczty na czarnej liście. Metoda powinna sprawdzać obecność wartości parametru email w tablicy zapisującej się we właściwości blacklistedEmails i zwracać true lub false.
Po zadeklarowaniu klasy dodaliśmy inicjalizację egzemplarza i wywołanie metod w tej kolejności, w której twój kod będzie testowany. Prosimy niczego tam nie zmieniać. */

// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor({ email, accessLevel, blacklistedEmails }) {
//       super(email);
//       this.accessLevel = accessLevel;
//       this.blacklistedEmails = [];
//     }
//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }
//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }
  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
  