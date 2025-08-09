/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = 10;
var b = -2;
var c = 31;
var d = 22;
var e = 15;
var f = -6;
var g = 7;
var Tmax
var Tmin

if (Math.max(a,b,c,d,e,f,g)==a){
  Tmax=a
} else if (Math.max(a,b,c,d,e,f,g)==b) {
  Tmax=b
} else if(Math.max(a,b,c,d,e,f,g)==c){
  Tmax=c
} else if(Math.max(a,b,c,d,e,f,g)==d) {
  Tmax=d
} else if(Math.max(a,b,c,d,e,f,g)==e){
  Tmax=e
} else if(Math.max(a,b,c,d,e,f,g)==f) {
  Tmax=f
} else if (Math.max(a,b,c,d,e,f,g)==g) {
  Tmax=g
}

if (Math.min(a,b,c,d,e,f,g)==a){
  Tmin=a
} else if (Math.min(a,b,c,d,e,f,g)==b) {
  Tmin=b
} else if(Math.min(a,b,c,d,e,f,g)==c){
  Tmin=c
} else if(Math.min(a,b,c,d,e,f,g)==d) {
  Tmin=d
} else if(Math.min(a,b,c,d,e,f,g)==e){
  Tmin=e
} else if(Math.min(a,b,c,d,e,f,g)==f) {
  Tmin=f
} else if (Math.min(a,b,c,d,e,f,g)==g) {
  Tmin=g
}


console.log(`Nella giornata più fredda si è registrata la temperatura di ${Tmin}°C`)
console.log(`Nella giornata più calda si è registrata la temperatura di ${Tmax}°C`)