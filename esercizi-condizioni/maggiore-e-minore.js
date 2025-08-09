/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

var a = -3
var b = -1
var c = 4
var d = -2
var max = Math.max(a,b,c,d)
var min = 0

console.log(min)

if (Math.min(a,b,c,d) == a) {
  min=a
} 
else if (Math.min(a,b,c,d) == b) {
  min=b
} 
else if (Math.min(a,b,c,d) == c) {
  min=c
} 
else if (Math.min(a,b,c,d) == d) {
  min=d
}

console.log(`Il numero minore è ${min}!!!`)

if ( max == a) {
  max=a
} 
else if(max == b) {
  max=b
} 
else if (max == c) {
  max=c
} 
else max=d

console.log(`Il numero maggiore è ${max}!!!!!`)
