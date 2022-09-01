// una funzione per cancellare tutto
function clearScreen() {
document.getElementById("result").value = "";
}
// una funzione per vedere il risultato
function display(value) {
document.getElementById("result").value += value;
}
// una funzione matematica per calcolare le operazioni
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}