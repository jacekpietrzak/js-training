/////////////////////////////////
////////// === DOM === //////////
/////////////////////////////////

////////// === Poruszanie się po drzewie DOM === //////////
////////// ===================================== //////////

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems); // wylogowuje pseudotablice - Pseudotablicenie posiadaja wszystkich metod i funkcji ktore maja zwykle tablicy. Aby to uzyskac mozemy ja przekonwetowac na prawdziwa tablice.
// console.log(Array.from(listItems));
// // albo za pomoca operatora Spread ... wypakowac wsyztkie elementy do nowej talbicy - Preferowana metoda
// console.log([...listItems]);

// console.log(document.head);

/////////////////////////////////////////////////////
////////// === Wyszukiwanie elementow === ///////////
/////////////////////////////////////////////////////

// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

////////////////////////////////////////////////////
////////// === Właściwości i atrybuty === //////////
////////////////////////////////////////////////////
/** Podczas utworzenia drzewa DOM niektóre standardowe atrybuty HTML stają się właściwościami elementów. Przyjrzyjmy się kilku powszechnie używanym właściwościom.

- value - zawiera aktualną zawartość tekstową elementów formularza.
- checked - przechowuje stan pola wyboru lub przycisku radiowego.
- name - przechowuje wartość określoną w atrybucie HTML name.
- src - ścieżka do obrazu znacznika <img>. */

//===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = "https://placeimg.com/640/480/tech";

////////// === Właściwość textContent === //////////
////////// ============================== //////////
/** elem.textContent zwraca zawartość tekstową wewnątrz elementu. Dostępne do czytania i pisania. Bez względu na to, co zostanie przekazane do textContent, dane będą zawsze zapisywane jako tekst. */

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text
// // text.textContent = "Taki sobie tekst.";

// const title = document.querySelector(".article-title");
// title.textContent = "Welcome to Bahamas!";

////////// === Właściwość classlist === //////////
////////// ============================ //////////
/** Właściwość classList przechowuje obiekt z metodami pracy z klasami elementu.

- elem.classList.contains(cls) - zwraca true lub false w zależności od tego, czy element ma klasę cls.
- elem.classList.add(cls) - dodaje klasę cls do listy klas elementów.
- elem.classList.remove(cls) - usuwa klasę cls z listy klas elementów.
- elem.classList.toggle(cls) - jeśli nie ma klasy cls to dodaje ją, jeśli jest przeciwnie usuwa ją.
- elem.classList.replace(oldClass, newClass) - zastępuje istniejącą klasę oldClass określoną newClass. */

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// text.classList.toggle("is-hidden"); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach((cls) => {
//   console.log(cls); // text, red, new-class
// });

////////// === Właściwość style === //////////
////////// ======================== //////////
/** Służy do czytania i zmiany stylów wbudowanych. Zwraca obiekt CSSStyleDeclaration, który zawiera listę wszystkich właściwości określonych tylko w stylach wbudowanych elementu, a nie cały CSS. Przy wpisie właściwości są zapisywane w camelCase, to znaczy background-color staje się element.style.backgroundColor itd. */

/** W praktyce stylizowanie elementów odbywa się poprzez dodawanie klas CSS. Właściwość style służy do dodawania pewnego rodzaju stylów dynamicznych, na przykład podczas animacji. */

////////// === Atrybuty === //////////
////////// ================ //////////
/** Elementom DOM odpowiadają tagi HTML, które mają atrybuty tekstowe. Dostęp do atrybutów uzyskuje się przy użyciu standardowych metod. Te metody działają z wartością, która jest w HTML.

- elem.hasAttribute(name) - sprawdza obecność atrybutu, zwraca true lub false.
- elem.getAttribute(name) - pobiera wartość atrybutu i zwraca ją.
- elem.setAttribute(name, value) - ustawia atrybut.
- elem.removeAttribute(name) - usuwa atrybut.
- elem.attributes - właściwość, zwraca obiekt wszystkich atrybutów elementu. */

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Lake and clouds"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

////////// === Atrybuty danych === //////////
////////// ======================= //////////
/** Umożliwia dodanie dowolnego atrybutu do tagu i uzyskanie jego wartości w JavaScript. Możliwość ta jest wykorzystywana w celu uproszczenia pisania kodu, na przykład powiązania danych i znaczników za pomocą unikalnego identyfikatora, wskazania typu akcji na przyciskach itp.

<button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button>

Do pobrania wartości właściwości data-atrybutu używana jest właściwość dataset, po której znajduje się nazwa atrybutu. Oznacza to, że data- jest odrzucane, a reszta nazwy jest zapisywana jako nazwa właściwości obiektu.

const saveBtn = document.querySelector('button[data-action="save"]');
console.log(saveBtn.dataset.action); // "save"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log(closeBtn.dataset.action); // "close"
 */

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });

////////////////////////////////////////////////////////////
////////// === Tworzenie i usuwanie elementów === //////////
////////////////////////////////////////////////////////////
/** DOM API pozwala nie tylko wybierać lub modyfikować już istniejące, ale także usuwać i tworzyć nowe elementy, a następnie dodawać je do dokumentu. */

////////// === Tworzenie === //////////
////////// ================= //////////
/** document.createElement(tagName);
 * Tworzy element o nazwie tagName i zwraca do niego link jako wynik jego wykonania. tagName to ciąg znaków wskazujący typ tworzonego elementu. Element jest tworzony w pamięci, nie ma go jeszcze w DOM.
 */

// const heading = document.createElement("h1");
// console.log(heading); // <h1></h1>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

////////// === Dodawanie === //////////
////////// ================= //////////
/** Aby utworzony element był wyświetlany na stronie, musi zostać dodany do już istniejącego elementu w drzewie DOM. Powiedzmy, że dodajemy do jakiegoś elementu element, są na to metody. 
    - element.append(el1, el2, ...) - dodaje jeden lub więcej elementów po wszystkich dzieciach elementu element.
    - element.prepend(el1, el2, ...) - dodaje jeden lub więcej elementów przed wszystkimi dziećmi elementu element.
    - element.after(el1, el2, ...) - dodaje jeden lub więcej elementów po elemencie element.
    - element.before(el1, el2, ...) - dodaje jeden lub więcej elementów przed elementem element.

We wszystkich tych metodach el to elementy lub ciągi w dowolnej kombinacji lub ilości. Ciągi są dodawane jako węzły tekstowe.
*/

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USERNAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

/** Jeżeli wstawiany element znajduje się już w DOM, to jest usuwany ze starego miejsca i dodawany do nowego. Stąd wynika zasada – jeden i ten sam element nie może znajdować się jednocześnie w dwóch miejscach. */

////////// === Usuwanie === //////////
////////// ================= //////////
/** elem.remove();
Aby usunąć element, użyj metody remove(). Znajduje się ona na samym elemencie elem, który należy usunąć.
 */

// text.remove();
// title.remove();

////////// === Optymalizacja drzewa DOM === //////////
////////// ================================ //////////
/** 
Nowoczesne przeglądarki próbują zoptymalizować proces renderowania strony bez interwencji programisty. Jednak zmiana drzewa DOM jest kosztowną operacją, dlatego trzeba starać się zminimalizować liczbę wywołań DOM.

Repaint - występuje, gdy zmiany wpłynęły na style, które wpływają na wygląd elementu, ale nie na geometrię. Na przykład opacity, background-color, visibility i outline. Przeglądarka ponownie renderuje element, uwzględniając nowy styl. Sprawdzana jest również widoczność innych elementów, jeden lub więcej może być ukrytych pod zmienionym wyglądem.

Reflow - występuje, gdy zmiany wpływają na treść, strukturę dokumentu, położenie elementów. Pozycjonowanie i wymiary są przeliczane, co prowadzi do przerysowania części lub całości dokumentu. Zmiana rozmiaru jednego kontenera nadrzędnego wpłynie na wszystkie jego dzieci i przodków. Ma znacznie większy wpływ na wydajność niż repaint.

Wszystkie powyższe operacje blokują przeglądarkę. Strona nie może wykonywać żadnych innych operacji, gdy trwa reflow lub repaint. Przyczynami mogą być:

    - Manipulacje z drzewem DOM (dodawanie, usuwanie, zmiana, przestawianie elementów)
    - Zmiana treści, m.in. tekstu w polach formularza
    - Obliczanie lub modyfikacja właściwości CSS
    - Dodawanie i usuwanie arkuszy stylów
    - Manipulacja z atrybutem class
    - Manipulacje z oknem przeglądarki (zmiana rozmiaru, przewijanie)
    - Aktywacja pseudoklas (na przykład :hover)
*/

//////////////////////////////////////////////////
////////// === Właściwość innerHTML === //////////
//////////////////////////////////////////////////
/** Innym sposobem tworzenia elementów DOM i umieszczania ich w drzewie jest użycie otagowanych stringów (ciągów) i pozwolenie przeglądarce na wykonanie całej ciężkiej pracy. Takie podejście ma swoje plusy i minusy. */

////////// === Czytanie === //////////
////////// ================ //////////
/** Właściwość innerHTML przechowuje zawartość elementu, w tym znaczniki, jako ciągi. Zwracana wartość jest zawsze prawidłowym kodem HTML. */

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

////////// === Zmiana === //////////
////////// ============== //////////
/** Właściwość innerHTML jest zarówno odczytywalna, jak i zapisywalna. Jeśli napiszesz do niego ciąg ze znacznikami HTML, to przeglądarka podczas parsowania ciągu zamieni je na prawidłowe elementy i doda je do drzewa DOM. */

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

/** Jeśli napiszesz pusty ciąg do właściwości innerHTML zawartość elementu zostanie wyczyszczona. To łatwy i szybki sposób na usunięcie całej zawartości. */

/** Dzięki takiemu podejściu, w przeciwieństwie do document.createElement(), nie otrzymujemy odniesienia do utworzonego elementu DOM. To pierwszy krok w kierunku tworzenia szablonów - tworzenia dużej ilości tego samego typu znaczników z różnymi danymi zgodnie z predefiniowanym szablonem. Na przykład jak na liście produktów sklepu internetowego itp.

Jednolite (szablonowe) znaczniki są tworzone z tablicy danych. Podejście polega na iteracji po tej tablicy i skomponowaniu jednego ciągu ze znacznikami HTML, które następnie zapisujemy w innerHTML elementu. */

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

////////// === Dodanie === //////////
////////// =============== //////////
/** Zmiana elem.innerHTML całkowicie usunie i ponownie utworzy wszystkich potomków elementu elem. Jeśli element nie jest początkowo pusty, wystąpią dodatkowe koszty serializacji istniejących znaczników, co jest złe. */

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

/** Użyj właściwości elem.innerHTML do dodania elementu tylko wtedy, gdy element elem jest pusty lub jeśli chcesz całkowicie zastąpić jego zawartość. */

////////// === Metoda insertAdjacentHTML() === //////////
////////// =================================== //////////
/** Nowoczesna metoda dodawania ciągu znaków z tagami HTML przed, po lub wewnątrz elementu. Rozwiązuje problem innerHTML z ponownym serializowaniem zawartości elementu podczas dodawania znaczników do istniejących. 
  
 elem.insertAdjacentHTML(position, string);
 
Argument position to ciąg znaków, pozycja względem elementu elem. Przyjmuje jedną z czterech wartości.

 - "beforebegin" - przed elem
 - "afterbegin" - wewnątrz elem, przed wszystkimi dziećmi
 - "beforeend" - wewnątrz elem, po wszystkich dzieciach
 - "afterend" - po elem

*/

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");
// // console.log(markup);
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

/** "beforebegin" i "afterend" działają tylko wtedy, gdy elem jest już w drzewie DOM. */

///////////////////////////////////////////////
////////// === Łączenie skryptów === //////////
///////////////////////////////////////////////

document.get;
