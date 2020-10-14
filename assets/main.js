// Esercitazione 1: Check lista email
// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)


// creo array con lista email
var lista_email = ["sabrina@gmail.com", "sara@gmail.com","mario@gmail.com", "luca@gmail.com", "carla@gmail.com"]

console.log(lista_email)
var isEmailFound = false;

// chiedo utente proprio indirizzo email
var email = prompt('Qual è il tuo indirizzo email?');

// serve una variabile che si ricordi se la mail è stata trovata

// verifico se email è in lista array
for (var i = 0; i < lista_email.length; i++) {
    if (email == lista_email[i]) {
        isEmailFound = true;
    }
    //console.log(lista_email[i]);

    // qui devo verificare se la mail che ho inserito è quella che sto esaminando nel ciclo for
}

// se l'ho trovata lo dico, altrimenti dico il contrario
if (isEmailFound == true) {
    alert ("Sei in lista!");
} else {
    alert ("Non sei in lista!");
}
// comunico utente che in lista
// comunico utente che non in lista
