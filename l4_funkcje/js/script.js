////////////////////
// === Kahoot === //
////////////////////

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers["2"]); // 3

// console.log([1, 2, 3] === [1, 2, 3]); // false
//* Przy zmiennych typu referencyjnego, czyli przy obiektach {}, tablicach [] i przy funkcjach (){}, nie sprawdzamy wartosci a adres. 2 dynamicznie stworzone tablice maja rozne adresy w pamieci.

// const arr = [1, 5, 3, 9, 3];
// console.log(arr.indexOf(3));

/////////////////////
// === Funkcje === //
/////////////////////

// const container = document.getElementById("container");
// const button = document.getElementById("createElementButton");
// const button2 = document.getElementById("createElementButton2");

// function addHtmlElement(buttonNumber) {
//   console.log("dodaje element.. (" + buttonNumber + ")");
// }

// button.addEventListener("click", function () {
//   addHtmlElement(1);
// });

// button2.addEventListener("click", function () {
//   addHtmlElement(2);
// });

//* parametr to zmienna w zakresie funkcji
//* argument to konkretna wartosc ktora przekazujemy do funkcji aby byla wywolana. Podstawiana w miejsce zmiennej

// function multiply(x, y, z) {
//   console.log(`wynikiem mnozenia jest ${x * y * z}`); // Jesli funkcja ma za zadanie cos wyswietlic w konsoli to uzywamy console.log
//   return `wynikiem mnozenia jest ${x * y * z}`; // Jesli funkcja ma za zadanie zwrocic, cos obliczyc, zamienic pewna postac na inna postac to uzywamy return.

//   console.log("ten log nie zostanie wyswietlony"); // ten log nie zostanie wyswietlony gdyz jest po "return"
// }
// const wynik = multiply(3, 5, 8);
// console.log(wynik); // Funkcja ktora nie posiada return zwroci undefined. Aby zwrocic wartosc funkcji do global scope (Variable scope) potrzebujemy return.

// function multiply(x, y, z) {
//   if (x !== 0 && y !== 0 && z !== 0) {
//     console.log(`wynikiem mnozenia jest ${x * y * z}`);
//     return `wynikiem mnozenia jest ${x * y * z}`;
//   }
// }
// multiply(1, 5, 5);

// function multiply(x, y, z) {
//   if (x === 0 || y === 0 || z === 0) {
//     console.log("mnozenie przez 0 daje 0");
//     return "mnozenie przez 0 daje 0";
//   }
//   console.log(`wynikiem mnozenia jest ${x * y * z}`);
//   return `wynikiem mnozenia jest ${x * y * z}`;
// }
// multiply(1, 0, 5);

// === Parametry domyslne === //
// ========================== //

//* Czasami konieczne jest zadeklarowanie funkcji, której parametry będą miały wartości inne niż undefined, nawet jeśli nie przekazano do nich żadnych argumentów. Odbywa się to w bardzo prosty i oczywisty sposób, wystarczy podać wartość domyślną bezpośrednio podczas deklarowania parametrów w sygnaturze funkcji. W przypadku tej notacji, jeśli dla parametru nie zostanie przekazana wartość argumentu, używana jest wartość domyślna.

// function createMobilePhone(memory = 4, cpu = 2, screenSize = 5) {
//   return {
//     phoneMemory: memory ? memory : 4, // jesli nie podamy wartosci innej niz 0, null to bedzie default 4
//     phoneCpu: cpu ? cpu : 2, // jesli nie podamy wartosci innej niz 0, null to bedzie default 2
//     phoneScreenSize: screenSize ? screenSize : 5, // jesli nie podamy wartosci innej niz 0, null to bedzie default 5
//   };
// }

// console.log(createMobilePhone(6, 8, 6.5));
// console.log(createMobilePhone(4, 4, 5));
// console.log(createMobilePhone(10)); // zmianie podlega tylko pierwszy parametr
// console.log(createMobilePhone(0, 0, 10)); // zmianie podlega tylko ostatni parametr a reszta na default

// === Pseudo tablice === //
// ====================== //

//* Pseudotablica to kolekcja z właściwością length i możliwością dostępu do elementu przez indeks, ale z brakiem większości metod pracy z tablicą.
//* Dostęp do listy wszystkich argumentów można uzyskać za pomocą specjalnej zmiennej arguments, która jest dostępna tylko wewnątrz funkcji i przechowuje wszystkie argumenty jako pseudotablicę. Rozważmy przykład użycia arguments w funkcji mnożącej dowolną liczbę argumentów:

// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument; // mnozy wszystkie argumenty pokolei. total = total * argument
//   }

//   return total;
// }

// console.log(multiply(2, 2, 4, 5));

// === Konwersja pseudotablicy === //
// =============================== //

//* Zwykle pseudotablica musi zostać przekonwertowana na normalną tablicę, ponieważ pseudotablica nie ma metod tablicowych, takich jak slice() albo includes(). W praktyce stosuje się kilka podstawowych metod.
//* Używamy metody Array.from(), która zamieni tablicę na pseudotablicę.

// function fn() {
//   // Zmienna args będzie zawierać pełnowartościową tablicę
//   const args = Array.from(arguments);
// }

//* Używając operacji ... (rest), możemy zebrać dowolną liczbę elementów, w naszym przypadku argumentów, do tablicy i przechowywać ją w zmiennej. Wszystkie argumenty zbieramy za pomocą operacji rest bezpośrednio w sygnaturze funkcji.

// function fn(...args) {
//   // Zmienna args będzie zawierać pełnowartościową tablicę
// }

// === Wczesny zwrot === //
// ===================== //

//* Operator if...else jest głównym sposobem tworzenia gałęzi. Jednak złożone gałęzie zagnieżdżone sprawiają, że kod jest trudny do zrozumienia.
//* Stwórzmy funkcję, która opracowuje wypłaty z osobistego konta bankowego. Otrzymuje kwotę wypłaty oraz saldo rachunku bieżącego, po czym, w zależności od warunku, wykonuje jeden lub drugi blok kodu.

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Dla operacji wprowadź kwotę większą od zera");
//   } else if (amount > balance) {
//     console.log("Za mało środków na koncie");
//   } else {
//     console.log("Operacja wypłaty powiodła się");
//   }
// }

// withdraw(0, 300); // "Dla operacji wprowadź kwotę większą od zera"
// withdraw(500, 300); // "Za mało środków na koncie"
// withdraw(100, 300); // "Operacja wypłaty powiodła się"

//* Nawet w tak prostym przykładzie istnieje grupa zagnieżdżonych operatorów warunkowych, wśród których nie można od razu rozróżnić, aby zrozumieć logikę wykonywania kodu.
//* W funkcji może być więcej niż jedna instrukcja return. Najważniejszą rzeczą do zapamiętania jest to, że wykonywanie funkcji jest przerywane, gdy interpreter napotka zwrot, a cały kod po nim zostanie zignorowany w bieżącym wywołaniu funkcji.

//* Wzorzec "Wczesny zwrot" jest sposobem na wykorzystanie możliwości wcześniejszego zwrotu z funkcji przy użyciu operatora return. Korzystając z tej techniki, otrzymujemy czystszy, bardziej płaski i bardziej zrozumiały kod, który jest łatwiejszy do refaktoryzacji.
//* Zaznaczmy wszystkie sprawdzenia warunków w oddzielnych instrukcjach if, a następnie dodajmy kod w ciele else. W idealnym przypadku musisz otrzymać płaską listę instrukcji warunkowych, następujących po sobie, a na końcu blok, który zostanie wykonany tylko wtedy, gdy nie zostanie wykonane żadne if.

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("wprowadz kwote wieksza od zera");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Za malo srodkow na koncie");
//     return;
//   }
//   console.log("Operacja wyplaty zakonczyla sie powodzeniem");
// }

// withdraw(300, 500); // "Operacja wyplaty zakonczyla sie powodzeniem"
// withdraw(0, 500); // "wprowadz kwote wieksza od zera"
// withdraw(1000, 500); // "Za malo srodkow na koncie"

// function dzielenieLiczb(a, b) {
//   if (b === 0) {
//     console.log("Nie dzielimy przez 0");
//     return "Nie dzielimy przez 0";
//   }

//   const wynik = `Wynik dzielenia ${a} przez ${b} to: ${a / b}`;
//   console.log(wynik);
//   return wynik;
// }

// const a = Number.parseInt(prompt("Podaj liczbe ktora chcesz podzielic"));
// const b = Number.parseInt(prompt("Podaj liczbe przez ktora chcesz podzielic"));
// dzielenieLiczb(a, b);

// === Wyrazenie funkcyjne === //
// =========================== //

//* Wyrażenie funkcyjne (function expression) to zwykła deklaracja zmiennej, której wartością będzie funkcja. Jest to alternatywny sposób deklarowania funkcji.

// const dzielenieLiczb = function () {}; // funkcja przypisana do zmiennej to Wyrazenie funkcyjne
// function dzielenieLiczb() {} // zwykla funkcja

//* Różnica polega na tym, że wyrażenia funkcyjnego nie można wywołać przed jego utworzeniem, lecz dopiero po jego utworzeniu, ponieważ jest to dosłownie deklaracja zmiennej const.

// // ❌ Błąd! Wywołanie nie działa przed deklaracją
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Wynikiem mnożenia jest ${x * y * z}`);
// };

// // ✅ Wywołanie działa po deklaracji
// multiply(4, 5, 6);

// //* Deklarację funkcji można wywołać przed miejscem jej utworzenia w kodzie.
// // ✅ Wywołanie działa przed deklaracją
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(`Wynikiem mnożenia jest ${x * y * z}`);
// }

// // ✅ Wywołanie działa po deklaracji
// multiply(4, 5, 6);

////////////////////
// === Zakres === //
////////////////////

//* Gdziekolwiek pojawia sie nawiasy {} tworza nowy blok.
//* Zakres (scope) to mechanizm określający dostępność zmiennych w wykonywanym kodzie.
//* Łańcuch zakresu (scope chain) - zakresy tworzą hierarchię, dzięki czemu zakresy podrzędne mogą uzyskiwać dostęp do zmiennych z zakresów nadrzędnych, ale nie odwrotnie.
//* Zmienna jest widoczna dla kodu wykonywalnego, jeśli znajduje się w bieżącym zakresie lub w łańcuchu zakresu.

// === Zakres globalny - Global Scope === //
// ====================================== //

//* Zmienne zadeklarowane na najwyższym poziomie, to znaczy poza wszelkimi konstrukcjami, takimi jak if, while, for i funkcje, znajdują się w zakresie globalnym i są dostępne wszędzie po ich zadeklarowaniu.

// const globalValue = 10;

// console.log(globalValue); // 10

// function foo() {
//   console.log(globalValue); // 10
// }

// for (let i = 0; i < 5; i++) {
//   console.log(globalValue); // 10

//   if (i === 2) {
//     console.log(globalValue); // 10
//   }
// }

// === Zakres blokowy - Block Scope === //
// ==================================== //

//* Zmienne zadeklarowane wewnątrz instrukcji if, for, funkcji i innych bloków kodu ujęte w nawiasy klamrowe {}, znajdują się w zakresie blokowym i są dostępne tylko w tym bloku kodu lub w nim zagnieżdżonych.

// function foo() {
//   const a = 20;
//   console.log(a); // 20

//   for (let i = 0; i < 5; i++) {
//     console.log(a); // 20

//     if (i === 2) {
//       console.log(a); // 20
//     }
//   }
// }

// // ❌ Błąd! Zmienna a nie jest dostępna w zakresie globalnym
// console.log(a);

// for (let i = 0; i < 3; i++) {
//   // ❌ Błąd! Zmienna a nie jest dostępna w tym zakresie
//   console.log(a);
// }

//* Interpreter najpierw próbuje znaleźć zmienną w zakresie, w którym do niej się zwrócono. Jeśli nie ma takiej zmiennej w zakresie lokalnym, ona "wychodzi", o jeden poziom za próbę, aż znajdzie wartość albo nie osiągnie najwyższego zakresu (globalnego) i zorientuje się, że zmiennej o takim identyfikatorze nie można znaleźć, bo po prostu nie istnieje, wtedy pojawi się błąd, że zmienna nie jest zadeklarowana.
// const a = Number.parseInt(prompt("Podaj liczbe ktora chcesz podzielic"));
// const b = Number.parseInt(prompt("Podaj liczbe przez ktora chcesz podzielic"));

// const a = 10;
// // GLOBAL SCOPE

// function foo() {
//   // SCOPE A

//   const b = 20;

//   for (let i = 0; i < 5; i++) {
//     // SCOPE B

//     const c = 30;
//     if (i === 3) {
//       // SCOPE C

//       const d = 40;

//       console.log(a);
//       console.log(b);
//       console.log(c);
//       console.log(d);
//     }
//   }
// }
// foo();

//////////////////////////
// === Stos wywolan === //
//////////////////////////

//* Kiedy funkcja jest wywoływana, inne funkcje mogą być wywoływane w jej ciele, a w nich inne itd. JavaScript jest językiem jednowątkowym, to znaczy, że tylko jedna instrukcja może być wykonywana na raz. Oznacza to też, że już wywołane funkcje, które nie zakończyły swojego wykonywania, muszą czekać na wykonanie funkcji wywołanych wewnątrz siebie, aby kontynuować swoją pracę.

// function fnA() {
//   console.log("Log wewnątrz funkcji fnA przed wywołaniem fnB");
//   fnB();
//   console.log("Log wewnątrz funkcji fnA po wywołaniu fnB");
// }

// function fnB() {
//   console.log("Log wewnątrz funkcji fnB");
// }

// console.log("Log przed wywołaniem fnA");
// fnA();
// console.log("Log po wywołaniu fnA");

// "Log przed wywołaniem fnA"
// "Log wewnątrz funkcji fnA przed wywołaniem fnB"
// "Log wewnątrz funkcji fnB"
// "Log wewnątrz funkcji fnA po wywołaniu fnB"
// "Log po wywołaniu fnA"

//* Potrzebujemy mechanizmu do przechowywania listy funkcji, które zostały wywołane, ale jeszcze nie zakończyły ich wykonywania oraz mechanizmu do zarządzania kolejnością wykonywania tych funkcji - i za to odpowiada stos wywołań. (call stack).

// === Stos === //
// ============ //

//* Stos to struktura danych działająca na zasadzie LIFO (Last-In-First-Out), czyli ostatnie weszło, pierwsze wyszło. Ostatnia rzecz dodana do stosu zostanie z niego usunięta jako pierwsza, co oznacza, że możesz dodawać lub usuwać elementy tylko ze szczytu stosu.
//* Pomyśl o stosie jak o tablicy, która ma tylko metody pop i push, co oznacza, że możesz dodać lub usunąć tylko element na końcu kolekcji.

// === Stos wywolan === //
// ==================== //

//*Stos wywołań (call stack) to mechanizm śledzenia bieżącej lokalizacji interpretera w kodzie, który wywołuje kilka funkcji. Która z funkcji jest aktualnie wykonywana, które funkcje są wywoływane z wykonywanej funkcji, która zostanie wywołana w następnej kolejności itd.

//* - Kiedy skrypt wywołuje funkcję, interpreter dodaje ją do stosu wywołań i rozpoczyna wykonywanie.
//* - Każda funkcja wywoływana przez wykonywaną funkcję jest dodawana do stosu wywołań i jest wykonywana natychmiast po jej wywołaniu.
//* - Gdy wykonanie funkcji zostanie zakończone, interpreter zdejmuje ją ze stosu wywołań i wznawia wykonywanie kodu od punktu, w którym została wcześniej przerwana. Oznacza to, że rozpoczyna się wykonywanie funkcji, której wpis jest następny na stosie.

//* Stack frame (ramka stacku) - struktura dodawana do stosu podczas wywołania funkcji. Przechowuje informacje o usłudze, takie jak nazwa funkcji i numer linii, w której nastąpiło wywołanie.

// === Przepelnienie stosu wywolan === //
// =================================== //

//* Stos wywołań nie jest nieograniczony, ma przydzieloną skończoną ilość pamięci. Czasami możesz zobaczyć błąd w konsoli "Uncaught RangeError: Maximum call stack size exceeded" - przepełnienie stosu (stack overflow).

//* Może się to zdarzyć z powodu niewłaściwego użycia rekurencji lub pętli wywołań funkcji, to znaczy, jeśli istnieje nieskończona liczba wywołań funkcji i nie jest zwracany żaden wynik, stos rośnie. Gdy zostanie osiągnięty limit liczby wpisów na stosie, wystąpi taki błąd i skrypt „zawiesi się”.

//* Deklaracja funkcji => alokacja pamieci
//* Wywolanie funkcji => wywolanie funkcji na stosie wywolan
