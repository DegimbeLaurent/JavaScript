const readlineSync = require("readline-sync");

var n1 = readlineSync.question("Donnez un nombre décimal");
var n2 = readlineSync.question("Donnez un deuxieme nombre décimal");

console.log( Math.round(parseInt(n1,10))*parseInt(n2,10));