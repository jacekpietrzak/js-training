///////////////////////////////////////////////
////////// === Delegacja Zdarzen === //////////
///////////////////////////////////////////////

////////// === Propagacja zdarzenia === //////////
////////// ============================ //////////

/** Propagacja zdarzenia (event propagation) to termin opisujący cykl życia zdarzenia, który obejmuje trzy etapy: przechwytywanie, celowanie i bąbelkowanie (bubbling phase). W praktyce najczęściej wykorzystywana jest tylko faza bąbelkowania. */

/** Kiedy wydarzenie ma miejsce, przechodzi przez trzy obowiązkowe fazy:  Capturing phase (przechwytywanie) - zdarzenie rozpoczyna swój cykl życia w window i opada (przechodzi przez wszystkie elementy przodków) do najgłębszego elementu docelowego, na którym nastąpiła akcja, np. kliknięcie. Target phase (celowanie) - zdarzenie dotarło do elementu docelowego. Ten etap obejmuje tylko powiadomienie elementu, że akcja została na nim wykonana. Bubbling phase (bąbelkowanie) - ostatnia faza, w której zdarzenie bąbelkuje od najgłębszego, docelowego elementu, przez wszystkie elementy przodków, aż do window. */

/** Kiedy wydarzenie ma miejsce, przechodzi przez trzy obowiązkowe fazy:  Capturing phase (przechwytywanie) - zdarzenie rozpoczyna swój cykl życia w window i opada (przechodzi przez wszystkie elementy przodków) do najgłębszego elementu docelowego, na którym nastąpiła akcja, np. kliknięcie. Target phase (celowanie) - zdarzenie dotarło do elementu docelowego. Ten etap obejmuje tylko powiadomienie elementu, że akcja została na nim wykonana. Bubbling phase (bąbelkowanie) - ostatnia faza, w której zdarzenie bąbelkuje od najgłębszego, docelowego elementu, przez wszystkie elementy przodków, aż do window. */

////////// === Bąbelkowanie (bulgotanie) zdarzenia === //////////
////////// =========================================== //////////

/** Gdy wystąpi zdarzenie, procedury obsługi są najpierw wywoływane na najgłębiej zagnieżdżonym elemencie, następnie na jego rodzicu, a następnie powyżej i tak dalej, w górę łańcucha zagnieżdżania. Proces ten nazywa się bąbelkowaniem (event bubbling), ponieważ zdarzenia „bąbelkują” od wewnętrznego elementu, przez wszystkich przodków, do window, tak jak bąbel powietrza wypływa na powierzchnię. */

/** Spójrzmy na przykład, aby było to zrozumiałe. Istnieją trzy zagnieżdżone znaczniki <div> z obsługą kliknięć na każdym z nich. */

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");
parent.addEventListener("click", () => {
  alert("Parent click handler");
});
child.addEventListener("click", () => {
  alert("Child click handler");
});
descendant.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Descendant click handler");
});

// color palette

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
