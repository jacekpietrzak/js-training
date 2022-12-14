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

//* Czasami konieczne jest zadeklarowanie funkcji, kt??rej parametry b??d?? mia??y warto??ci inne ni?? undefined, nawet je??li nie przekazano do nich ??adnych argument??w. Odbywa si?? to w bardzo prosty i oczywisty spos??b, wystarczy poda?? warto???? domy??ln?? bezpo??rednio podczas deklarowania parametr??w w sygnaturze funkcji. W przypadku tej notacji, je??li dla parametru nie zostanie przekazana warto???? argumentu, u??ywana jest warto???? domy??lna.

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

//* Pseudotablica to kolekcja z w??a??ciwo??ci?? length i mo??liwo??ci?? dost??pu do elementu przez indeks, ale z brakiem wi??kszo??ci metod pracy z tablic??.
//* Dost??p do listy wszystkich argument??w mo??na uzyska?? za pomoc?? specjalnej zmiennej arguments, kt??ra jest dost??pna tylko wewn??trz funkcji i przechowuje wszystkie argumenty jako pseudotablic??. Rozwa??my przyk??ad u??ycia arguments w funkcji mno????cej dowoln?? liczb?? argument??w:

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

//* Zwykle pseudotablica musi zosta?? przekonwertowana na normaln?? tablic??, poniewa?? pseudotablica nie ma metod tablicowych, takich jak slice() albo includes(). W praktyce stosuje si?? kilka podstawowych metod.
//* U??ywamy metody Array.from(), kt??ra zamieni tablic?? na pseudotablic??.

// function fn() {
//   // Zmienna args b??dzie zawiera?? pe??nowarto??ciow?? tablic??
//   const args = Array.from(arguments);
// }

//* U??ywaj??c operacji ... (rest), mo??emy zebra?? dowoln?? liczb?? element??w, w naszym przypadku argument??w, do tablicy i przechowywa?? j?? w zmiennej. Wszystkie argumenty zbieramy za pomoc?? operacji rest bezpo??rednio w sygnaturze funkcji.

// function fn(...args) {
//   // Zmienna args b??dzie zawiera?? pe??nowarto??ciow?? tablic??
// }

// === Wczesny zwrot === //
// ===================== //

//* Operator if...else jest g????wnym sposobem tworzenia ga????zi. Jednak z??o??one ga????zie zagnie??d??one sprawiaj??, ??e kod jest trudny do zrozumienia.
//* Stw??rzmy funkcj??, kt??ra opracowuje wyp??aty z osobistego konta bankowego. Otrzymuje kwot?? wyp??aty oraz saldo rachunku bie????cego, po czym, w zale??no??ci od warunku, wykonuje jeden lub drugi blok kodu.

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Dla operacji wprowad?? kwot?? wi??ksz?? od zera");
//   } else if (amount > balance) {
//     console.log("Za ma??o ??rodk??w na koncie");
//   } else {
//     console.log("Operacja wyp??aty powiod??a si??");
//   }
// }

// withdraw(0, 300); // "Dla operacji wprowad?? kwot?? wi??ksz?? od zera"
// withdraw(500, 300); // "Za ma??o ??rodk??w na koncie"
// withdraw(100, 300); // "Operacja wyp??aty powiod??a si??"

//* Nawet w tak prostym przyk??adzie istnieje grupa zagnie??d??onych operator??w warunkowych, w??r??d kt??rych nie mo??na od razu rozr????ni??, aby zrozumie?? logik?? wykonywania kodu.
//* W funkcji mo??e by?? wi??cej ni?? jedna instrukcja return. Najwa??niejsz?? rzecz?? do zapami??tania jest to, ??e wykonywanie funkcji jest przerywane, gdy interpreter napotka zwrot, a ca??y kod po nim zostanie zignorowany w bie????cym wywo??aniu funkcji.

//* Wzorzec "Wczesny zwrot" jest sposobem na wykorzystanie mo??liwo??ci wcze??niejszego zwrotu z funkcji przy u??yciu operatora return. Korzystaj??c z tej techniki, otrzymujemy czystszy, bardziej p??aski i bardziej zrozumia??y kod, kt??ry jest ??atwiejszy do refaktoryzacji.
//* Zaznaczmy wszystkie sprawdzenia warunk??w w oddzielnych instrukcjach if, a nast??pnie dodajmy kod w ciele else. W idealnym przypadku musisz otrzyma?? p??ask?? list?? instrukcji warunkowych, nast??puj??cych po sobie, a na ko??cu blok, kt??ry zostanie wykonany tylko wtedy, gdy nie zostanie wykonane ??adne if.

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

//* Wyra??enie funkcyjne (function expression) to zwyk??a deklaracja zmiennej, kt??rej warto??ci?? b??dzie funkcja. Jest to alternatywny spos??b deklarowania funkcji.

// const dzielenieLiczb = function () {}; // funkcja przypisana do zmiennej to Wyrazenie funkcyjne
// function dzielenieLiczb() {} // zwykla funkcja

//* R????nica polega na tym, ??e wyra??enia funkcyjnego nie mo??na wywo??a?? przed jego utworzeniem, lecz dopiero po jego utworzeniu, poniewa?? jest to dos??ownie deklaracja zmiennej const.

// // ??? B????d! Wywo??anie nie dzia??a przed deklaracj??
// multiply(1, 2, 3);

// const multiply = function (x, y, z) {
//   console.log(`Wynikiem mno??enia jest ${x * y * z}`);
// };

// // ??? Wywo??anie dzia??a po deklaracji
// multiply(4, 5, 6);

// //* Deklaracj?? funkcji mo??na wywo??a?? przed miejscem jej utworzenia w kodzie.
// // ??? Wywo??anie dzia??a przed deklaracj??
// multiply(1, 2, 3);

// function multiply(x, y, z) {
//   console.log(`Wynikiem mno??enia jest ${x * y * z}`);
// }

// // ??? Wywo??anie dzia??a po deklaracji
// multiply(4, 5, 6);

////////////////////
// === Zakres === //
////////////////////

//* Gdziekolwiek pojawia sie nawiasy {} tworza nowy blok.
//* Zakres (scope) to mechanizm okre??laj??cy dost??pno???? zmiennych w wykonywanym kodzie.
//* ??a??cuch zakresu (scope chain) - zakresy tworz?? hierarchi??, dzi??ki czemu zakresy podrz??dne mog?? uzyskiwa?? dost??p do zmiennych z zakres??w nadrz??dnych, ale nie odwrotnie.
//* Zmienna jest widoczna dla kodu wykonywalnego, je??li znajduje si?? w bie????cym zakresie lub w ??a??cuchu zakresu.

// === Zakres globalny - Global Scope === //
// ====================================== //

//* Zmienne zadeklarowane na najwy??szym poziomie, to znaczy poza wszelkimi konstrukcjami, takimi jak if, while, for i funkcje, znajduj?? si?? w zakresie globalnym i s?? dost??pne wsz??dzie po ich zadeklarowaniu.

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

//* Zmienne zadeklarowane wewn??trz instrukcji if, for, funkcji i innych blok??w kodu uj??te w nawiasy klamrowe {}, znajduj?? si?? w zakresie blokowym i s?? dost??pne tylko w tym bloku kodu lub w nim zagnie??d??onych.

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

// // ??? B????d! Zmienna a nie jest dost??pna w zakresie globalnym
// console.log(a);

// for (let i = 0; i < 3; i++) {
//   // ??? B????d! Zmienna a nie jest dost??pna w tym zakresie
//   console.log(a);
// }

//* Interpreter najpierw pr??buje znale???? zmienn?? w zakresie, w kt??rym do niej si?? zwr??cono. Je??li nie ma takiej zmiennej w zakresie lokalnym, ona "wychodzi", o jeden poziom za pr??b??, a?? znajdzie warto???? albo nie osi??gnie najwy??szego zakresu (globalnego) i zorientuje si??, ??e zmiennej o takim identyfikatorze nie mo??na znale????, bo po prostu nie istnieje, wtedy pojawi si?? b????d, ??e zmienna nie jest zadeklarowana.
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

//* Kiedy funkcja jest wywo??ywana, inne funkcje mog?? by?? wywo??ywane w jej ciele, a w nich inne itd. JavaScript jest j??zykiem jednow??tkowym, to znaczy, ??e tylko jedna instrukcja mo??e by?? wykonywana na raz. Oznacza to te??, ??e ju?? wywo??ane funkcje, kt??re nie zako??czy??y swojego wykonywania, musz?? czeka?? na wykonanie funkcji wywo??anych wewn??trz siebie, aby kontynuowa?? swoj?? prac??.

// function fnA() {
//   console.log("Log wewn??trz funkcji fnA przed wywo??aniem fnB");
//   fnB();
//   console.log("Log wewn??trz funkcji fnA po wywo??aniu fnB");
// }

// function fnB() {
//   console.log("Log wewn??trz funkcji fnB");
// }

// console.log("Log przed wywo??aniem fnA");
// fnA();
// console.log("Log po wywo??aniu fnA");

// "Log przed wywo??aniem fnA"
// "Log wewn??trz funkcji fnA przed wywo??aniem fnB"
// "Log wewn??trz funkcji fnB"
// "Log wewn??trz funkcji fnA po wywo??aniu fnB"
// "Log po wywo??aniu fnA"

//* Potrzebujemy mechanizmu do przechowywania listy funkcji, kt??re zosta??y wywo??ane, ale jeszcze nie zako??czy??y ich wykonywania oraz mechanizmu do zarz??dzania kolejno??ci?? wykonywania tych funkcji - i za to odpowiada stos wywo??a??. (call stack).

// === Stos === //
// ============ //

//* Stos to struktura danych dzia??aj??ca na zasadzie LIFO (Last-In-First-Out), czyli ostatnie wesz??o, pierwsze wysz??o. Ostatnia rzecz dodana do stosu zostanie z niego usuni??ta jako pierwsza, co oznacza, ??e mo??esz dodawa?? lub usuwa?? elementy tylko ze szczytu stosu.
//* Pomy??l o stosie jak o tablicy, kt??ra ma tylko metody pop i push, co oznacza, ??e mo??esz doda?? lub usun???? tylko element na ko??cu kolekcji.

// === Stos wywolan === //
// ==================== //

//*Stos wywo??a?? (call stack) to mechanizm ??ledzenia bie????cej lokalizacji interpretera w kodzie, kt??ry wywo??uje kilka funkcji. Kt??ra z funkcji jest aktualnie wykonywana, kt??re funkcje s?? wywo??ywane z wykonywanej funkcji, kt??ra zostanie wywo??ana w nast??pnej kolejno??ci itd.

//* - Kiedy skrypt wywo??uje funkcj??, interpreter dodaje j?? do stosu wywo??a?? i rozpoczyna wykonywanie.
//* - Ka??da funkcja wywo??ywana przez wykonywan?? funkcj?? jest dodawana do stosu wywo??a?? i jest wykonywana natychmiast po jej wywo??aniu.
//* - Gdy wykonanie funkcji zostanie zako??czone, interpreter zdejmuje j?? ze stosu wywo??a?? i wznawia wykonywanie kodu od punktu, w kt??rym zosta??a wcze??niej przerwana. Oznacza to, ??e rozpoczyna si?? wykonywanie funkcji, kt??rej wpis jest nast??pny na stosie.

//* Stack frame (ramka stacku) - struktura dodawana do stosu podczas wywo??ania funkcji. Przechowuje informacje o us??udze, takie jak nazwa funkcji i numer linii, w kt??rej nast??pi??o wywo??anie.

// === Przepelnienie stosu wywolan === //
// =================================== //

//* Stos wywo??a?? nie jest nieograniczony, ma przydzielon?? sko??czon?? ilo???? pami??ci. Czasami mo??esz zobaczy?? b????d w konsoli "Uncaught RangeError: Maximum call stack size exceeded" - przepe??nienie stosu (stack overflow).

//* Mo??e si?? to zdarzy?? z powodu niew??a??ciwego u??ycia rekurencji lub p??tli wywo??a?? funkcji, to znaczy, je??li istnieje niesko??czona liczba wywo??a?? funkcji i nie jest zwracany ??aden wynik, stos ro??nie. Gdy zostanie osi??gni??ty limit liczby wpis??w na stosie, wyst??pi taki b????d i skrypt ???zawiesi si?????.

//* Deklaracja funkcji => alokacja pamieci
//* Wywolanie funkcji => wywolanie funkcji na stosie wywolan
