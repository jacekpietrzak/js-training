///////////////////////
// === Po Kahoot === //
///////////////////////

//* Operator && zwraca ostatni operand (jeden z warunkow) jezeli cale wyrazenie zwraca true. Jeśli chociażby jeden z operandów będzie false, rezultat wyrażenia otrzyma jego znaczenie. Czyli logiczne && wyłapuje pierwszy false i zwraca to znaczenie przy którym to się stało, albo ostatni w kolejności operand. Prawy operand może nie być sprawdzony, jeśli lewy doprowadzi do false.
// ==================================== //

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

//* Operator || zwraca pierwszy operand (jeden z warunkow) ktory "zwraca" true. Jesli żaden warunek nie był spełniony, otrzymujemy false - wartość ostatniego operanda. Operand && wyłapuje pierwszą prawdę i zwraca znaczenie - to znaczenie, przy którym to się odbyło lub ostatni w kolejności operand. Prawy operand niekoniecznie musi być sprawdzony, jeśli lewy już był sprawdzony jako true.
// ==================================== //

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(false || false); // false
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

//* Jakie wyrazenie da w rezultacie znaczenie "Mango"?
// ==================================== //

// a. null && false && "Mango"
// b. null || "false" || "Mango"
// c. "false" && "Mango" || null
// d. "Mango" && null || false

// console.log(null && false && "Mango"); // null -> false
// console.log(null || "false" || "Mango"); // string "false" -> true
// console.log(("false" && "Mango") || null); // string "Mango" -> true
// console.log(("Mango" && null) || false); // false

//* 6 nieprawdziwych (false) wartości, które doprowadzają do false w logicznej konwertacji:
//* 0, NaN, null, undefined, pusty wiersz i false.
//* Wszystkie inne wartości doprowadzają do true.
// ==================================== //

/////////////////////
// === Tablice === //
/////////////////////

//* Tablice deklaruje sie za pomoca nawiasow []. To zmienne referencyjne.
// ==================================== //

// const a = [];
// const b = a; // a i b wsjazuja na dokladnie to samo miejsce w pamieci.

// const clients = [
//   "Microsoft",
//   "Google",
//   "VW",
//   "Mercedes",
//   function () {
//     console.log("Hello from array!");
//   },
// ]; // Kolejnosc jest zachowana
// console.log(clients);
// console.log(clients[4]());
// console.log("Ostatni element tablicy to =", clients[clients.length - 1]); // wylogowanie ostatniego elementu z tablicy

//* Podając indeks elementu w nawiasie, otrzymujemy jego wartość
// ==================================== //

// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax
// console.log(clients[3]); // Kiwi
// console.log(clients[4]); // undefined (Brak wartosci na podanym indeksie)
// console.log(clients[5]); // undefined (Brak wartosci na podanym indeksie)
// console.log(clients.length); // ilosc elementow w tablicy
// console.log(clients.length - 1); // numer indeksu dla ostatniego elementu

// let i = 0;
// while (clients[i] !== undefined) {
//   console.log(i);
//   i++;
// }

// if ("jakub".length === 5) {
//   [console.log(1)];
// }

// const person = {
//   name: "Jakub",
//   city: "Poznan",
// };
// // console.log(person.name);
// console.log(person["name"]);

//* Jesli chcemy wymienic jakis element w tablicy np. poly na Apple
// ==================================== //

// const fruits = [
//   "Mango",
//   "Banana",
//   "Orange",
//   "Kiwi",
//   "Mango",
//   "Banana",
//   "Orange",
//   "Kiwi",
//   "Mango",
// ];

//* robimy:
// ==================================== //

// console.log(fruits);
// fruits[1] = "Apple"; // wymiana elementu z indeksem 1 na "Apple"
// console.log(fruits); // Wyswietlanie tablicy w konsoli
// console.log(fruits.length); // ilosc elementow w tablicy
// console.log(fruits.findIndex((el) => el === "Kiwi")); // Jesli chcemy znalezc numer indeksu a znamy wartosc

// rekurencja
// ==================================== //

// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "Mango") {
//     console.log(i);
//   }
// }

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//* wypelniacz tablicy jedna wartoscia
// ==================================== //

// const a = [];
// a.length = 15;
// a.fill(0, 0, 15);
// console.log(a);

///////////////////////////////
// === Iteracje w arrays === //
///////////////////////////////

/////////////////////////////////////
// === for ... of - dla tablicy ===//
/////////////////////////////////////

// for (const variable of iterable) {
//// ciało pętli
// }
// * variable — zmienna, która będzie zawierać wartość elementu w każdej z iteracji.
// * iterable — kolekcja, która ma elementy, np. array.

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// for (const zmienna of fruits) {
//   console.log(zmienna);
// }

//* break i continue
// ==================================== //

// const fruitNameToFind = "Kiwi";
// let message;

// for (const fruit of fruits) {
//   if (fruit === fruitNameToFind) {
//     message = "Dany owoc jest w bazie danych!";
//     break;
//   }
//   message = "Nie znalezlismy takiego owocu w bazie danych!";
// }

// console.log(message);

//* sprawdzanie ktore liczy sa wieksze niz 5 z tablicy numbers
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// // const threshold = 5;
// const threshold = Number.parseInt(prompt("Podaj wartosc"));
// console.log(`Zbior liczb: ${numbers}`);
// console.log(`Wybrales liczbe ${threshold}`);

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Liczba wieksza niz ${threshold} to: ${numbers[i]}`);
// }

//* wyswietlanie elementow tablicy numbers:
// for (const element of numbers) {
//   console.log(element);
// }

//////////////////////////////
// === Metody tablicowe === //
//////////////////////////////

//////////////////////
// split() i join() //
//////////////////////

//* split(delimeter) przekształca ciąg znaków w tablicę, dzieląc go przez ogranicznik delimiter. Jeśli ogranicznik jest pustym ciągiem, zostanie uzyskana tablica pojedynczych znaków. Ogranicznikiem może być jeden lub więcej znaków.
// ==================================== //

// const name = "Mango";
// console.log(name);
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript jest ciekawy";
// console.log(message);
// console.log(message.split(" ")); // ["JavaScript", "jest", "ciekawy"]

// join(delimeter) Łączy elementy tablicy w ciąg. W ciągu elementy będą oddzielone znakiem lub grupą znaków określoną w delimiter. Jest to w jakimś sensie przeciwieństwo metody split(delimiter).
// ==================================== //

const words = ["JavaScript", "jest", "ciekawy"];
console.log(words.join("")); // "JavaScriptjestciekawy"
console.log(words.join(" ")); // "JavaScript jest ciekawy"
console.log(words.join("-")); // "JavaScript-jest-ciekawy"
console.log(typeof words.join()); // String

///////////////
// indexOf() //
///////////////

//* indexOf(value) zwraca pierwszy indeks, pod którym znaleziono w tablicy element o wartości value lub liczbę -1, jeśli takiego elementu nie ma, użyj indexOf, gdy potrzebujesz bezpośrednio uzyskać indeks elementu.
// ==================================== //

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

////////////////
// includes() //
////////////////

//* includes(value) sprawdza, czy w tablicy znajduje się element z wartością value i zwraca odpowiednio true lub false. Zakres użycia tej metody sprowadza się do sytuacji, w których konieczne jest sprawdzenie, czy w tablicy znajduje się element, a jego pozycja (indeks) nie jest istotna.
// ==================================== //

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

////////////////////
// push() i pop() //
////////////////////

//* Dodają lub usuwają najbardziej zewnętrzne elementy tablicy. Działają tylko ze skrajnym lewym i prawym elementem i nie mogą umieszczać ani usuwać elementu z dowolnej pozycji.

//* Metoda push() dodaje jeden lub więcej elementów na koniec tablicy, bez konieczności określania indeksów dodawanych elementów. Zwraca długość tablicy po dodaniu elementów.
// ==================================== //

// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

//* Metoda pop() usuwa ostatni element z końca tablicy i zwraca usunięty element. Jeśli tablica jest pusta, metoda zwraca undefined.

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []

/////////////
// slice() //
/////////////

//* slice(begin, end) zwraca nową tablicę zawierającą kopię części oryginalnej tablicy bez jej modyfikowania. Kopia jest tworzona od begin do, ale bez end - indeksów elementów oryginalnej tablicy.
// ==================================== //

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients);
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// //* Jeśli begin i end nie są określone, zostanie utworzona kompletna kopia oryginalnej tablicy.
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]
// //* Jeśli nie określono end, kopiowanie będzie się odbywać od start do końca oryginalnej tablicy.
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]
// //* Jeśli wartość start jest ujemna, a end nie jest określona, to ostatnie elementy start zostaną skopiowane
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

//////////////
// splice() //
//////////////

//* Szwajcarski nóż do pracy z tablicami, jeśli oryginalna tablica wymaga modyfikacji, usuwa, dodaje i zastępuje elementy w dowolnym miejscu tablicy. W praktyce wartość zwracana (tablica usuniętych elementów) jest rzadko używana. Zasadniczo wystarczy usunąć elementy z tablicy.

//* usuwanie
//* aby usunac elementy z tablicy, przekazywane sa dwa argumeny.
//* splice(position, num)
//* position - wskazuje pozycję (indeks) pierwszego elementu do usunięcia
//* num - określa liczbę usuniętych elementów
// ==================================== //

//* Metoda splice modyfikuje oryginalną tablicę i zwraca tablicę zawierającą usunięte elementy. Na przykład mamy tablicę ocen zawierającą pięć liczb od 1 do 5.
// const scores = [1, 2, 3, 4, 5];

// //* Usuń trzy elementy tablicy, zaczynając od pierwszego elementu (indeks 0)
// const deletedScores = scores.splice(0, 3);

// //* Tablica scores zawiera teraz dwa elementy
// console.log(scores); // [4, 5]

// //* Tablica deletedScores zawiera trzy usunięte elementy
// console.log(deletedScores); // [1, 2, 3]

//* dodawanie
//* Aby dodać jeden lub więcej elementów do tablicy, należy przekazać trzy lub więcej argumentów, a drugi argument musi być równy zero. Drugi element mowi nam ile elementow chcemy usunac.
//* splice(position, 0, new_element_1, new_element_2, ...)
//* Argument 'position' określa pozycję początkową w tablicy, w której zostaną wstawione nowe elementy.
//* Drugi argument to zero, mówi metodzie, aby nie usuwała elementów w miejscu dodawania nowych.
//* Trzeci, czwarty i wszystkie kolejne argumenty to nowe elementy dodawane do tablicy.

//* Na przykład mamy tablicę nazw kolorów. Dodajmy nowy kolor przed elementem o indeksie 2.
// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]
//* Możesz dodać dowolną liczbę elementów, przekazując czwarty, piąty argument i tak dalej.

//* zamiana
//* Zamiana to operacja dodawania, w której elementy są usuwane w momencie dodawania nowych. Aby to zrobić, musisz przekazać co najmniej trzy argumenty. Liczba elementów usuniętych i dodanych może nie być taka sama.
//* splice(position, num, new_element_1, new_element_2, ...)
//* position - wskazuje pozycję (indeks) pierwszego elementu do usunięcia
//* num - określa liczbę usuniętych elementów
//* Trzeci, czwarty i wszystkie kolejne argumenty to nowe elementy dodawane do tablicy.

// //* Na przykład mamy tablicę języków programowania składającą się z czterech elementów.
// const languages = ["C", "C++", "Java", "JavaScript"];

// // Zmieniamy element o indeksie 1 na nowy
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Zmieniamy jeden element (z indeksem 2) na kilka
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

//////////////
// concat() //
//////////////

//* Łączy dwie lub więcej tablic w jedną. Nie zmienia tablicy, na której jest wywoływana, ale zwraca nową. Kolejność argumentów metody wpływa na kolejność elementów w nowej tablicy.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
