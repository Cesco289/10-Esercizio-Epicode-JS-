// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio 'OK'
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio 'OK'
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo 'OK'
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio 'OK'
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!) 'OK'

//ESERCIZI IN JS

// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

/*
const element = document.getElementById('myH1')
element.textContent = 'Sito di E-Commerce 2.0'
*/

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

/*
const element = document.getElementById('bodyNew')
element.bgColor = 'Yellow'
*/

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

/*
const element = document.getElementById('indirizzo')
element.textContent = 'Negozio Online - Piazza Risorgimento ; 5'
*/

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

/*
const element = document.querySelectorAll('linkAmazon')
element.style.color = 'red'
*/

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

/*
const oldElement = document.querySelectorAll('immagini');
oldElement.remove();
*/

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

/*
const element = document.querySelectorAll('newH3');
element.style.color = ('red')
*/