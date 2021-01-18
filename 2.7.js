const readlineSync = require("readline-sync");
var n1 = readlineSync.question("nbr fois ?");
var n2 = new Number(0);
while(n1 != 0){
     n2 = n2 + new Number(readlineSync.question("nbr ?"));
     n1--;
}
console.log(n2);