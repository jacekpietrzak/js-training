/** Lekcja 6 */

////////////////////
// === Kahoot === //
////////////////////

////////////////////////////////////
// === Składnia spread i rest === //
////////////////////////////////////
/** Współczesny standard ma nową składnię do pracy z iterowalnymi jednostkami, takimi jak string, tablica lub obiekt. Jego funkcjonalność i nazwa zależy od miejsca zastosowania.*/

/** Spread - "..." uzyte na poczatku argumentow daje rozlozenie "rozsmarowanie" wartosci.
 *  zastosowanie:
 *    - Wyjmujemy wszystkie elementy z pudelka (tworzymy nowe tablice, obiekty, przekazujemy np. elementy tablicy jako poszczegolne (po kolei, jednen po drugim) argumenty funkcji)
 */

/** Rest - "..." uzywane na koncu argumentow daje reszte.
 *  zastosowanie:
 *    - Przypisanie wszystkich argumentow do iterowalnej zmiennej
 */

// === spread: przekazywanie argumentów === //
// ======================================== //
/** Operacja ... (spread) umożliwia rozłożenie kolekcji elementów (tablicy, stringu lub obiektu) do miejsca, w którym oczekiwany jest zestaw różnych wartości. Oczywiście istnieją pewne ograniczenia, na przykład nie można rozkładać tablicy do obiektu i odwrotnie.

Istnieje analogia z pudełkiem jabłek. Stawiając pudełko na podłodze bez wyjmowania z niego jabłek, otrzymujemy analog tablicy wartości. Jeśli wysypać jabłka z pudełka na podłogę, następuje rozłożenie - kolekcja przetwarza się na zestaw oddzielnych wartości.

Jest tylko jedna różnica - w JavaScript rozłożenie nie zmienia oryginalnej kolekcji, czyli tworzy kopię każdego elementu. Po rozłożeniu na podłodze będzie pudełko pełne jabłek i kopia każdego jabłka.

Na przykład metoda Math.max(argumenty) wyszukuje i zwraca największy z argumentów (liczb), co oznacza, że nie oczekuje tablicy wartości, ale dowolnej liczby argumentów. */

// const temps = [14, -4, 25, 8, 11];

// // Konsola będzie miała tablicę
// console.log(temps);
// // ❌ To nie zadziała, ponieważ przekazujemy całą tablicę
// console.log(Math.max(temps)); // NaN

// // Konsola będzie miała zestaw oddzielnych liczb
// const numbers = ...temps;
// console.log(...temps);
// console.log(typeof (numbers));
// // ✅ Rozłóżmy kolekcję elementów jako oddzielne argumenty
// console.log(Math.max(...temps)); // 25

/** Czyli zapis Math.max(...[14, -4, 25, 8, 11]), po interpretacji zamienia się w Math.max(14, -4, 25, 8, 11) - składnia ... zwraca rozpakowaną tablicę, czyli rozkłada jej elementy jako oddzielne argumenty. */

// === spread: tworzenie nowej tablicy === //
// ======================================= //
/** Operacja ... (spread) pozwala na utworzenie kopii tablicy lub "sklejenie" dowolnej liczby tablic w jedną nową. Wcześniej używano do tego metod slice() i concat(), ale operacja rozłożenia pozwala zrobić to samo w krótszej formie. */

// const temps = [14, -4, 25, 8, 11];

// // To jest dokładna, ale niezależna kopia tablicy temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

/** W powyższym przykładzie mamy pudełko jabłek temps i chcemy zrobić jego dokładną kopię. Bierzemy puste pudełko i wsypujemy do niego jabłka z oryginalnego pudełka temps - rozkładamy go do innej kolekcji. W tym przypadku pudełko temps nie zmieni się, nadal będzie zawierało jabłka, a nowe pudełko będzie zawierało ich dokładne kopie. */
/** W poniższym przykładzie wsypujemy jabłka z dwóch pudełek do nowego. Oryginalne pudełka (tablice) nie ulegną zmianie, ale nowe będą zawierały kopie wszystkich ich jabłek (elementów). Kolejność rozkładania jest ważna - wpływa na kolejność elementów w nowej kolekcji. */

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// === spread: tworzenie nowego obiektu === //
// ======================================= //
/** Operacja ... (spread) pozwala na rozkładanie właściwości dowolnej liczby obiektów do jednego nowego. */

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third);

/** Kolejność rozkładania ma znaczenie. Nazwy właściwości obiektów są niepowtarzalne, więc właściwości rozkładanego obiektu mogą nadpisać wartość istniejącej właściwości, jeśli ich nazwy są takie same. */

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third);

// const third = { ...second, ...first };
// console.log(third);

/** Gdyby jabłka w pudełku miały etykiety, to w jednym pudełku nie mogłyby znajdować się dwa jabłka z tymi samymi etykietami. Dlatego podczas wysypania drugiego pudełka wszystkie jabłka, których etykiety pokrywają się z tymi, które są już w nowym, zastąpią te, które już są. */
/** Podczas rozkładania możesz dodać właściwości do dowolnego miejsca. Najważniejszą rzeczą do zapamiętania jest to, że nazwa właściwości jest unikalna i że jej wartość można nadpisać. */

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third);

// === rest: zbiór wszystkich argumentów funkcji === //
// ================================================= //
/** Operacja ... (rest) umożliwia zebranie grupy niezależnych elementów w nową kolekcję. Syntaktycznie jest to bliźniak operacji rozłożenia, ale łatwo je rozróżnić — rozłożenie następuje, gdy ... znajduje się po prawej stronie operacji przypisania, a zbiór ma miejsce, gdy ... znajduje się po lewej stronie. */
/** Wróćmy do analogii z jabłkami. Jeśli na podłodze są jabłka i mamy puste pudełko, to operacja rest pozwoli nam „zbierać” jabłka do pudełka. W takim przypadku oryginalne jabłka pozostaną na podłodze, a w pudełku będzie kopia każdego jabłka. */
/** Jednym z zastosowań operacji rest jest tworzenie funkcji, które mogą przyjmować dowolną liczbę argumentów. */

// Jak zadeklarować parametry funkcji tak,
// aby można było przekazać dowolną liczbę argumentów?
// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

/** Jeśli usuniemy cały „szum składni” i spojrzymy na argumenty i parametry funkcji, to argumenty znajdują się po prawej stronie operacji przypisania, a parametry po lewej, ponieważ wartości argumentów są przypisane do zadeklarowanych parametrów. Możesz więc "zbierać" wszystkie argumenty funkcji w jeden parametr za pomocą operacji rest. */

// function multiply(...args) {
//   console.log(args); // tablica wszystkich argumentów
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

/** Nazwa parametru może być dowolna. Najczęściej nazywają go args, restArgs albo otherArgs, co jest skrótem od arguments. */

// function sumNumbers(a, b, ...args) {
//   let sum = a + b;

//   console.log(args);

//   for (const number of args) {
//     sum += number;
//   }

//   console.log("Suma podanych liczb wynosi:", sum); // string + number
//   // console.log(`Suma podanych liczb wynosi: ${sum}`); // string
//   return sum;
// }
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];
// sumNumbers(...numberArray);

/** Dziala rowniez na stringu: */
// console.log(..."abgfd"); // a b g f d

//--- Inny przyklad ---//
//---------------------//

// function logArrayToConsole(...args) {
//   // for of - iteracja po tablicy
//   // [{}, 1, "tekst", [], {}]
//   for (const element of args) console.log(element);
// }
// const dataArray = [
//   { city: "Poznan", language: "Polish" },
//   [1, 4, 6, 8, 3],
//   1,
//   2,
//   3,
//   "text",
//   { name: "Jacek", lastName: "Pietrzak" },
//   false,
//   undefined,
//   null,
// ];
// logArrayToConsole(...dataArray);
// console.log(...dataArray);
// console.log([...dataArray]);
// console.log(dataArray);

// [...jakasTablica]; // => kopia tablicy jakasTablica[]

// const favBook = {
//   author: "Jake Black",
//   title: "Dark darkness",
//   description: "Greatest book you can read",
//   year: 1986,
//   category: ["thriller", "adventure", "cryminal"],
// };

// console.log(favBook);
// const favBook2 = { ...favBook, title: "", description: "" }; // nadpisujemy wartosci
// console.log(favBook2);
// const favBook3 = { title: "", description: "", ...favBook }; // nie nadpisujemy wartosci => wartosci beda jak w oryginale. Tutaj mamy rest
// console.log(favBook3);

// const numbersArray2 = [1, 2, 3, 4, 5];
// const numbersArray3 = numbersArray2;
// console.log(numbersArray2 === numbersArray3); // true => tablica numbersArray3 kieruje na ten sam adres cos numbersArray2 dlatego true
// console.log(numbersArray2 === [...numbersArray2]); // false => [...numbersArray2] to dynamiczna nowa tablica, do ktorej kopiujemy zawartosc tablicy numbersArray2.

// === rest: zbiór części argumentów funkcji === //
// ============================================= //
/** Operacja ... (rest) umożliwia również zbiór do tablicy tylko tej części argumentów, która jest potrzebna poprzez zadeklarowanie parametrów przed „zbiorem”. */

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Wartość pierwszego argumentu
//   console.log(secondNumber); // Wartość drugiego argumentu
//   console.log(otherArgs); // Tablica innych argumentów
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

/** Wszystkie argumenty dla których zostaną zadeklarowane parametry przekażą im swoje wartości, reszta argumentów zostanie umieszczona w tablicy. Operacja rest zbiera wszystkie pozostałe argumenty i dlatego musi iść na końcu w sygnaturze funkcji, w przeciwnym razie wystąpi błąd. */

///////////////////////////////////////
// === Destrukturyzacja obiektów === //
///////////////////////////////////////
/** Podczas działania programów dane przychodzą z reguły w postaci tablic i obiektów, których wartości należy zapisać w zmiennych lokalnych. Aby to maksymalnie uprościć, współczesny standard ma składnię przypisania destrukturyzującego. */

// === Destrukturyzacja obiektów === //
// ================================= //
/** Złożone dane są zawsze reprezentowane jako obiekt. Wielokrotne wywołania właściwości obiektu wizualnie zanieczyszczają kod. */
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "publiczny" : "zamknięty";
// const message = `Książka ${book.title} autorstwa ${book.author} z oceną ${book.rating} ma dostęp ${accessType}.`;
// console.log(message);

/** Destrukturyzacja umożliwia „rozpakowanie” wartości właściwości obiektu do zmiennych lokalnych. Dzięki temu kod w miejscu ich użycia jest mniej „zaszumiony”. */

// Destrukturyzacja
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? "publiczny" : "zamknięty";
// const message = `Książka ${title} autorstwa ${author} z oceną ${rating} ma dostęp ${accessType}.`;
// console.log(message);

/** Destrukturyzacja zawsze znajduje się po lewej stronie operacji przypisania. Zmiennym wewnątrz nawiasów klamrowych przypisywane są wartości właściwości obiektu. Jeśli nazwa zmiennej i nazwa właściwości są takie same, to przypisanie ma miejsce, w przeciwnym razie zostanie mu przypisane undefined. Kolejność, w jakiej zmienne są deklarowane w nawiasach klamrowych, nie jest ważna. */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// === Wartości domyślne === //
// ========================= //
/** Aby uniknąć przypisania undefined podczas destrukturyzacji nieistniejących właściwości obiektu, możesz ustawić domyślne wartości zmiennych, które zostaną przypisane tylko wtedy, gdy obiekt nie ma właściwości o tej nazwie. */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };
// // Dodajmy zdjęcie na okładkę, jeśli nie ma go w obiekcie książki
// const {
//   title,
//   author,
//   coverImage = "https://via.placeholder.com/640/480",
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// === Zmiana nazwy zmiennej === //
// ============================= //
/** Podczas destrukturyzacji możesz zmienić nazwę zmiennej, do której rozpakowana jest wartość właściwości. Najpierw piszemy nazwę właściwości, z której chcemy uzyskać wartość, po czym wstawiamy dwukropek i wpisujemy nazwę zmiennej, w której ma być umieszczona wartość tej właściwości. */

// const firstBook = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle);
// console.log(firstCoverImage);
// console.log(firstBook);

// // Second Book

// const secondBook = {
//   title: "Sen smiesznego czlowieka",
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
// } = secondBook;

// console.log(secondTitle); // Sen śmiesznego człowieka
// console.log(secondCoverImage); // https://via.placeholder.com/640/480

/** Taki wpis brzmi: "Utwórz zmienną firstTitle, w której należy umieścić wartość właściwości title z obiektu firstBook" itd. */

// === Destrukturyzacja w pętlach === //
// ================================== //
/** Podczas iteracji po tablicy obiektów z pętlą for...of otrzymujemy wiele wywołań właściwości obiektu. */

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
// ];

// for (const book of books) {
//   console.log(book);
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

/** Aby zmniejszyć liczbę powtórzeń, możesz zdestrukturyzować właściwości obiektu na zmienne lokalne w ciele pętli. */

// for (const book of books) {
//   const { title, author, rating } = book;
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

/** Jeśli obiekt ma niewiele właściwości, destrukturyzację można przeprowadzić bezpośrednio w miejscu, w którym zadeklarowana jest zmienna book. */

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// === Głęboka destrukturyzacja === //
// ================================ //
/** Do destrukturyzacji właściwości obiektów zagnieżdżonych są używane te same zasady, jak w poprzednich trzech ćwiczeniach. */

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

/////////////////////////////////////
// === Destrukturyzacja tablic === //
/////////////////////////////////////
/** Przypisanie destrukturyzujące może być również użyte dla tablic, ale z pewnymi osobliwościami.
- Użyj nawiasów kwadratowych [] zamiast nawiasów klamrowych {}.
- Zmiennym określonym w nawiasach kwadratowych [], będą po kolei przypisywane wartości elementów tablicy.
Na przykład istnieje tablica kolorów, z której należy pobrać wartości każdego składnika koloru do osobnych zmiennych. */

// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red}, G:${green}, B:${blue}`); // "R:200,G:255,B:100"

/** Po słowie kluczowym const lub let umieszczamy otwierający i zamykający nawias kwadratowy, tak jak przy deklarowaniu tablicy. Wewnątrz nawiasów, oddzielonych przecinkami, wskazujemy nazwy zmiennych, w których zostaną umieszczone wartości tablicy.

W wyniku takiego zapisu zostaną utworzone 3 zmienne, a elementy zostaną w nich umieszczone w kolejności numeracji - od 0 do końca tablicy.

Podczas destrukturyzacji tablic wartość zmiennej można przypisać po jej deklaracji. W praktyce jest to rzadko używane. */

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

/** Jeśli jest więcej zmiennych niż elementów tablicy, zostaną im przypisane undefined, dzięki czemu można określić wartości domyślne. */

// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

/** Czasami konieczna jest destrukturyzacja tylko pierwszych N elementów z tablicy i przechowywanie pozostałych w jednej zmiennej w postaci tablicy. Podczas destrukcji tablicy możesz rozpakować i przypisać pozostałe elementy tablicy do zmiennej za pomocą operacji ... (rest). */

// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

/** Elementy można pominąć. Załóżmy, że musisz pobrać tylko ostatnią wartość z tablicy rgb. W praktyce ta funkcja jest rzadko używana. */

// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

////////////////////////////////////////
// === Wzorzec "Obiekt parametru" === //
////////////////////////////////////////
/** Jeśli funkcja przyjmuje więcej niż dwa lub trzy argumenty, bardzo łatwo jest sie pomylić, w jakiej kolejności co przekazać. Rezultatem jest bardzo nieoczywisty kod w miejscu jego wywołania. */

// const book = {
//   title: "The last Kingdom",
//   numberOfPages: "736",
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// };

// for (const key in book) {
//   console.log(key);
//   console.log(book[key]);
// }

// console.log(Object.keys(book));

// const title = book.title;
// const downloads = book.downloads;
// const isPublic = book.isPublic;
// const numberOfPages = book.numberOfPages;
// const rating = book.rating;

// const { title, downloads, isPublic, numberOfPages, rating } = book; // to samo znaczacy zapis co powyzej. Upraszczamy zapis aby nie pisac 5 razy tego samego za pomoca jednej linijki.

// function doStuffWithBook(title, numberOfPages, downloads, rating, public) {
//   // Zrobimy coś z parametrami
//   console.log(title);
//   console.log(numberOfPages);
//   // Itd.
// }

// // ❌ Co to jest 736? Co to jest 10283? Co to jest true?
// doStuffWithBook("The Last Kingdom", 736, 10283, 8.38, true);

/** Wzorzec "Obiekt parametru" pomaga rozwiązać ten problem, zastępując zestaw parametrów tylko jednym — obiektem o nazwanych właściwościach */

// function doStuffWithBook(book) {
//   // Zrobimy coś z właściwościami obiektu
//   console.log(book.title);
//   console.log(book.numberOfPages);
//   // Itd.
// }

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

/** Kolejnym plusem jest to, że możesz zdestrukturyzować obiekt w parametrze book. Można to zrobić w ciele funkcji. */

// function doStuffWithBook(book) {
//   const { title, numberOfPages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(numberOfPages);
// }

/** Lub od razu w sygnaturze (podpisie) funkcji, nie ma różnicy. */

// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // Itd.
// }
