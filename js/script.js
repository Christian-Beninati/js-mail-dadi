
// Creo una costante che contiene un array di liste email predefinite.
const emailList = ["christian@example.com", "carlo@example.com", "marco@example.com"];

// Chiedo all'utente di inserire la propria email
const emailInput = prompt("Inserisci la tua email:").trim();

// Inizializzo una variabile con il valore false
let emailPresent = false;

// Avvio ciclo for che Itera attraverso l'array
for (let i = 0; i < emailList.length; i++) {

// Verifico se l'email inserita dall'utente corrisponde a una delle email nella lista
  if (emailList[i] === emailInput) {

    // Se c'è una corrispondenza, imposto la variabile  a true
    emailPresent = true;

    // Stampo un messaggio di benvenuto nella console
    console.log("Benvenuto");
    
  }
}

// Se l'email inserita dall'utente non corrisponde a nessuna email nella lista
if (!emailPresent) {
    // Stampo un messaggio di accesso negato nella console
  console.log("Mi dispiace, Non puoi accedere");
}




