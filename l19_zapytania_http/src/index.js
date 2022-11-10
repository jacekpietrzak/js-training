import "./css/index.css";

const statusIndicator = document.querySelector(".status");
const usersList = document.querySelector(".usersList");

console.log(statusIndicator);
// stworzmy prosta funkcje ktora bedzie nam wyswietlac prosty tekstowy status w elemencie ktory pobralismy wczesniej.

function writeCurrentStatus(text) {
  statusIndicator.innerHTML = text;
}

/** definiujemy zmienna ktora bedzie przechowywac dane ktore pobralismy. Na poczatek bedzie ona pusta tablica gdyz narazie jeszcze nie wyslalismy prosby do api o dane. Potem robimy fetch nastepnie. then i zapisujemy dane do tablicy tej zmiennej. */

let usersData = []; // jednym ze sposobow pracy na danych asynchroniczny z serwera jest wypychanie danych do zmiennej w postaci tablicy. innym sposobem jest bardziej funkcyjny sposob. Uzywanie .then() w ktorym juz mamy te dane.

/** wywolajmy funkcje statusu ktora pojawi sie na poczatku gdy strona sie zaladuje. Pozniej dzieki Promise i schemacie lancuchowy w metodzie .finally() przekazemy jej ostateczny status */

writeCurrentStatus("Loading...");

/** 2 sposob na prace z danymi. Definiujemy funkcje ktora wywolujemy w .then() ktora wypisze nam dane */

function printUsers(users /** moze nazywac sie dowolnie */) {
  // zanim wejdziemy do naszej petli zdefiniujmy sobie zmienaa ktora bedzie zawierac html ktory bedziemy wyswietlac.

  let usersListHtml = "";

  // wiemy ze dostaniemy users w formie tablicy dlatego mozemy uzyc albo tablica.map albo tablica.forEach()
  users.forEach((user) => {
    usersListHtml += `
    <li data-userid="${user.id}">User name: ${user.name}</li>
    `;
  });
  usersList.innerHTML = usersListHtml;
}

/** utworzymy funkcje ktora umozliwi klikanie poszczegolncyh li aby np uzyskac wiecej informacji */
function makeUsersClickable() {
  const users = document.querySelectorAll(".usersList li"); // definiujemy zmienna lokalna ktora bedzie pobierac li wszystkie utworzone li. Bedzie talbica wszytkich usersList li
  users.forEach((user) => {
    user.addEventListener("click", (event) => {
      const singleUser = event.target;
      const userId = event.target.dataset.userid;
      console.log("clicked user id: ", userId);
      fetchSingleUser(userId);
    });
  });
}

/** utworzymy funkcje ktora bedzie pobierac dane dla pojedynczego usera i wywolamy to tam gdzie otrzymamy nasze user id */

function fetchSingleUser(id) {
  fetch(
    `https://jsonplaceholder.typicode.com/users/${id}` /** nie musimy juz definiowac tylko odrazu wywolamy fetch dla kazdego user.id */
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("Single user data: ", data);
    });
}

// https://jsonplaceholder.typicode.com/users - adres skad pobieramy dane

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users"); // asynchroniczne poza naszym glownym torem dzialanie aplikacji

/** bo zrobieniu fetch z danego adresu dostalismy w zwrocie obiekt Promise w stanie pending */

console.log("fetchUsers: ", fetchUsers);

/** aby sprawdzic co sie stanie z nasza obietnica po pewnym czasie mozemy uzyc setTimeout() */

setTimeout(() => {
  console.log("fetchUsers: ", fetchUsers);
}, 1000);

/** po 1 sekundzie oczekiwania Promise ma status fulfilled i mamy Response */

/** aby dostac sie do Response uzywamy metody then() */
// asynchroniczne poza naszym glownym torem dzialanie aplikacji
fetchUsers
  .then((response) => {
    console.log("response: ", response);
    const usersData = response.json(); // obowiazkowo uzywamy metody json aby wyciagnac z reponse nasze dane i to znow jest obietnica w formacie json. Dopiero po tym to jest w formie obietnicy ktora jak sie spelni da nam dane ktorych oczekujemy //
    console.log("usersData: ", usersData);
    /** poniewaz otrzymanie danych zajmuje troche czasu to nasz log zworci Promise w stanie pending. Mozliwe ze 1sec pozniej bylaby wypelniona ale na tym etapie jest pending */
    /** poniewaz to jest obietnica to rezultat tej obietnicy mozemy przekazac dalej do nastepnego .then(). Mamy teraz praktyczny przyklad wykorzystania lancucha z .then() */

    /** zwracamy nasze usersData ktore otrzymalismy na skutek wywolania metody .json na naszym response z fetcha */
    return usersData;
    /** i mozemy isc dale do kolejnego elementu lancucha np przy pomocey .then() */
  })
  .then(
    (
      receivedUsersData /**nie wazne jak nazwane ale sa to dane przekazane z return usersData z .then() powyzej */
    ) => {
      console.log("receivedUsersData: ", receivedUsersData);
      // usersData.push(receivedUsersData);
      usersData = receivedUsersData; // sprobujemy 2 sposobu to pracy na danych z serwera. Stworzymy funkcje ktora moze nam te dane wypisac.
      printUsers(
        receivedUsersData
      ); /** Bedac w tym .then() mamy pewnosc ze posiadamy juz dane. Wiec jak zawolamy te funkcje i przekazemy dane to mamy pewnosc ze wypisze te dane. */
      /** w tym momencie jetesmy pewni ze te dane posiadamy. W tym .then() kod wykonuje sie juz synchronicznie kazdy po sobie. Jesli chcemy dodatkowa funkcjonalnosc np klikalnosc uzytkownikow to dodamy taka funkcje ponizej gdyz tutaj jestesmy pewni posiadania danych */

      makeUsersClickable();
    }
  )
  .catch((error) => {
    console.log("We have a problem: ", error);
  })
  .finally(() => {
    /** tutaj przekazujemy co ostatecznie sie stanie po pobraniu danych i przetworzeniu ich */
    writeCurrentStatus("Done!");
  });

console.log("Final usersData: ", usersData); // nie otrzymamu tutaj zadnych danych gdyz fetch() plus metody .then() i .finally() odbeda sie po consol logu poniewaz dzialaja one asynchronicznie poza glownym torem dzialania aplikacji. Sama aplikacja bardzo szybko wykonuje kod a pozyskiwanie danych z serwera trwa dluzej. Gdy program wyrzucal consol log mial jeszcze pusta tablice.
