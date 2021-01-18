import readlineSync from readlineSync;

var p = "persoone";
var l ="lieu";
var o ="objet";

this.p = readlineSync.question("Personnage ?");
this.l = readlineSync.question("ou ?");
this.o = readlineSync.question("Objet");

console.log("Vous vous appelez "+this.p+" vous arrivez à "+this.l+" et vous trouvez "+this.o + "... >BLING< pas de chance l'objet est cassé ");