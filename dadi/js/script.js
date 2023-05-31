
// Creare una costante con un numero massimo
const max = 6

// Generare un numero casuale da 1 a 6 per il giocatore
const userPlayer = Math.floor(Math.random() * max) + 1;

// Generare un numero casuale da 1 a 6 per il computer
const cpuPlayer = Math.floor(Math.random() * max) + 1;

// Stampare i punteggi in console
console.log("Punteggio giocatore: " + userPlayer);
console.log("Punteggio computer: " + cpuPlayer);

// Verificare il vincitore e stampare in console
if (userPlayer > cpuPlayer) {
  console.log("Il giocatore vince!");

} else if (cpuPlayer > userPlayer) {
  console.log("Il computer vince!");

} else {
  console.log("È un pareggio!");
}