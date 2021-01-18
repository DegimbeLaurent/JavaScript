const readlineSync = require("readline-sync");

var nam = "Degimbe";
var firstName ="Laurent";
var city="namur";

this.nam = readlineSync.question("Quel est ton nom");
this.firstName = readlineSync.question("Quel est ton prenom");
this.city = readlineSync.question("Quel est ta ville");

console.log("Vous vous appelez "+nam+" "+firstName+" et vous habitez à "+city);