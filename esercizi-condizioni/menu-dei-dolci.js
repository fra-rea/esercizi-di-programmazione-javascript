/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

var index = 0
var menù =["Tiramisù", "Torta della nonna", "Cheescake alla nutella", "Macedonia"]
var choise_q = prompt(`Scegli, inserisci il numero che leggi sul menù: 1. ${menù.at(0)}; 2. ${menù.at(1)}; 3. ${menù.at(2)}; 4. ${menù.at(3)}`)

if (choise_q > 0, choise_q <= 4) {
  console.log(`Hai scelto ${menù.at(choise_q -1)}`)
} else {
  console.log("Dolce non disponibile")
}



