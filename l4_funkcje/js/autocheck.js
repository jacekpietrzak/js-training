/////////////////////////////
// === Autosprawdzanie === //
/////////////////////////////

// === 8/32 === //
// ============ //
//* Najczęściej nie wiemy wcześniej, jaka będzie w kodzie długość tablicy. W celu otrzymania wartości ostatniego elementu przyjmuje się następujące postępowanie – długość tablicy jest zawsze o jednostkę dłuższa niż indeks ostatniego elementu. Wykorzystując formułę długość_tablicy - 1 można otrzymać wartość ostatniego elementu tablicy dowolnej długości.

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

// === 9/32 === //
// ============ //
//* Napisz funkcję getExtremeElements(array), która przyjmuje jeden parametr array – tablica elementów dowolnej długości. Funkcja powinna zwrarać tablicę składającą się z dwóch elementów – pierwszego i ostatniego elementu parametru array.

// function getExtremeElements(array) {
//   // Change code below this line
//   const arrayFirstElement = array[0];
//   const arrayLastElement = array[array.length - 1];

//   return [arrayFirstElement, arrayLastElement];

//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// === 10/32 === //
// ============= //
//* Metoda split(delimeter) pozwala zamienić łańcuch w talibcę, "rozbijając" go separatorem delimeter. Jeśli separatorem jest pusty łańcuch, wtedy otrzymamy tablicę oddzielnych symboli. Separatorem może być jeden lub kilka symboli.
//* Uzupełnij kod funkcji splitMessage(message, delimeter) tak, aby zwracała w zmiennej words rezultat podzielenia łańcucha message zgodnie z separatorem delimeter - tablica łańcuchów.

// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line

//   words = message.split(delimeter);
//   console.log(words);

//   // Change code above this line
//   return words;
// }
// splitMessage("Mango hurries to the train", " ");

// === 11/32 === //
// ============= //
//* Serwis grawerowania biżuterii potrzebuje funkcji, która automatycznie liczyłaby cenę grawerunku w zależności od ilości słów i ceny za słowo.
//* Zadeklarowana funkcja calculateEngravingPrice(message, pricePerWord). Ta funkcja przyjmuje łańcuch składający się ze słów oddzielonych tylko spacjami (parametr message) i ceny wygrawerowania jednego słowa (parametr pricePerWord).
//* Napisz ciało funkcji, aby zwracało ogólny koszt grawerunku wszystkich słów w łańcuchu.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   wordCount = message.split(" ");
//   return wordCount.length * pricePerWord;
//   // Change code above this line
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// === 12/32 === //
// ============= //

//* Metoda tablic join(delimeter) pozwala połączyć elementy tablicy w łańcuch. W łańcuchu elementy będą oddzielone symbolami lub grupami symboli ukazanych w delimeter. Jest to operacja odwrotna do metody łańcuchów split(delimeter).
//* Uzupełnij kod funkcji makeStringFromArray(array, delimeter) tak, aby zwracał w zmiennej string rezultat połączenia elementów tablicy array z separatorem delimeter - łańcuch.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimeter);
//   console.log(string);
//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

// === 13/32 === //
// ============= //

//* Termin slug - to zrozumiały dla człowieka, unikalny identyfikator, który jest wykorzystywany przy tworzeniu stron internetowych dla utworzenia czytelnych adresów URL.
//* Na przykład, zamiast tego, aby użytkownik zobaczył w adresie mysite.com/posts/1q8fh74tx, można utworzyć slug z nazwy artykułu. W rezultacie otrzymany adres będzie łatwiejszy do odczytania: mysite.com/posts/arrays-for-begginers.

//* Uwaga - Slug jest zawsze łańcuchem składającym się z małych liter, którego słowa oddzielone są dywizem.

//* Napisz funkcję slugify(title), która przyjmuje tytuł artykułu, parametr title, i zwraca slug utworzony z tego łańcucha.

//* - Wartością parmetru title będą łańcuchy, których słowa oddzielone są tylko spacjami
//* - Wszystkie symbole slug powinny być zapisane małą literą
//* - Wszystkie słowa slug powinny być oddzielone dywizem

// function slugify(title) {
//   // Change code below this line
//   let slug;
//   slug = title.split(" ");
//   slug = slug.join("-");
//   slug = slug.toLowerCase();

//   console.log(slug);
//   return slug;
//   // Change code above this line
// }
// slugify("Arrays for begginers");

// === 14/32 === //
// ============= //

//* Teoria //
//* Metoda slice(begin, end) zwraca nową tablicę zawierającą kopię części oryginalnej tablicy, nie zmieniając jej. Kopia powstaje od begin i do, jednak nie włączając, end - indeksy elementów oryginalnej tablicy.

//* - Jeśli begin i end nie są wskazane, utworzona zostanie pełna kopia oryginalnej tablicy.
//* - Jeśli nie jest wskazany end, kopiowanie zacznie się od start i przebiegnie do końca oryginalnej tablicy.
//* - Jeśli wartość start jest negatywna, a end nie była wskazana, zostanie skopiowane ostatnie X elementów.

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

//* Zadanie //
//* Uzupełnij kod tak, aby zmienne zawierały częściowe kopie oryginalnego łańcucha fruits.

//* - firstTwoEls - tablica skłądająca się z dwóch pierwszych elementów
//* - nonExtremeEls - tablica składająca się ze wszystkich elementów, oprócz pierwszego i ostatniego
//* - lastThreeEls - tablica składająca się z trzech ostatnich elementów

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(`nonExtremeEl: ${nonExtremeEls}`);
// console.log(lastThreeEls);

// === 15/32 === //
// ============= //

//* Teoria //
//* Metoda concat wykorzystana zostaje do połączenia dwóch lub więcej tablic. Nie zmienia tablicy, na której zostaje wywołana, a zwraca nową. Porządek argumentów metody wpływa na porządek elementów nowej tablicy.
// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

//* Zadanie //
//* Uzupełnij kod tak, aby w zmiennej allClients utworzyła się tablica ze wszystkich elementów tablic oldClients i newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

// === 16/32 === //
// ============= //

//* Zadanie //
//* Napisz funkcję makeArray(firstArray, secondArray, maxLength) dla utworzenia nowej tablicy ze wszystkimi elementami dwóch oryginalnych firstArray i secondArray. Parametr maxLength będzie zawierał maksymalną dostępną długość nowej tablicy.
//* Jeśli ilość elementów nowej tablicy przewyższa maxLength, kopia powinna zwrócić kopię tablicy o długości maxLength elementów. W przeciwnym razie funkcja powinna zwrócić nową tablicę w całości.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let array;
//   array = firstArray.concat(secondArray);

//   if (array.length > maxLength) {
//     array = array.slice(0, maxLength);
//     console.log(array);
//     return array;
//   }
//   return array;
//   // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// === 17/32 - Pętla for === //
// ========================= //

//* Teoria //
//* Pętle wykorzystywane są do wielokrotnego powtórzenia kodu. Zadeklarowanie pętli for składa się z trzech wyrażeń.

//for (Inicjalizacja; Warunek; Post - wyrażenie) {
// Ciało pętli
// }

//* - Inicjalizacja - wykonuje się jeden raz przed początkiem cyklu. Wykorzystuje się dla utworzenia zmiennej-licznika i wskzania jej początkowej wartości.
//* - Warunek - wyrażenie oceniane przed każdą iteracją (powtórzeniem) pętli. Ciało pętli wykonuje się tylko wtedy, gdy wyrażenie ma wartość true. Pętla kończy się, jeśli wartość osiągnie false.
//* - Post-wyrażenie - wykonuje się na końcu każdego powtórzenia pętli, przed sprawdzeniem warunku. Wykorzystuje się do aktualizacji zmiennej-licznika.
//* - Ciało - zbiór instrukcji do wypełnienia przy każdym powtórzeniu. Wykonuje się, jeśli wyrażenie warunku osiąga wartość true.

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
//* W przykładzie deklarowana jest zmienna i, inicjalizuje się wartością 0 i pętla wykonuje się (jej ciało) do czasu, aż i <= 20, to znaczy warunek osiąga true. Po każdej iteracji licznik zwiększa się o 5.

//* Zadanie //
//* Uzupełnij pętlę for tak, aby logowała wszystkie całe pętle w zakresie od start do end łącznie.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i++) {
//   // Change this line
//   console.log(i);
// }

// === 18/32 === //
// ============= //

//* Zadanie //
//* Napisz funkcję calculateTotal(number), która przyjmuje liczbę całkowitą (parametr number) i zwraca sumę wszystkich liczb całkowitych od jedynki do tej liczby. Na przykład, jeśli number wynosi 3, to sumą jest 1 + 2 + 3, to znaczy 6.

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i++) {
//     //   console.log(i);
//     total += i;
//     console.log(total);
//   }
//   console.log(total);

//   // Change code above this line
// }

// calculateTotal(5);

// calculateTotal(1);
// calculateTotal(3);
// calculateTotal(7);
// calculateTotal(18);
// calculateTotal(24);
// calculateTotal();

// === 19/32 === //
// ============= //

//* Teoria //
//* Cykl for można wykorzystać do iteracji po tablicy, to znaczy "sprawdzić" go po poszczególnych elementach.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//* W celu dostępu do elementów wykorzystuje się składnię nawiasów kwadratowych tablica[indeks], gdzie indeks to wartość licznika cyklu od 0 do ostatniego indeksu tablicy, który jest o jednostkę mniejszy od długości tablicy.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

//* W celu dostępu do elementów wykorzystuje się składnię nawiasów kwadratowych tablica[indeks], gdzie indeks to wartość licznika cyklu od 0 do ostatniego indeksu tablicy, który jest o jednostkę mniejszy od długości tablicy.

//* Zadanie //
//* Uzupełnij kod cyklu for tak, aby kolejno logował wszystkie elementy tablicy fruits.

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// === 20/32 === //
// ============= //

//* Zadanie //
//* Napisz funkcję calculateTotalPrice(order), która przyjmuje jeden parametr order – tablicę liczb i oblicza całkowitą sumę jej elementów. Całkowita suma elementów powinna zapisywać się w zmiennej total, która zostaje zwrócona jako rezultat działania funkcji.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i++) {
//     total += order[i];
//   }

//   console.log(total);
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice();

// === 21/32 === //
// ============= //

//* Zadanie //
//* Napisz funkcję findLongestWord(string), która przyjmuje dowolny łańcuch składający się wyłącznie ze słów rozdzielonych spacją (parametr string) i zwraca najdłuższe słowo w tym łańcuchu.

// function findLongestWord(string) {
//   // Change code below this line

//   let longestWord = "";
//   let stringArr = string.split(" ");
//   console.log(stringArr);
//   console.log(stringArr.length);

//   for (i = 0; i < stringArr.length; i++) {
//     if (stringArr[i].length > longestWord.length) {
//       longestWord = stringArr[i];
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
//   // Change code above this line
// }

// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("Google do a roll");
// findLongestWord("May the force be with you");
// findLongestWord();

// === 22/32 - Metoda Push === //
// =========================== //

//* Teoria //
//* Metoda push() pozwala dodać jeden lub kilka elementów na końcu tablicy bez konieczności wskazania indeksów dodawanych elementów.

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

//* Zadanie //
//* Uzupełnij kod funkcji createArrayOfNumbers(min, max) tak, aby zwracał tablicę wszystkich całych liczb od wartości min do max.

// function createArrayOfNumbers(min, max) {
//   let numbers = [];
//   // Change code below this line

//   for (i = min; i <= max; i++) {
//     numbers = numbers.concat(i);
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers();

//* Push //
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(1, 3);
// createArrayOfNumbers(14, 17);
// createArrayOfNumbers(29, 34);
// createArrayOfNumbers();

// === 23/32 === //
// ============= //

//* Zadanie //
//* Napisz funkcję filterArray(numbers, value), która przyjmuje tablicę liczb (parametr numbers) i zwraca nową tablicę, w której będą tylko te elementy tablicy numbers, które są większe niż wartość parametru value (liczba).

// function filterArray(numbers, value) {
//   // Change code below this line

//   let oldArray = numbers;
//   //   console.log(oldArray.length);
//   let newArray = [];
//   //   console.log(newArray.length);

//   for (i = 0; i < oldArray.length; i++) {
//     // console.log(oldArray[i]);
//     if (oldArray[i] > value) {
//       newArray.push(oldArray[i]);
//     }
//   }

//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);
// filterArray();

// === 24/32 - Icludes === //
// ======================= //

//* Teoria //
//* Metoda includes(value) sprawdza, czy na tablicy znajduje się element z wartością value i zwraca odpowiednio true lub false. Obszar zastosowania tej metody sprowadza się do sytuacji, w których należy sprawdzić, czy element znajduje się na tablicy i nie ważna jest przy tym jego pozycja (indeks).

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

//* Zadanie //
//* Funkcja checkFruit(fruit) przyjmuje łańcuch z nazwą owocu (parametr fruit) i sprawdza, czy dany owoc znajduje się na tablicy fruits.
// Uzupełnij kod funkcji tak, że jeżeli:
//* - owoc jest na tablicy, funkcja zwraca true;
//* - owocu nie ma na tablicy, funkcja zwraca false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   console.log(fruits.includes(fruit));
//   return fruits.includes(fruit); // Change this line
// }

// checkFruit("plum");
// checkFruit("mandarin");

// === 25/32 - Icludes === //
// ======================= //

//* Zadanie //
//* Wspólnymi elementami tablic nazywane są te elementy, które są obecne we wszystkich tablicach.
//* Na przykład w dwóch tablicach [1, 3, 5] i [0, 8, 5, 3] wspólne będą liczby 3 i 5, ponieważ są obecne w obu oryginalnych tablicach. A liczby 0, 1 i 8 są obecne w tylko jednej z tablic.
//* Napisz funkcję getCommonElements(array1, array2), która otrzymuje dwie tablice dowolnej długości w parametrach array1 i array2 i zwraca nową tablicę składającą się z tych elementów, które są obecne w obu oryginalnych tablicach.

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   let newArr = [];

//   for (i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   console.log(newArr);
//   return newArr;

//   // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);
// getCommonElements();

// === 26/32 - Cykl For ... OF === //
// =============================== //

//* Teoria //
//* Instrukcja for...of deklaruje cykl przechodzący przez obiekty pozwalające się iterować, takie jak tablice i łańcuchy. Ciało pętli będzie wykonywać się dla wartości każdego elementu. To dobra zamiana pętli for, jeżeli nieptorzebny jest dostęp do licznika iteracji.

// for (const variable of iterable) {
//   // ciało cyklu
// }

//* - variable — zmienna, która będzie przechowywać wartość elementu dla każdej iteracji
//* - iterable — zbiór, który zawiera przeliczalne elementy, na przykład tablica

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

//* Zadanie //

// Wykonaj refaktor kodu funkcji calculateTotalPrice(order) zamieniając pętlę for na for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   //   for (let i = 0; i < order.length; i += 1) {
//   //     total += order[i];
//   //   }

//   for (const price of order) {
//     total += price;
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]); //138
// calculateTotalPrice([164, 48, 291]); //503
// calculateTotalPrice([412, 371, 94, 63, 176]); //1116
// calculateTotalPrice([]); //0

// === 27/32 - Cykl For ... OF === //
// =============================== //

//* Zadanie //
//* Wykonaj refaktor funkcji filterArray(numbers, value) zamieniając pętlę for na for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//   //   let numbers = [];

//   //   for (let i = 0; i < numbers.length; i++) {
//   //     const number = numbers[i];

//   //     if (number > value) {
//   //       filteredNumbers.push(number);
//   //     }
//   //   }

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   console.log(filteredNumbers);
//   return filteredNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
// filterArray([1, 2, 3, 4, 5], 4); // [5]
// filterArray([1, 2, 3, 4, 5], 5); // []
// filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]

// === 28/32 - Operator % === //
// ========================== //

//* Teoria //
//* Zamiast tego, aby zwracać wynik dzielenia, operacja z modułem (%) zwraca całkowitą resztę z dzielenia dwóch liczb – dzielnej i dzielnika.

// 5 % 1 = 0;
// // 5, podzielone na 1, równa się 5, i reszta - 0

// 5 % 2 = 1;
// //  5, podzielone na 2, równa się 2, i reszta - 1

// 5 % 3 = 2;
// //  5, podzielone na 3, równa się 1, i reszta - 2

// 5 % 4 = 1;
// //  5, podzielone na 4, równa się 1, i reszta - 1

// 5 % 5 = 0;
// //  5, podzielone na 5, równa się 1, i reszta - 0

//* Zadanie //
//* Uzupełnij wyrażenie reszty z dzielenia tak, aby kod przechodził testy.

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a); //0
// console.log(b); //1
// console.log(c); //3
// console.log(d); //5
// console.log(e); //2

// === 29/32 - Operator % === //
// ========================== //

//* Zadanie //
//* Napisz funkcję getEvenNumbers(start, end), która zwraca tablicę wszystkich liczb parzystych od start do end. Liczba parzysta to liczba dzieląca się na 2 bez reszty (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let evenNumbers = [];

//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   console.log(evenNumbers);
//   return evenNumbers;

//   // Change code above this line
// }

// getEvenNumbers(2, 5); // [2, 4]
// getEvenNumbers(3, 11); // [4, 6, 8, 10]
// getEvenNumbers(6, 12); // [6, 8, 10, 12]
// getEvenNumbers(8, 8); // [8]
// getEvenNumbers(7, 7); // []

// === 29/32 - Operator % === //
// ========================== //

//* Teoria //
//* Wykonywanie pętli można przerwać w dowolnym momencie. W tym celu istnieje operator break, który w pełni przerywa wykonywanie pętli i przekazuje kontrolę do łańcucha za jej ciałem.
//* Przykładowo szukamy liczby 3. Jak tylko wykonany zostanie warunek if, pętla zakończy swoje wykonywanie (będzie przerwana).

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Znaleźliśmy liczbę 3, przerywamy wykonanie pętli");
//     break;
//   }
// }

// console.log("Log po pętli");

//* Zadanie //
//* Uzupełnij kod tak, aby w zmiennej number zapisywała się liczba od start do end, która dzieli się na 5 bez reszty.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// === 31/32 - Operator BREAK VS RETURN === //
// ======================================== //

//* Teoria //
//* Jeśli pętla znajduje się w ciele funkcji, to operator break nie przerywa wykonania funkcji, a przerwie tylko pętlę. W celu przerwania wykonania jednocześnie pętli i funkcji stosuje się operator return.
//* W przykładzie szukamy liczby 3. Jak tylko spełniony zostanie warunek if, robimy zwrot, który przerwie wykonanie pętli i funkcji.

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log(
//         "Znaleźliśmy liczbę 3, robimy zwrot, przerywając pętlę w funkcji"
//       );
//       return i;
//     }
//   }

//   // Ten console.log nie wykona się
//   console.log("Log po pętli w ciele funkcji");
// }

// const result = fn();
// console.log("Log po wyjściu z funkcji");
// console.lof(`Rezultat wykonania funkcji ${result}`);

//* Zadanie //
//* Wykonaj refaktor funkcji findNumber(start, end, divisor) tak, aby ona:

//* - zwracała pierwszą liczbę od start do end, która dzieli się na divisor bez reszty
//* - nie wykorzystywała operatora break
//* - nie wykorzystywała zmiennej number

// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

// findNumber(2, 6, 5); // 5
// findNumber(8, 17, 3); // 9
// findNumber(6, 9, 4); // 8
// findNumber(16, 35, 7); // 21

// === 31/32 - Funkcja Includes === //
// ================================ //

//* Zadanie //
//* Napisz funkcję includes(array, value), która robi to samo, co metoda tablicy tablica.includes(wartość) - sprawdza, czy na tablicy array jest wartość value, zwracając true, jeżeli jest i false w przeciwnym wypadku.
//* W trakcie wykonywania tego zadania w ciele funkcji includes() nie można wykorzystywać metody tablica.includes(wartość).

// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === value) {
//       console.log(true);
//       return true;
//     }
//   }
//   console.log(false);
//   return false;
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3); //true
// includes([1, 2, 3, 4, 5], 17); // false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"); // true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"); // false
// includes(["apple", "plum", "pear", "orange"], "plum"); // true
// includes(["apple", "plum", "pear", "orange"], "kiwi"); // false;
