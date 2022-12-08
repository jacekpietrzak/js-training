import "./css/index.css";
/** zrobilismy modul ktory posiada zmienne dlatego ze chcemy aby nasz index.js byl czysty, przejrzysty, jasny i klarowny. To daje nam modulowosc kodu. */

/** aby zaimportowac funkcje getPosts z modulu getPosts zrobilismy default export w module a tutaj zrobimy default import. */

import getPosts from "./modules/getPosts";
/** poniewaz jest to default export to nie uzywamy klamr. Mozemy nazwac to czym chcemy ale zeby bylo zrozumiale to piszemy getPosts */

/** wywolujemy funkcje get posts z parametrem odpowiedzialnym za numer strony. Jesli chcemy aby do naszej funkcji dolozyc np budowanie html to dokladamy funkcje callback (nazwa dowolna) ktora tez mozemy zdefiniowac w innym module.  */

import prinPosts from "./modules/prinPosts";

const app = document.querySelector("#app");

getPosts(1, prinPosts, app);

// const posts = getPosts(1);
// console.log(posts);

////// Try Catch /////
/** sluzy do wylapywania bledow, informowania ale tez nie wywala aplikacji. Aplikacja dziala dalej. Mozemy tez obsluzyc blad.
 * np. Jesli probujemy wywolac funkcje ktora nie istnieje to w narzedziach developerskich dostaniemy blad not defined. Jesli uzyjemy try catch to bledu nie bedzie pomimo tego ze funkcji brak. Dzieki temu mozemy pokazac jakies friendly message zamiast wywalac aplikacje. */

// go50();

// try {
//   go50();
// } catch {
//   console.log("Oops! Something went wrong.");
// }

/** w ten sposob nie pokazemy uzytkownikowi bledu */

/** jaka roznice miedzy "throw new Error" */

// try {
//   go50();
// } catch (error /** loguje prawdziwy error(nazwa dowolna) */) {
//   console.error("Oops! Something went wrong.", error);
//   /** console.error loguje blad */
// }

/** catch moze przyjac w parametrze obiekt bledu a my mozemy go wylogowac jesli chcemy albo aby sie dowiedziec co jest nie tak */

/** console sluzy do logowania bledu jesli jednak chcielibysmy wywolac taki blad to powinnismy uzyc "throw" */

// try {
//   go50();
//   throw new Error();
// } catch (error) {
//   console.error("Throw error: ", error);
// }

///// This /////

// arrow functions nie maja swojego this //
