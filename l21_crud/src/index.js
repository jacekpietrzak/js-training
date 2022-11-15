import "./css/index.css";

const userList = document.querySelector("#user");

/** do komunikacji z backendem uzywamy 4 metod
 * POST - Operacje create - Tworzenie nowego zasobu
 * GET - Operacje read - pobieranie zasobu
 * PUT i PATCH - Operacja update - aktualizacja zasobu
 * DELETE - Operacja delete - usuwanie zasobu wedlog id
 */

/** jesli uzywamy fetch jako GET to nie musimy uzywac metody bo domyslnie jest na get. Fetch zwraca zawsze promisy. Jesli mamy promise to mamy metode then() i tylko w ten sposob mozemy dostac sie do danych ktore przychodza. */

/** obslugiwanie fetcha wyglada nastepujaco:
 * 1 - robimy fetch("adres api", {method:"GET"}) - Przy fetch jesli chcemy pozeyskac dane to nie musimy uzywac obiektu do wybrania metody gdyz domyslnie mamy get. DO innych dzialan jak POST, PUT/PATCH, DELETE juz musimy okreslic
 * 2 - robimy .then(response => {
 * if(!response.ok) { - sprawdzamy czy te dane sa ok.
 * throw new Error("Something wen wrong") - jesli nie sa ok, wrzucamy error
 * }
 * response.json()}) - Jesli tak to zwracamy je w formacie json
 * 3 - robimy .then((data) => { - robimy kolejnego thena i tutaj juz mamy dane na ktorych mozemy pracowac
 * console.log(data)
 * })
 */

/** Metoda do obslugi zapytania HTML do backendu

// {
//   method: "GET",
//   headers: {"Content-Type": "application,json",},
// }

 */

/** Zapytanie POST */
/////////////////////
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    // console.log(response); // aby zobaczyc jak wyglada response
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json(); /** tutaj nasze response zamieni sie na json i zwroci nam przy GET ten dodany obiekt z dodanym jeszcze ID tym ktory backend mu przypisal. */
  })
  .then((data) => {
    console.log("Created data: ", data);
    data.forEach((post) => {
      // console.log(post.id + ": " + post.title); // zamiast tak mozna uzyc `${cos}`
      console.log(`[${post.id}]: ${post.title}`);
    });
  });

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    // console.log(response); // aby zobaczyc jak wyglada response
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json(); /** tutaj nasze response zamieni sie na json i zwroci nam przy GET ten dodany obiekt z dodanym jeszcze ID tym ktory backend mu przypisal. */
  })
  .then((data) => {
    let markup = "";
    console.log("Users Created data: ", data);
    data.forEach((user) => {
      // console.log(post.id + ": " + post.title); // zamiast tak mozna uzyc `${cos}`
      console.log(`Name: ${user.name}, email: ${user.email}, address:`);
      // jesli mamy tablice w tablicy to mozemy uzyc foreach dla kolejnej tablicy
      // utworzmy sobie htmla z tych danych
      markup += `
      <h2>[${user.id}] Name: ${user.name}</h2>
      <p>email: ${user.email}</p>
      <p>address: ${user.address.city}, ${user.address.street}  </p>
      `;
      userList.innerHTML = markup;
    });
  });

/** Zapytanie POST */
/////////////////////
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    /** w ten sposob dodajemy tresci. Moze to byc obiekt ktory zawiera np title, body ale tez moze byc cokoliwek innego jak np age:100 ale klucze musza sie zgadzac z dokumentacja danego api. To body zostanie przekazane na backend jesli uzyjemy metody POST i wyslemy go na ten sam adres. Powinien przyjac i je obsluzyc. Przeczytalismy dokumentacje api i tam mamy napisane co obsluguje.*/
    title: "Posted title",
    body: "Posted post",
    age: 100,
    hobby: "coding",
  }),
})
  .then((response) => {
    // console.log(response); // aby zobaczyc jak wyglada response
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json(); /** tutaj nasze response zamieni sie na json i zwroci nam przy GET ten dodany obiekt z dodanym jeszcze ID tym ktory backend mu przypisal. */
  })
  .then((data) => {
    console.log("Created data: ", data);
  });

/** Zapytanie PUT/PATCH */
//////////////////////////

/** jesli chcemy zupdatowac post o id nr 100 to podajemy id i body
 * Metoda PATCH zastępuje wartości przekazane w treści żądania właściwości w istniejącym zasobie.
 * Metoda PUT całkowicie zastępuje zasób.
 */

/** normalnie po */

const postId = 99;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  // dodajemy do adresu numet id posta ktory chcemy uaktualnic. Normalnie podawalibysmy te id dynamicznie.
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    /** w ten sposob dodajemy tresci. Moze to byc obiekt ktory zawiera np title, body ale tez moze byc cokoliwek innego jak np age:100 ale klucze musza sie zgadzac z dokumentacja danego api. To body zostanie przekazane na backend jesli uzyjemy metody POST i wyslemy go na ten sam adres. Powinien przyjac i je obsluzyc. Przeczytalismy dokumentacje api i tam mamy napisane co obsluguje.*/
    title: "Updated title",
    body: "Updated body",
    age: 102,
    hobby: "coding",
  }),
})
  .then((response) => {
    // console.log(response); // aby zobaczyc jak wyglada response
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json(); /** tutaj nasze response zamieni sie na json i zwroci nam przy GET ten dodany obiekt z dodanym jeszcze ID tym ktory backend mu przypisal. */
  })
  .then((data) => {
    console.log("Updated data: ", data);
  });

/** Zapytanie DELETE */
///////////////////////
/** Usuwajac musimy przekazac id postu do usuniecia */

const postIdToDelete = 99;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  // dodajemy do adresu numet id posta ktory chcemy uaktualnic. Normalnie podawalibysmy te id dynamicznie.
  method: "DELETE",
})
  .then((response) => {
    // console.log(response); // aby zobaczyc jak wyglada response
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return response.json(); /** tutaj nasze response zamieni sie na json i zwroci nam przy GET ten dodany obiekt z dodanym jeszcze ID tym ktory backend mu przypisal. */
  })
  .then((data) => {
    console.log("Deleted data: ", data);
  });
