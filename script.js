// Palindromo


/*----------------------------------------------------------*/

// Pari e Dispari

const button = document.getElementById('btn');

btn.addEventListener("click", function(){

  // Scelte Giocatore
  let pariDispari = prompt("Scegli pari o dispari").toLowerCase();
  let numGiocatore = parseInt(prompt("Inserisci un numero tra 1 e 5"));

  while (isNaN(numGiocatore) || numGiocatore < 1 || numGiocatore > 5) {
    numGiocatore = parseInt(prompt("Inserisci un numero valido tra 1 e 5"));
  }

  // Numero random Computer
  function randomNum() {
    return Math.floor(Math.random() * 5) + 1;
  }

  let numComputer = randomNum();

  // Somma
  let somma = numGiocatore + numComputer;

  // Stampa scelte
  document.getElementById('scelte').innerHTML = `
  Hai scelto di giocare ${pariDispari}
  <br>
  Il tuo numero: ${numGiocatore}
  <br>
  Numero del computer: ${numComputer}
  <br>
  La somma è: ${somma}`

  // Controllo vincita
  if (isPari(somma)) {
    if (pariDispari === "pari") {
      document.getElementById('output').innerHTML = "Complimenti, hai vinto!";
    } else {
      document.getElementById('output').innerHTML = "Mi dispiace, hai perso.";
    }
  } else {
    if (pariDispari === "dispari") {
      document.getElementById('output').innerHTML = "Complimenti, hai vinto!";
    } else {
      document.getElementById('output').innerHTML = "Mi dispiace, hai perso.";
    }
  }
})

// Function
function isPari(number) {
  return number % 2 === 0;
}