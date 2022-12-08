import { POSTS_API_URL } from "./constants";
import { POSTS_PER_PAGE } from "./constants";
/** name import type dlatego w klamrach bo chcemy pojedyncze zmienne importowac po imieniu */

/** jesli chcemy uzyc jakiejs innej funkcji np tworzenie HTML to mozemy dodac funkcje callback (nazwa dowolona) do parametrow funkcji getPosts. */
const getPosts = (page, printPosts, container) => {
  const params = new URLSearchParams({
    _limit: POSTS_PER_PAGE,
    _page: page,
  });
  fetch(POSTS_API_URL + "?" + params)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((posts) => {
      console.log("Get posts returns:", posts);
      /** ten callback moze wziac nasze posty i cos z nimi zrobic */
      printPosts(posts, container);
    })
    /** zamiast error mozna wpisac cokolwiek */
    .catch((error) => {
      console.log("inside getPosts Error: ", error);
    });
};

/** robimy defaultowy export funkcji */

export default getPosts;
