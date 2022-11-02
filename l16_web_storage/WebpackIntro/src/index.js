import "./css/index.css";
// import { student1, student2 } from "./modules/students";
// import artworks from "./data/artworks.json";

// const person = {
//   name: "Josh",
//   weight: 175,
//   age: 30,
//   eyecolor: "brown",
//   isHappy: true,
//   cars: ["Chevy", "Honda"],
//   hobby: () => {
//     console.log("football");
//   },
//   favoriteBook: {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
// };

/** jesli dane w postaci JSON mamy lokalnie to JS sam parsuje je bo wie ze chcemy z nimi pracowac. Jesli pobieramy te dane z serwera to wtedy musimy je sparsowac. */
/** aby przekonwertowac obiekt JavaScript na obiekt JSON musimy uzyc metody wbudowanej klasy JSON
 * stringify - zamienia JS obiekt na JSON obiekt - JSON obiekt jest jako prosty string. Oznacza to ze nie dostaniemy zadnej informacji z tego obiektu. JSON sluzy do przechowywania danych. Funkcje sa usuwane. JSON jest notacja tylko do przechowywania danych a nie do przechowywania funkcjonalnosci.
 * parse - zamienia JSON obiekt na JS obiekt. Czesto dostajemy dane w postaci JSON. Abysmy mogli na nich pracowac musimy przekonwertowac je na obiekt JS. Do tego sluzy nam metoda "parse".
 */
// const personJSON = JSON.stringify(person);

// const personJS = JSON.parse(personJSON);

/** wychwytywanie bledu w JSON
 * Czesto mozemy dostac dane JSON z bledem. Normalnie taki blad powoduje wywalenie aplikacji co powoduje ze ona nie dziala i np uzytkownik dostanie pusty ekran albo niepelne wyswietlenie aplikacji. Aby zapobiec wywaleniu sie aplikacji przy parsowaniu danych z JSON do JS uzywamy konstrukcji "try...catch". Przy tej konstrukcji jesli bedzie blad to aplikacja bedzie dzialac dalej a my mozemy wyswietlic jakis przyjazny komunikat i aplikacja bedzie dzialac dalej.
 */
// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log("cos poszlo nie tak");
//   console.log("blad danych");
//   console.log("error:", error);
//   console.log("error.name:", error.name); // "SyntaxError"
//   console.log("error.message:", error.message); // Unexpected token W in JSON at position 0
// }

// console.log("object JS:", person);
// console.log("object JSON:", personJSON);
// console.log("JS object from JSON:", personJS);

// // console.log("Hello World");
// console.log("Student1:", student1);
// console.log("Student2:", student2);

// console.log("artworks:", artworks);
// console.log("artworks:", artworks.data);

// artworks.data.map((artwork) => {
//   console.log(
//     "artist title:",
//     artwork.artist_title,
//     ",",
//     "title:",
//     artwork.title
//   );
// });

/** Przechowywanie danych uzywamy np do funkcjonalnosci jak theme light/dark itp albo przechowywania produktow w koszyku ale nigdy do danych wrazliwych jak np numery karty kredytowej */
/** localStorage - ma kilka metod wbudowanych na zapisywanie, pobieranie i czyszczenie danych. Dane zapisuja sie  */

// localStorage.setItem("test-name", "John Smith");

/** aby sprawdzic co sie dzieje ze "local storage" w narzedziach developerskich wchodzimy w application -> local storage */

/** aby odczytac te dane uzywamy metody getItem */

// const testName = localStorage.getItem("test-name");

// console.log("testName:", testName);

const saveBtn = document.getElementById("saveBtn");
const removeBtn = document.getElementById("removeBtn");
const lightModeBtn = document.getElementById("lightMode");
const darkModeBtn = document.getElementById("darkMode");

/** Zdefinujmy sobie domyslny stan aplikacji */
let appState = {
  userName: "",
  theme: "light",
};


darkModeBtn.addEventListener("click", () => {
  appState = { ...appState, theme: "dark" };
  saveStateToLocalStorage();
  // console.log(appState);
});
lightModeBtn.addEventListener("click", () => {
  appState = { ...appState, theme: "light" };
  saveStateToLocalStorage();
  // console.log(appState);
});

saveBtn.addEventListener("click", () => {
  const name = document.querySelector("input").value;
  appState = { ...appState, userName: name };
  saveStateToLocalStorage();
  // console.log(appState);
});

function saveStateToLocalStorage() {
  // console.log(appState);
  localStorage.setItem("appState", JSON.stringify(appState));
}

removeBtn.addEventListener("click", () => {
  localStorage.clear();
});

const savedSettings = JSON.parse(localStorage.getItem("appState"));
console.log(savedSettings);

const uiTheme = savedSettings?.theme ? savedSettings.theme : "light";
document.querySelector("body").classList = uiTheme;
const userName = savedSettings?.userName ? savedSettings.userName : "Guest";
document.getElementById("welcomeMsg").innerHTML = "Welcome " + userName;
