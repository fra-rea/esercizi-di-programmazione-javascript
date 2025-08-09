/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/


var ts=52897
var th=0;
var tm=0;
var h_other // porzioni di ora avanzate in secondi
var m_other // porzioni di minuti avanzati in secondi

th = Math.floor(ts/3600)

h_other = ts-th*3600
tm = Math.floor(h_other/60)
m_other = h_other-tm*60
ts = m_other

console.log(th)
console.log(tm)
console.log(ts)