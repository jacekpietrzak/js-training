/** kazdy modul moze importowac inny modul */

import { courses } from "./courses";

/** mozemy teraz tego modulu uzyc w tym module */

export const student1 = {
  name: "John Smith",
  age: 43,
  courses: courses,
};

// export przed deklaracja zmiennej daje mozliwosc importowania zmiennej z tego modulu w inne miejsce, Bez "export" ta zmienna moglaby funkcjonowac tylko w tym module.

export const student2 = {
  name: "Sarah Johns",
  age: 33,
  courses, // w ES6 jesli klucz i wartosc w obiekcie maja dokladnie takie samo brzmienie, sa takim samym slowem, mozemy sobie uproscic kod uzywajac tego slowa tylko raz.
};

/** dzieki modulowosci nasza aplikacja moze sie bardzo ladnie rozrastac bez zasmiecania naszych glownych plikow w ktorych chcemy przechowywac np wyswietlanie jakiegos htmla */
