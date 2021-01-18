import readlineSync from readlineSync;

var n1 = readlineSync.question("Pointure de chausur ?");
var n2 = readlineSync.question("Année de naissance ?");

console.log(((((n1*2)+5)*50)-n2)+1766);