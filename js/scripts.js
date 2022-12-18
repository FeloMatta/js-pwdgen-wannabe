const name = prompt('Inserisci Qui il tuo nome');
console.log("il nome dell'utente e':", name);

const surName = prompt('Inserisci qui il tuo cognome');
console.log("Il cognome dell'utente e':", surName);

const favColor = prompt('Inserisci qui il tuo colore preferito');
console.log("Il colore preferito dell'utente e':", favColor);

document.getElementById('info').innerHTML = name + ' ' + surName + ' ' + favColor + ' ' + '21';