/** Moduly nie tylko moga przechowywac dane ale rowniez miec jakies funkcje */

const pageBackgroundController = (color) => {
  const pageBody = document.querySelector("body");
  pageBody.style.background = color;
};

/** do eksportu mozna znow uzyc "export" ale jest wiecej sposobow na eksport i jednym z nich jest "export default". Tutaj piszemy co chce domyslnie wyeksportowac. */

export default pageBackgroundController;
