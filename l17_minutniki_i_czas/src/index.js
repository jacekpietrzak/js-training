import "./css/index.css";

/** Jesli mamy potrzebe cos szybko przekodowac bez webpacka mozna uzyc Google snippet. Aby to zrobic nalezy wejsc w:
 * 1 - narzedzia developerskie ->
 * 2 - sources ->
 * 3 - po lewej stronie gdzie "page" wybrac Snippets
 * 4 - kliknac: New snippet
 */
/** Kod napisany w JS wykonywany jest od gory do dolu. Jest synchroniczny. Jesli jakas czesc kodu wykonuje sie bardzo dlugo, cala reszta kodu musi poczekac na swoja kolej az poprzedni sie wykona. Wszystko zalezy od szybkosci procesora albo w pewnych momentach od szybkosci odpowiedzi z serwera. W pewnych momentach program moze sie zawiesic jesli sa jakies problemy w wykonaniu kodu wlasnie ze wzgledu na to ze jest synchroniczny */

/** w przykladzie ponizej petla wykonuje sie na tyle dlugo ze mozemy zauwazyc ze test2 wypisuje sie z opoznieniem */

// console.log("test1");
// for (let index = 0; index < 999999999; index++) {
//   if (index === 0) {
//     console.log("starting the loop...");
//   }
//   if (index === 999999998) {
//     console.log("done with loop");
//   }
// }
// console.log("test2");

/** Przyklad nr 2. Przy bardziej zlozonym programie synchronicznosc moze byc mniej oczywista */

// function hello() {
//   return "hello";
// }

// function greet() {
//   return "Hi " + hello();
// }

// function greetWithName(name) {
//   return greet() + name;
// }

// function welcome() {
//   hello();
//   greetWithName("John");
// }

// welcome();

/** Program bedzie realizowal kod od gory do dolu wedlog "Call Stack". Mozemy zastosowac "Breakpoint" aby zatrzymac go w pewnym miejscu az nie puscimy go dalej i debugowac kod. */

/** Aby sprawdzic jak zachowa sie kolejka kodu "Call Stack" mozemy uzyc narzedzi developerskich google w sources. Po prawej stronie mamy "script execution" ktory pokazuje namm krok po kroku jak sa wywolywane. */
/** Poczatek asynchronicznosci uzyskamy poprzez wprowadzenie funkcji "setTimeout()" */

// setTimeout(funkcja, czas w ms);

// function hello() {
//   console.log("Hello");
// }

// console.log("step 1");

// setTimeout(hello, 3000);

/** jesli chcemy utworzyc nowy projekt na podstawie innego ktory juz mamy to mozemy skopiowac wszystko z folderu projektu procz folderu "node_modules" i pliku package-lock.json. Po otworzeniu nowego projektu ktory utworzylismy na bazie starego musimy zainstalowac wszystkie moduly ktore uzywalismy w projekcie bazowym. Do tego uzyjemy komendy "npm install". Dzieki temu nie musimy szukac czego potrzebujemy tylko npm sam na bazie package.json zainstaluje potrzebne paczki. */
/** teraz po instalacji uruchamiamy webpacka poprzez "npm run watch" i mozemy dzialac */
/** setTimeout zawsze wypycha dana operacje na koniec stacku, stosu wywolan */

// function hello() {
//   console.log("Hello");
// }
// function hello1() {
//   console.log("hello1");
// }
// function hello2() {
//   console.log("hello2");
// }
// function hello3() {
//   console.log("hello3");
// }
// function runAll() {
//   hello();
//   hello1();
//   setTimeout(hello2, 2000);
//   hello3();
// }

// runAll();

// setTimeout(()=>{
//     console.log("Hi after some time")
// }, 3000)

const goBtn = document.getElementById("goBtn");
const cancelBtn = document.getElementById("cancelBtn");
const intervalBtn = document.getElementById("intervalBtn");
const cancelIntervalBtn = document.getElementById("cancelIntervalBtn");

function doSomething(arg1, arg2) {
  // console.log("Interval number " + counter++);
  console.log("Interval counter " + arg1 + " " + arg2);
}

let myTimer;
let myIntervalTimer;
let counter = 0;

goBtn.addEventListener("click", () => {
  console.log("PLease wait ...");
  myTimer = setTimeout(() => {
    console.log("Go!!!");
  }, 3000);
});

cancelBtn.addEventListener("click", () => {
  console.log("Timer is canceled");
  clearTimeout(myTimer); // aby wyczyscic timer uzywamy metody "clearTimeout" uzywajac jako argument nazwe zmiennej dla "setTimeout"
});

/** Oprocz timeoutu mamy tez interwaly ktory powtarza kod w kolko w okreslonym czasie. Skladnia jest taka sama jak dla "setTimeout()" */

intervalBtn.addEventListener("click", () => {
  console.log("Interval started!");
  myIntervalTimer = setInterval(doSomething, 1000, "hello", counter); // mozemy dodawac ile chcemy dodatkowych argumentow ktore potem mozemy uzyc w funkcji callback (doSomething).
});

cancelIntervalBtn.addEventListener("click", () => {
  console.log("Interval is canceled");
  clearInterval(myIntervalTimer);
});

/** Daty */
///////////
/** do tworzenia daty uzywamy klasy "new" z metoda Date() */

const myDate = new Date();

console.log(myDate);

/** zawsze wywolanie "new Date()" zwraca czas i date bierzaca, tu i teraz w tej strefie czasowej w ktorej jestesmy */

/** jesli uzyjemy argumentu w "new Date(arg)" to mozemy ustalic date i godzine jaka chcemy */

const selectedDate = new Date("2020-08-20");
console.log(selectedDate); // domyslnie godzina bylaby 0 ale ze mamy strefe np +2 to godzina bedzie 02:00:00

const firstDate = new Date(0); // jesli wpiszemy 0 to otrzymamy date i czas poczatkowy wedlog komputera
console.log(firstDate);

/** ogolnie czas na zapleczu nasz komputer interpretuje jako ilosc milisekund jaka minela od poczatku liczenia czasu. Od czasu 0 czyli 01.01.1970 00:00:00. Jesli chcemy otrzymac date ktora wydazyla sie przed czasem 0 to wpisujemy milisekundy z minusem */
/** najbardziej standardowym i uzywanym formatem jest ISO. "RRRR-MM-DD HH:MM:SS" */
const isoDate = new Date("2020-01-24 12:32:55");
console.log(isoDate);

/** sa rozne metody ktore obiekt daty posiada i mozemy z nich korzystac aby wyluskac z nich to co nas interesuje. Uzywac do formatowania na frontendzie */

/** Gettery */
console.log(isoDate.getMonth());
isoDate.setMinutes(28);

const formattedDate = isoDate.toLocaleDateString("pl-PL", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}); // Pierwszy argument sluzy do okreslenia lokalnosc daty, drugi to obiekt opcji
console.log(formattedDate);

/** Settery */
/** mamy nie tylko mozliwosc pociagniecia dat i czasu ale takze ustawic czas i date */

/** Formatowanie czasu */
console.log("date.toString: ", isoDate.toString());
console.log("date.toTimeString: ", isoDate.toTimeString());
console.log("date.toLocaleTimeString: ", isoDate.toLocaleTimeString());
console.log("date.toUTCString: ", isoDate.toUTCString());
console.log("date.toDateString: ", isoDate.toDateString());
console.log("date.toISOString: ", isoDate.toISOString());
console.log("date.toLocaleString: ", isoDate.toLocaleString());
console.log("date.getTime: ", isoDate.getTime());
