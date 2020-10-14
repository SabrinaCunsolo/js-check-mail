// Esercitazione 1: Check lista email
// Creare un array con un insieme di indirizzi email.
// Chiedere all'utente il suo indirizzo email e verificare se è nella lista (tramite un ciclo for).
// Comunicare quindi un messaggio appropriato (sei in lista/non sei in lista)


// creo array con lista email
var lista_email = ["sabrina@gmail.com", "sara@gmail.com","mario@gmail.com", "luca@gmail.com", "carla@gmail.com"]

console.log(lista_email)

// chiedo utente proprio indirizzo email
var email = prompt('Qual è il tuo indirizzo email?');

// verifico se email è in lista array
for (var i = 0; i < lista_email; i++) {
    console.log(lista_email [i]);
}

if (email === lista_email) {
    alert ("Sei in lista!")
} else { (email !== lista_email)
    alert ("Non sei in lista!")
}
// comunico utente che in lista
// comunico utente che non in lista
