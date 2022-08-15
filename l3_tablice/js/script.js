// === Po Kahoot === //

// Operator && zwraca ostatni operand (jeden z warunkow) jezeli cale wyrazenie zwraca true. Jeśli chociażby jeden z operandów będzie false, rezultat wyrażenia otrzyma jego znaczenie. Czyli logiczne && wyłapuje pierwszy false i zwraca to znaczenie przy którym to się stało, albo ostatni w kolejności operand. Prawy operand może nie być sprawdzony, jeśli lewy doprowadzi do false.
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// Operator || zwraca pierwszy operand (jeden z warunkow) ktory "zwraca" true. Jesli żaden warunek nie był spełniony, otrzymujemy false - wartość ostatniego operanda. Operand && wyłapuje pierwszą prawdę i zwraca znaczenie - to znaczenie, przy którym to się odbyło lub ostatni w kolejności operand. Prawy operand niekoniecznie musi być sprawdzony, jeśli lewy już był sprawdzony jako true.
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(false || false); // false
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// === Jakie wyrazenie da w rezultacie znaczenie "Mango"? === //
// a. null && false && "Mango"
// b. null || "false" || "Mango"
// c. "false" && "Mango" || null
// d. "Mango" && null || false

// console.log(null && false && "Mango"); // null -> false
// console.log(null || "false" || "Mango"); // string "false" -> true
// console.log(("false" && "Mango") || null); // string "Mango" -> true
// console.log(("Mango" && null) || false); // false

// === 6 nieprawdziwych (false) wartości, które doprowadzają do false w logicznej konwertacji:
//0, NaN, null, undefined, pusty wiersz i false.
//Wszystkie inne wartości doprowadzają do true. === //

// === Po Kahoot === //

//
// Tablice //
// Tablice deklaruje sie za pomoca nawiasow []. To zmienne referencyjne.
const a = [];
const b = a; // a i b wsjazuja na dokladnie to samo miejsce w pamieci.
