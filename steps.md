# Project Outline

Mail

- Inventiamo una lista di email a nostro piacimento
- Chiediamo all'utente una mail (con un prompt)
- controlliamo che la mail inserita sia presente nella lista
- se è presente, gli diamo il benvenuto. (in console)
- altrimenti gli diciamo che non può accedere (in console)

<br>
<br>

- Inizio del programma:
- Recupero gli elementi dal DOM
- Creo una costante che contiene un array di liste email predefinite.
- Creo un Event Listener "click" al bottone
- Ottengo il valore dell'email inserita dall'utente
- Inizializzo una variabile con il valore false per tenere traccia se l'email inserita dall'utente viene trovata nella array (email predefinite).
- Avvio un ciclo for che itera attraverso l'array
- Verifico che l'email corrente nell'iterazione corrisponde all'email inserita dall'utente
  - Se c'è una corrispondenza, imposto la variabile a true e stampo un messaggio di "benvenuto" in pagina
- Se non c'è una corrispondenza stampo un messaggio "mi dispisce, non puoi accedere" in pagina
