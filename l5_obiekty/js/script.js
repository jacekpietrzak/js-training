////////////////////
// === Kahoot === //
////////////////////

/** Co wyswietli konsola po wywolaniu funkcji ponizej ? 
function double(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
}
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
double(numbers);
console.log(numbers);
*/

/** For ... Of */
//* Refaktoryzacja kodu do For .. of
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);
// // console.log(calculateTotalPrice([12, 85, 37, 4]));

// Co sie stanie w kazdej iteracji?
// 0: i = 0, total (0) + 12 (order [0])
// 1: i = 1, total (12) + 85 (order [1]) = 97
// 2: i = 2, total (97) + 37 (order [2]) = 134
// 3: i = 3, total (134) + 4 (order [3]) = 138

//* wynik
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const price of order) {
//     total += price;
//   }

//   // Change code above this line
//   console.log(total);
//   return total;
// }
// calculateTotalPrice([12, 85, 37, 4]);

//-----------------------------------------------------------------------------------------------------

/////////////////////
// === Obiekty === //
/////////////////////

//* Obiekty pozwalają opisać i pogrupować cechy jakiegoś podmiotu - użytkownika, książki, produktu w sklepie, czegokolwiek. Obiekty nazywane są również słownikami, to znaczy zawierają terminy (właściwości) i ich definicje (wartości).

// === Tworzenie obiektu === //
// ========================= //
//* Do deklaracji używane są nawiasy klamrowe {} - literał obiektowy.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book);

//* Kiedy tworzysz obiekt, możesz dodać właściwości, z których każda jest opisana parami klucz:wartość. Klucz jest również nazywany nazwą właściwości i zawsze jest ciągiem znaków. Wartość właściwości może być dowolnego typu: prymitywy, tablice, obiekty, wartości logiczne, funkcje itp. Właściwości są oddzielone przecinkami.

//* Zasady nazewnictwa kluczy są proste:
//* - Jeśli klucz jest ujęty w cudzysłów, może to być dowolny ciąg.
//* - Jeśli nie ma cudzysłowów, to są ograniczenia - nazwa bez spacji, zaczyna się od litery lub znaków _ i $.

// === Wlasciwosci dolaczone === //
// ============================= //
//* Wartość właściwości może być innym obiektem w celu przechowywania dołączonych i pogrupowanych danych. Na przykład statystyki użytkownika sieci społecznościowej składają się z liczby obserwujących, wyświetleń i polubień, a najwygodniej jest przechowywać te dane w postaci obiektu. Tak samo jest z lokalizacją, w której umieszczamy osobno kraj i miasto.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// console.log(user);

//* W przyszłości można to wykorzystać do wyszukiwania użytkowników według kraju, miasta, minimalnej lub maksymalnej liczby obserwujących itp.

// === Odwołanie się do właściwości za pomocą kropki === //
// ===================================================== //
//* Pierwszym sposobem uzyskania dostępu do właściwości obiektu jest składnia "obiekt.nazwa_właściwości". Odwołanie za pomocą kropki jest używane w większości przypadków i jest odpowiednie, gdy znamy z góry nazwę (klucz) właściwości, do której chcemy uzyskać dostęp.
//* - Wartość właściwości o tej samej nazwie zostanie zwrócona do miejsca odwołania się.
//* - Jeśli w obiekcie nie ma właściwości o tej samej nazwie, undefined zostanie zwrócona do miejsca odwołania się.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// === Odwołanie się do załączonych właściwości === //
// ================================================ //
//* Aby uzyskać dostęp do załączonych właściwości, używany jest łańcuch odwołań „poprzez kropkę”. Na przykład, jeśli chcesz uzyskać wartość kraju użytkownika, napisz "user.location.country", gdzie "user.location" jest odwołaniem (ścieżką) do obiektu we właściwości location, natomiast "user.locaton.country" jest odwołaniem do właściwości country w tym obiekcie . Oznacza to, że „kropka” wskazuje następne dołączenie.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const userLocation = user.location;
// console.log(userLocation); // Obiekt location

// const userCountry = user.location.country;
// console.log(userCountry); // 'Jamaica'

//* Jeśli wartością właściwości jest tablica, to w naszym przykładzie user.hobbies jest odwołaniem do tej tablicy. Następnie możesz uzyskać dostęp do jej elementów przez nawiasy kwadratowe i indeks lub użyj właściwości i metod.

// const userHobbies = user.hobbies;
// console.log(userHobbies); // ['swiming', 'music', 'sci-fi']

// const userFirstHobby = user.hobbies[0];
// console.log(userFirstHobby); // 'swiming'

// const userLastHobby = user.hobbies[user.hobbies.length - 1];
// console.log(userLastHobby); // 'swiming'

// const userNumberOfHobbies = user.hobbies.length;
// console.log(userNumberOfHobbies); // 3

// === Odwołanie się do właściwości za pomocą nawiasów kwadratowych === //
// ==================================================================== //
//* Drugim sposobem uzyskania dostępu do właściwości obiektu jest użycie składni obiekt["nazwa właściwości"]. Jest podobna do odwołania się do elementu tablicy, z tą różnicą, że w nawiasach podaje się nie indeks elementu, ale nazwa właściwości jako string.

//* Składnia „nawiasów kwadratowych” jest używana znacznie rzadziej, gdy nazwa właściwości nie jest z góry znana lub jest przechowywana w zmiennej, na przykład jako wartość parametru funkcji.
//* - Wartość właściwości o tej samej nazwie zostanie zwrócona do miejsca odwołania się.
//* - Jeśli obiekt nie posiada właściwości o tej samej nazwie, do miejsca odwołania się powróci undefined.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// === Zmiana wartości właściwości === //
// =================================== //
//* Po utworzeniu obiektu można zmienić wartość jego właściwości. Aby to zrobić, musisz odnieść się do nich poprzez nazwę, na przykład „poprzez kropkę”, i przypisać nową wartość.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.isPublic = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.isPublic); // false
// console.log(book.genres); // ['historical prose', 'adventures', 'drama']

// === Dodawanie właściwości === //
// ============================= //
//* Operacja dodawania nowej właściwości po utworzeniu obiektu nie różni się od zmiany wartości istniejącej właściwości. Jeśli podczas zapisywania wartości przez nazwę nie ma takiej właściwości w obiekcie, zostanie ona utworzona.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book);
// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// === Właściwości skrócone === //
// ============================ //
//* Czasami podczas tworzenia obiektu wartość właściwości musi być pobrana ze zmiennej lub parametru funkcji o tej samej nazwie co sama właściwość.

//* Składnia w poniższym przykładzie jest zbyt uciążliwa, ponieważ trzeba powielić nazwę właściwości i nazwę zmiennej przechowującej wymaganą wartość.

// const name = "Henry Cibola”";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Henry Cibola”"
// console.log(user.age); // 25

//* Skrócona składnia właściwości (shorthand properties) rozwiązuje ten problem, umożliwiając użycie nazwy zmiennej jako nazwy właściwości i jej wartości jako wartości właściwości.

// const name = "Henry Cibola”";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Henry Cibola”"
// console.log(user.age); // 25

//* Oznacza to, że podczas deklarowania obiektu wystarczy podać tylko nazwę właściwości, a wartość zostanie pobrana ze zmiennej o tej samej nazwie.

// === Właściwości wyliczalne === //
// ============================== //
//* Zdarzają się sytuacje, w których podczas deklarowania obiektu konieczne jest dodanie właściwości o nazwie, której z góry nie znamy, ponieważ jest ona przechowywana jako wartość zmiennej lub jako wynik funkcji.
//* Wcześniej w tym celu trzeba było najpierw utworzyć obiekt, a następnie dodać właściwości za pomocą nawiasów kwadratowych, co nie jest zbyt wygodne.

// const propName = "name";
// const propLastName = "lastName";
// const user = {
//   age: 25,
// };
// console.log(user);

// user[propName] = "Henry";
// user.propLastName = "Cibola";
// console.log(user);
// console.log(user.name); // 'Henry Cibola”'

//* Składnia obliczonych właściwości (computed properties) pomaga uniknąć niepotrzebnego kodu, a w niektórych przypadkach go uprościć. Wartością obliczonej właściwości może być dowolne poprawne wyrażenie.

// const propName = "name";
// const user = {
//   age: 25,
//   // Nazwa tej właściwości zostanie pobrana z wartości zmiennej propName
//   [propName]: "Henry Cibola",
// };

// console.log(user.name); // 'Henry Cibola”'

// === Metody obiektowe === //
// ======================== //
//* Do tej pory traktowaliśmy obiekty tylko jako magazyny powiązanych ze sobą danych, na przykład informacji o książce itp. Obiekty pamięci masowej zwykle znajdują się w tablicy tych samych obiektów, która reprezentuje kolekcję podobnych elementów.
//* Obiekty mogą przechowywać nie tylko dane, ale także funkcje do pracy z tymi danymi - metody. Jeśli wartością właściwości jest funkcja, właściwość ta nazywana jest metodą obiektową.

// ✅ Logicznie i syntaktycznie pogrupowane encje
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // To jest metoda obiektowa
//   getBooks() {
//     console.log("Ta metoda zwróci wszystkie książki - właściwość books");
//     console.log(bookShelf.books);
//   },
//   // To jest metoda obiektowa
//   addBook(bookName) {
//     console.log("Ta metoda doda nową książkę do właściwości books");
//     bookShelf.books.push(bookName);
//     // this.books.push(bookName); // tez poprawne dodawanie
//   },
// };

// // Wywołania metod
// bookShelf.getBooks();
// bookShelf.addBook("Nowa książka");
// console.log(bookShelf);

//* Takie obiekty można nazwać „modelami”. Wiążą dane i metody do pracy z tymi danymi. Na przykład, można zadeklarować zmienną books oraz dwie funkcje getBooks() i addBook(bookName), ale wtedy byłyby trzema niezależnymi jednostkami bez wyraźnej składni i ze słabym połączeniem logicznym.

// ❌ Luźno powiązane, niezależne encje
// const books = [];
// function getBooks() {}
// function addBook() {}

// === Dostęp do właściwości obiektu w metodach === //
// ================================================ //
//* Metody służą do pracy z właściwościami obiektów i ich zmiany. Aby uzyskać dostęp do obiektu, metoda nie używa nazwy zmiennej, na przykład bookShelf, ale słowa kluczowego this - kontekstu. Wartością this będzie obiekt przed „kropką”, czyli obiekt, który wywołał tę metodę, w naszym przypadku jest to link do obiektu bookShelf.

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Kropka jest poprzedzona obiektem bookShelf,
// // więc kiedy metoda jest wywoływana, this będzie przechowywał link do niej.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

//* Aby uzyskać dostęp do właściwości obiektu w metodach, odwołujemy się do niego przez this, a następnie, jak zwykle, przez kropkę, do właściwości.

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

//* Logicznie byłoby myśleć - dlaczego nie użyć nazwy obiektu podczas odwołania się do właściwości, ponieważ wyraźnie nie zamierzamy tego zmieniać? Chodzi o to, że nazwa obiektu jest zmienna, metody jednego obiektu można skopiować do drugiego (pod inną nazwą), a w przyszłości przekonamy się, że często tworząc obiekt, w ogóle nie znamy nazwy z góry. Użycie this zapewnia, że metoda działa dokładnie na obiekcie, który ją wywołał.

//////////////////////////////////
// === Iteracja po obiekcie === //
//////////////////////////////////
//
//* W przeciwieństwie do tablicy lub stringu, obiekt nie jest jednostką iterowalną, czyli nie może być iterowany za pomocą pętli for lub for...of.

// === Pętla for...in === //
// ====================== //
//* Do iteracji po obiektach używana jest specjalna pętla for...in, która iteruje po kluczach obiektu object.

// for (key in object) {
//   // instrukcje
// }

//* Zmienna key jest dostępna tylko w ciele pętli. W każdej iteracji zostanie do niej zapisana wartość klucza (nazwa) właściwości. Aby uzyskać wartość właściwości z takim kluczem (nazwą), używana jest składnia nawiasów kwadratowych.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // dostep do Klucza
//   console.log(key);
//   // Dostep do Wartości właściwości z tym kluczem
//   console.log(book[key]);
// }

// === Metoda hasOwnProperty() === //
// =============================== //
//* Przeanalizujmy pojęcie własnych i dziedziczonych właściwości obiektu i nauczmy się poprawnie używać pętli for...in.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4

//* Metoda Object.create(animal) tworzy i zwraca nowy obiekt, wiążąc go z obiektem animal. W związku z tym można uzyskać wartość właściwości legs przez odniesienie do niej jako dog.legs, mimo że nie znajduje się ona w obiekcie dog - jest to jej właściwość dziedziczona obiektu animal.

//* Operator in, który jest używany w pętli for...in, nie rozróżnia własnych i dziedziczonych właściwości obiektu. Ta funkcja przeszkadza, ponieważ zawsze chcemy iterować tylko po naszych własnych właściwościach. Aby się dowiedzieć, czy obiekt ma własną właściwość, czy nie, używana jest metoda hasOwnProperty(key), która zwraca true albo false.

// // ❌ Zwraca true dla wszystkich właściwości
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Zwraca true tylko dla własnych właściwości
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

//* Dlatego podczas iteracji w pętli for...in konieczne jest dodanie sprawdzenia własnej właściwości przy każdej iteracji. Nawet jeśli teraz mamy pewność, że obiekt nie ma dziedziczonych właściwości, uchroni to przed ewentualnymi błędami w przyszłości.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Jeśli to jest własna właściwość, wykonaj if body
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Jeśli to nie jest własna właściwość, nie rób nic
// }

// === Metoda Object.keys() === //
// ============================ //
//* Wbudowana klasa Object posiada kilka przydatnych metod do pracy z obiektami. Pierwsza to Object.keys(obj), która pobiera obiekt i zwraca tablicę własnych kluczy jej własnych właściwości. Jeśli obiekt nie ma właściwości, metoda zwróci pustą tablicę.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// console.log(Object.keys(book)); // ['title', 'author', 'genres', 'rating']

//* Łącząc wynik Object.keys() i pętlę for...of można wygodnie iterować po własnych właściwościach obiektu bez użycia archaicznej pętli for...in ze sprawdzeniem własności właściwości.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Klucz
//   console.log(key);
//   // Wartość właściwości
//   console.log(book[key]);
// }

//* Iterujemy po tablicy kluczy obiektu i w każdej iteracji otrzymujemy wartość właściwości z takim kluczem.

// === Metoda Object.values() === //
// ============================== //
//* Metoda Object.keys(obj) zwraca tablicę kluczy własnych właściwości obiektu, natomiast metoda Object.values(obj) zwraca tablicę jego własnych wartości właściwości. Jeśli obiekt nie ma właściwości, metoda Object.values(obj) zwróci pustą tablicę.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

//* Tablicę wartości właściwości można również iterować za pomocą pętli for...of, na przykład, aby uzyskać łączną sumę wartości liczbowych.
//* Powiedzmy, że mamy do czynienia z zadaniem obliczenia całkowitej liczby produktów w obiekcie w formacie nazwa-produktu: ilość. Wtedy metoda Object.values() jest odpowiednia, aby uzyskać tablicę wszystkich wartości, a następnie wygodnie je zsumować.

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// === Metoda Object.entries() === //
// =============================== //
//* Metoda Object.entries(obj) zwraca tablicę notacji, z których każdy element będzie kolejną tablicą z dwóch elementów: nazwa właściwości i wartość tej właściwości z obiektu obj.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book);
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

//* W praktyce metoda Object.entries(obj) jest rzadko używana, tylko do niektórych bardzo specyficznych zadań. W 99% przypadków zostanie użyta metoda Object.keys() lub Object.values().

///////////////////////////////
// === Tablica obiektów  === //
///////////////////////////////
//
//* Standardowy zestaw codziennych zadań programisty obejmuje manipulowanie tablicą obiektów tego samego typu. Oznacza to, że wszystkie obiekty w tablicy mają ten sam zestaw właściwości, ale z różnymi wartościami.

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
//     title: "Sen śmiesznego człowieka",
//     author: "Fiodor Dostojewski",
//     rating: 7.75,
//   },
// ];

//* Do iteracji po takiej tablicy używana jest standardowa pętla for...of. Wartości właściwości każdego obiektu można uzyskać za pomocą składni przez „kropkę”, ponieważ w każdym obiekcie zestaw właściwości i ich nazwy będą takie same, różnią się tylko wartości.

// for (const book of books) {
//   // Obiekt książki
//   console.log(book);
//   // Tytuł
//   console.log(book.title);
//   // Autor
//   console.log(book.author);
//   // Ocena
//   console.log(book.rating);
// }

//* Na przykład otrzymaliśmy listę tytułów wszystkich książek z kolekcji books.

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "Beside Still Waters", "Sen śmiesznego człowieka"]

//* Dowiedzmy się średnią ocenę całej naszej kolekcji. Aby to zrobić, zsumuj wszystkie oceny, a następnie podziel tę wartość przez liczbę książek w kolekcji.

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }
// console.log(totalRating);

// const avarageRating = (totalRating / books.length).toFixed(2);
// console.log(avarageRating);

/** Funkcja Konstruktora */
// function createPerson(firstName, lastName) {
//   const person = {};
//   person.firstName = firstName;
//   person.lastName = lastName;
//   //   console.log(person);
//   return person;
// }
// console.log(createPerson("Jacek", "Pietrzak"));

const person = {
  firstName: "Jacek",
  lastName: "Pietrzak",
  country: "Poland",
};

for (const key in person) {
  if (key === "country") console.log(person[key]);
}
