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
- Creo una costante che contiene un array di liste email predefinite.
- Chiedo all'utente di inserire la propria email utilizzando un prompt() e salvo in una costante.
- Inizializzo una variabile con il valore false per tenere traccia se l'email inserita dall'utente viene trovata nella array (email predefinite).
- Avvio un ciclo for che itera attraverso l'array
- Verifico che l'email corrente nell'iterazione corrisponde all'email inserita dall'utente
  - Se c'è una corrispondenza, imposto la variabile a true e stampo un messaggio di "benvenuto" nella console
- Se non c'è una corrispondenza stampo un messaggio "mi dispisce, non puoi accedere" nella console
