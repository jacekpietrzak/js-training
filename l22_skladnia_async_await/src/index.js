import "./css/index.css";

const ROCKETS_URL = "https://api.spacexdata.com/v3/rockets";
const rocketsList = document.querySelector(".rocketsList");
const rocketDetails = document.querySelector(".rocketDetails");

/** zaczniemy od napisania funkcji asynchrionicznej ktora bedzie zadala fetcha*/
/** tak robilismy do tej pory */
const oldFetchRockets = () => {
  fetch(ROCKETS_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// fetchRockets();

/** jesli wywolamy funkcje dostaniemy tablice obiektow */
/** uzywanie w ten sposob funkcji jako promise sluzylo do unikniecia tzw Callback Hell. Obietnice zostaly wprowadzone po to aby ulatwic prace i zrobic ja bardziej przewidywalna gdyz wiemy ze jesli wejdziemy w operacje then z data to bedziemy miec juz dane z serwera. Chyba ze bedziemy miec jakis blad ktory sobie wylapujemy w catch*/
/** tak jak promisy umozliwily uniknac callback hell tak w pewnym sensie gdy mamy bardziej skomplikownay kod moga prowadzic do promise hell. Poniewaz jesli chcemy zrobic cos asynchronicznego w then z danymi ktore uzyskalismy to znow musimy utworzyc nowe promise. Czyli promise w promise. On znow bedzie mial then i znow bedzie oczekiwal na response.json(). W skrajnych przypadkach mozemy spotkac kod ktory bedzie sie tak mocno zagniezdzal ze bedzie coraz bardziej z prawej strony. Staje sie coraz mniej czytelny jesli operujemy ta skladnia promise>then>then>catch. Jest to latwiejsze do zrozumienia i czytania niz callbacks ale w skrajnych przypadkach moga doprowadzic do duzej nieczytelnosci kodu. */
/** tutaj wchodzi skladnia async/await. Na czym polega? Gdy pracujemy z kodem ktory zwraca dane asynchroniczne to mozemy pracowac uzywajac skladni async/await */
/** Kazda funkcja moze byc asynchroniczna. Zeby taka byla musi miec przed soba slowko "async" i to wszystko. To sprawia ze w srodku mamy mozliwosc korzystania ze slowa kluczowego "await" */

/** przedefiniujemy wczesniejsza funkcje na skladnie async/await. Cala moc tej skladni polega na tym ze mozemy przypisywac wyrazenia asynchrnoniczne jak fetch ktore zwraca promise, ale teraz dzieki await mozemy ja przypisac sobie do response. Od tego momentu kod mozemy pisac jakby byl synchroniczny. W tym wypadku "response" jest zdefiniowany fetchem i juz tej zmiennej mozemy uzyc ponizej bo jestesmy pewnie ze te dane tam juz sa. */

const fetchRockets = async () => {
  const response = await fetch(ROCKETS_URL); // deklarujemy zmienna taka jaka bysmy uzyli w pierwszym .then() i do tej zmiennej przypozadkowujemy asynchroniczne fetch. Jesli chcemy po prostu wywolac funkcje asynchroniczna to mozna napisac po prostu "await fetch(ROCKETS_URL)". await daje nam to ze javascript dociera do tego momentu i czeka az funkcja po prawej stronie sie wykona i dostanie dane z serwera i wtedy pojdzie dalej i przypisze juz te dane do zmiennej po lewej. await mozna tylko uzywac w funkcji async.
  // console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const rockets = await response.json(); // aby te dane uzyc musimy tez przekonwertowac je na json

  // console.log("rockets: ", rockets);
  return rockets; // tu juz jestesmy po etapie response.json wiec mozemy uzywac tych danych

  // fetch(ROCKETS_URL)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

console.log(fetchRockets()); // mimo to ze w tej funkcji mozemy uzywac skladni async/await zeby latwiej sie pisalo i bylo czytelne to ostatecznie typ tej funkcji z async jest promise. Czyli jesli chcemy uzyc tej funkcji np wypisac w html to musze potraktowac te obietnice jak promise czyli zeby ja odpalic musze dopisac do niej .then

fetchRockets().then((rockets) => {
  /** dopiero teraz otrzymujemy dane i mozemy z nich korzystac. */
  console.log(rockets);
  /** np jak bysmy chcieli z nich zrobic jakis html z rockets. Rockets jest tablica wiec mozemy uzyc petli "forEach" albo "for...of" albo "map". Tutaj uzyjemy mapy bo nie uzywalismy jeszcze. Zamienimy ta mape w locie na stringa uzywajac join(). Przelecimy sobie iteracje po wszystkich elementach rakiet (powtarzajac sobie na czym polega iteracja tablicach). Mapa zwraca na kazdej iteracji jakis element ktory wklada do tej nowej tablicy (map zawsze zwraca nowa tablice) i na koncu potraktujemy ja joinem zeby zlaczyc ta tablice w jeden string.  */
  rocketsList.innerHTML = rockets
    .map((rocket) => {
      /** zwrocimy sobie html. Poniewaz element jest lista to zwrociimy elementy listy. */
      return `
    <li class="title" data-rocket-id="${rocket.rocket_id}">${rocket.rocket_name}</li> 
    `; /** poniewaz metoda map mapuje po kazdym elemencie tablicy i zwraca nowa tablice gdzie kazdy element w tym przypadku jest tym co zwraca return czyli elementem listy. Dlatego potem go laczymy uzywajac metody join() */
    })
    .join(
      ""
    ); /** join laczy elementy tablicy join("tutaj podajemy jaki ma byc separator pomiedzy elementami laczonymi"). My damy pusty string, dzieki temu dostaniemy jeden dlugi string ktory zawiera kazdy z tych elementow. i ten otrzymany string wkladamy jako innerhtml do naszego rocketsList */
});

/** co zrobilismy
 * 1 - zdefiniowalismy sobie fetchRockets ktory pobiera nam dane rakiet
 * 2 - teraz juz ja mamy ale jako promise wiec
 * 3 - odpalamy te funkcje i robimy .then(), sprawdzamy consol.logiem czy sa te dane, mamy je wiec iterujemy po naszej tablicy danych i tworzymy html
 * 4 - dodamy opcje ze po kliknieciu na rakiete dostaniemy dodatkowe dane
 */

const fetchSingleRocket = async (rocketId) => {
  const response = await fetch(`${ROCKETS_URL}/${rocketId}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const singleRocket = await response.json();
  return singleRocket;
};

rocketsList.addEventListener("click", async (event) => {
  /** uzywamy w dataset. id ktore przypozadkowalismy elementowi ale musimy zapisac go w camelCase. W tym wypadku rocket-id = rocketId */
  console.log(event.target.dataset.rocketId);
  /** moge to teraz przypozadkowac do zmiennej */
  const rocketId = event.target.dataset.rocketId;
  /** teraz wywolamy funkcje ktora zwroci nam jedna rakiete (pobierze za pomoca fetch). Przypiszemy ta funkcje do zmiennej i w niej jako argument nadamy rocketId */
  const rocket = await fetchSingleRocket(rocketId);
  const rocketImages = rocket.flickr_images
    .map((image) => {
      /** dla kazdego elementu tego array tutaj (image) wywola sie funkcja ktora jest po => a ta funkcja dostaje ten jeden element. */
      return `<img class="img" src=${image}>`;
    })
    .join("");
  /** tu mamy tablice po ktorej iterujemy */
  console.log("rocket.flickr_images: ", rocket.flickr_images);
  /** a tu juz mamy tablice przekonwertowana na html */
  console.log("rocketImages: ", rocketImages);
  rocketDetails.innerHTML = ` 
  <h2>${rocket.rocket_name}</h2>
  <p>${rocket.description}</p>
  <div class="gallery">${rocketImages}</div>
  `; /** do galerii zdjec uzyjemy mapy. Moglibysmy zrobic to tutaj pomiedzy `` ale zeby bylo to przejrzyste to zrobimy to pod zmienna ktora bedzie sie nazywac np rocketImages */
  console.log(rocket);
});

/** Zadania rownolegle */
/** Przy async/awai jesli robimy zapytania one postepuja kazdy po sobie. ZNaczy ze pozycja 2 czeka na 1 az sie wykona. To blokuje przeplyw. Jesli te promise nie sa od siebie zalezne czyli ze powiedzmy 2 nie czeka na dane z 1 to mozemy je uruchomic rownolegle. Do tego kozystamy z Promise.all([]) */

const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  /** zmienmy kod ponizej zeby byl super czytelny */
  // const firstResponse = await fetch(`${baseUrl}/users/1`);
  // const secondResponse = await fetch(`${baseUrl}/users/2`);
  // const thirdResponse = await fetch(`${baseUrl}/users/3`);

  /** refaktoryzacja ponizej z Dominikiem */

  const baseUrl = "https://jsonplaceholder.typicode.com";

  const endpoints = [
    `${baseUrl}/users/1`,
    `${baseUrl}/users/2`,
    `${baseUrl}/users/3`,
  ];
  /** Promise.all(array) zwroci tablice z wszystkimi wynikami na raz innych promise np fetch w postaci tablicy jesli zostana spelnione. Dlatego ze Promise.all zwraca promise to mozemy uzyc await do obslugi promise. Promise.all() przyjmuje tablice promises i zwraca tablice juz z koncowymi danymi i uruchamia je rownolegle. Osczednosc czasu. */
  const users = await Promise.All(
    endpoints.map(async (endpoint) => {
      const response = await fetch(endpoint);
      const data = response.json();
      return data;
    })
  );

  const firstUser = await firstResponse.json();
  const secondUser = await secondResponse.json();
  const thirdUser = await thirdResponse.json();

  console.log(firstUser, secondUser, thirdUser);
}

function renderUserListItems(users) {
  const markup = users
    .map(
      (user) => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
}
