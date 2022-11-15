import "./css/index.css";

const postsList = document.querySelector(".postsList");
const paginationContainer = document.querySelector(".paginationContainer");
const loadMorePostsButton = document.querySelector(".loadMorePostsButton");
let currentPage = 1;

/** Paginacja sluzy do podzialu danych na strony aby nie ladowac wszystkiego na start gdyz uzytkownik przewaznie nie potrzebuje tak wiele danych i do tego spowalnia to sama strone gdyz mamy wiecej danych do pozyskania z serwera. */

// https://jsonplaceholder.typicode.com/posts

/** przewaznie podczas kodowania nie uzywamy w fetch calego adresu a zmiennej do ktorej ten adres jest przypiety. Upraszcza to pozniej ewentualne zmiany jak i przejrzystosc kodu. */
/** konwencja ktora jest przyjeta to jesli deklarujemy zmienne ktore sa stale to piszemy je wielkimi literami */

const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

/** zdefiniujemy sobie funkcje ktora bedzie nam robila fetch ktora pozniej bedziemy uzywac kiedy bedziemy chcieli fetchowac dane. To bedzie nasza podstawowa sciezka danych. Do bardziej szczegolowych bedziemy okreslac nowe sciezki.*/

const POSTS_PER_PAGE = 9;

/** w standardzie ES6 jesli funkcja strzalkowa nie robi nic innego jak tylko return to mozemy skrocic kod zamieniajac
 * .then((response) => {
      return response.json();
    })
    na:
    .then((response) => response.json())

    usuwamy klamry funkcji jak i slowo "return"
 */

const getPosts = (page) => {
  let postsListMarkup = "";
  const params = new URLSearchParams({
    _limit: POSTS_PER_PAGE,
    _page: page,
  });
  /** fetch(POSTS_API_URL + "?_limit=" + POSTS_PER_PAGE + "&_page=" + page) */
  /** zrobilismy refaktoryzacje i uzywamy obiektu URLSearchParams aby fetch byl bardziej czytelny i zgodny ze standardami. Ta klasa stworzy dla nas dlugi warkocz parametrow w naszym stringu dodajac rowniez & pomiedzy kazdym parametrem. */
  fetch(POSTS_API_URL + "?" + params)
    /** potrzebujemy znaku ? przed obiektem a reszta juz wypelni sie z obiektu params */
    .then((response) => response.json()) // tu juz mamy dane ktore przekazemy do kolejnego .then()
    .then((posts) => {
      // zrobimy na naszych postach iteracje gdysz chcemy je wyswietlic
      posts.forEach((post) => {
        postsListMarkup += `
        <li class="listItem">
        <h3 class="title">${post.id}: ${post.title}</h3>
        <p>${post.body}</p>
        </li>`;
      });
      // Adding postsListMarkup to DOM
    })
    .finally(() => {
      // postsList.innerHTML = postsListMarkup; ten sposo jest na paginacje z przyciskami z numerami strony
      postsList.insertAdjacentHTML("beforeend", postsListMarkup);
    })
    .catch((error) => {
      console.log(error);
    });
};

/** zrobmy nawigacje ktora nam umozliwi nawigowanie miedzy stronami
 * jest to prost paginacja z przyciskami na dole odpowiadajacymi kazdej stronie.
 */
const setPagination = () => {
  let paginationMarkup = "";
  for (let i = 1; i <= 10; i++) {
    paginationMarkup += `<button>${i}</Button>`;
  }
  paginationContainer.innerHTML = paginationMarkup;

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const pageNumber = event.target.textContent;
      getPosts(pageNumber);
      // console.log(pageNumber);
    });
  });
};

/** zdefiniujmy sobie nowa funkcje dla innego typu paginacji. Paginacji load more za pomoca jednego przycisku bedziemy ladowac ponizej kolejna ilosc postow */

loadMorePostsButton.addEventListener("click", () => {
  fetch(POSTS_API_URL)
    .then((response) => response.json())
    .then((posts) => {
      let allPostsNumber = posts.length;
      console.log("All posts: ", posts.length);
      
      const maxPageNumber = posts.length / POSTS_PER_PAGE;
      const maxPageNumberRoundUp = Math.ceil(maxPageNumber);
      console.log("maxPageNumberRoundUp: ", maxPageNumberRoundUp);
      currentPage++;

      if (currentPage === maxPageNumberRoundUp) {
        loadMorePostsButton.style.display = "none";
      }

      // TODO: load getPosts() and pass current page number
      getPosts(currentPage);
    });
});

/** ustawmy tutaj strone startowa gdy cala strona sie zaladuje na poczatku */
getPosts(currentPage);

/** wywalujemy podstawowa paginace z przyciskami odpowiadajacymi kazdej stronie */
// setPagination();

/** zbudujmy innego typu paginacje. Taka ktora bedzie ladowac kolejne posty po nacisnieciu przycisku */

/** czas na refaktoryzacje = zmiana kodu nie wplywajaca na jego funkcjonalnosc a bardziej na czytelnosc, wydajnosc, bycie bardziej zgodnym ze standardami. Uzylismy refaktoryzacji aby zmienic adres fetch i uzyc obiektu stworzonego do tego. */
