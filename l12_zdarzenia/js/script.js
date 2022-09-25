//Event
const buttonAdd = document.getElementById("add-content-button");

const mainContentContainer = document.getElementById("main-content");

let i = 0;

const onButtonAddClick = (event) => {
  const el = document.createElement("p");
  el.innerText = `Lorem ipsum ${i}`;
  mainContentContainer.append(el);
  i++;
};

buttonAdd.addEventListener("click", onButtonAddClick);

// const onButtonRemoveClick = (event) => {
//   const el = document.createElement;
// };

const form = document.getElementById("form");
// console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log(event);
  console.log(event);
  console.log(event.target[1].value);
  // console.log("zatrzymana wysylka formularza");
});

// document.addEventListener("keydown", (event) => {
//   console.log(event.code);
// });
// document.addEventListener("keyup", (event) => {
//   console.log(event.key);
// });

// document.addEventListener("keydown", (event) => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

const emailInput = document.getElementById("email");

emailInput.addEventListener("focus", () => {
  console.log("focus");
});

emailInput.addEventListener("blur", () => {
  console.log("blur");
});

mainContentContainer.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  // event.target.remove();
});
