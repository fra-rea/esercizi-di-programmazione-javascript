/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var Birth_y=1982
var today_y=2025
var age = today_y-Birth_y
var hundred_y=Birth_y+100
var ETA_y=hundred_y-today_y

console.log(age)
console.log(ETA_y)
