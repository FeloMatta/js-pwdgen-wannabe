//Inizio

//1. chiedi all'utente il suo nome,
const firstName = prompt('Inserisci Qui il tuo nome');
console.log("il nome dell'utente e':", firstName);

//2. poi chiedi il suo cognome,
const lastName = prompt('Inserisci qui il tuo cognome');
console.log("Il cognome dell'utente e':", lastName);

//3. poi chiedi il suo colore preferito
const favColor = prompt('Inserisci qui il tuo colore preferito');
console.log("Il colore preferito dell'utente e':", favColor);

//4. Infine scrivi sulla pagina nomecognomecolorepreferito21
let password = firstName + lastName + favColor + '21';
console.log("la password dell'utente e':", password);

document.getElementById('info').innerHTML = password;
//Fine