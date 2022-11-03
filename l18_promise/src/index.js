import "./css/index.css";

/** funkcja do symulowania odpowiedzi z serwera */
const isSuccess = true;

/** slowko "new" tworzy nowa instancje klasy */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Hello, Success! ");
    } else {
      reject("Ooops! Error!");
    }
  }, 1000);
});

/** promise to funkcja obietnica ze cos sie wydarzy. Jesli obietnica sie spelni to wywola sie funkcja ktora przekazalismy w argumencie na pierwszym miejscu "resolve". W przeciwnym razie zostanie wywolana funkcja "reject" */
/** Na przyklad prosimy o zwrot jakis danych z serwera i to moze sie udac ale tez moga one nie przyjsc albo z jakiegos powodu mamy odpowiedz negatywna i wtedy reject. Narazie nie bedziemy sie komunikowac z serwerem ale zebysymulowac odpowiedz utworzymy funkcje "isSuccess" */

// console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 2000);

/** Metody dla Promise */

/** metoda .then()
 * pierwszy argument przyjmuje funkcje onFulfilled ktora sie wykona jesli ta obietnica sie spelni. Do tej funkcji moge przekazac argument. Ten argument jest wartoscia ktora nam zwraca promise. Drugim argumentem bedzie funkcja onRejected ktora wykona sie jesli obietnica sie nie spelni. Tutaj tez moge przekazac wartosc z promise dla reject. Obsluguje blad i dzieki temu nie bedzie bledu w konsoli i aplikacja bedzie dzialac dalej a my mozemy ladnie przekazac uzytkownikowi ze cos poszlo nie tak. Then mozemy chainowac tzn po jednym then mozemy dodac kolejny then. => promise.then(resolved, rejected).then(resolved, rejected)
 */
/** jest jeszcze jedna metoda finally. Tez jako argument bieze funkcje. Ona nie bierze wartosci i wywoluje sie zawsze. Nie wzne czy mamy sukcess czy nie. Finally daje nam sposob na to zeby poczekac na odpowiedz i bezwzgledu na to jaki bedzie jej wynik, mozemy cos zrobic. */

promise
  .then(
    (value /** dowolne slowo. Zwrot z resolved */) => {
      console.log("This is THEN resolved value: ", value); // chainowanie then polega na kolejnym sprawdzeniu, czegos co juz mamy sprawdzone. To co nam zwroci to Then mozemy przekazac asynchronicznie do kolejnego then.
      return value + "We are very happy!";
    }
    // (error /** dowolne slowo. Zwrot z rejected */) => {
    //   console.log("There is something wrong: ", error);
    // }
  )
  .then((value) => {
    console.log("Second then: ", value);
  })
  .catch((error) => {
    console.log("This is my catch error: ", error);
  })
  .finally(() => {
    console.log("this is finally method for promise at the end");
  });

/** */
