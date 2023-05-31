
// Recupero gli elementi da DOM
const emailInput = document.getElementById("emailInput");
const verifyButton = document.getElementById("verifyButton");
const resultMessage = document.getElementById("resultMessage");

// Creo una costante che contiene un array di liste email predefinite.
const emailList = ["christian@example.com", "carlo@example.com", "marco@example.com"];


// Creo l'evento Listener click al bottone
verifyButton.addEventListener("click", function() {
  // Ottengo il valore dell'email inserita dall'utente
  const emailValue = emailInput.value.trim();

// Inizializzo una variabile con il valore false
let emailPresent = false;

// Avvio ciclo for che Itera attraverso l'array
for (let i = 0; i < emailList.length; i++) {

// Verifico se l'email inserita dall'utente corrisponde a una delle email nella lista
  if (emailList[i] === emailValue) {

    // Se c'è una corrispondenza, imposto la variabile  a true
    emailPresent = true;

    // Stampo un messaggio di benvenuto in pagina
    resultMessage.innerText = "Benvenuto";
    
  }
}

// Se l'email inserita dall'utente non corrisponde a nessuna email nella lista
if (!emailPresent) {
    // Stampo un messaggio di accesso negato in pagina
    resultMessage.innerText = "Mi dispiace, non puoi accedere";
}

});


