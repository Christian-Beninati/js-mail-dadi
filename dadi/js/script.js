
// Recuperare l'elemento del DOM
const playButtonInput = document.getElementById("playButton");
const scoresElement = document.getElementById("scores");
const resultElement = document.getElementById("result");

// Aggiungere dell'event listener al click del bottone
playButtonInput.addEventListener("click", function() {

// Creare una costante con un numero massimo
const max = 6

// Generare un numero casuale da 1 a 6 per il giocatore
const userPlayer = Math.floor(Math.random() * max) + 1;

// Generare un numero casuale da 1 a 6 per il computer
const cpuPlayer = Math.floor(Math.random() * max) + 1;


// Verificare il vincitore e 
let result = "È un pareggio!";

if (userPlayer > cpuPlayer) {
  result = "Il giocatore vince!";

} else if (cpuPlayer > userPlayer) {
  result = "Il computer vince!";
} 

// / Inserire il risultato negli elementi del DOM presi in precedenza 
scoresElement.innerText = `Punteggio giocatore: ${userPlayer}\nPunteggio computer: ${cpuPlayer}`;
resultElement.innerText = result;

});