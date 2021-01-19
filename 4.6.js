const readline = require("readline-sync");
function factorial(n){
    let nbr = 1;
    if (n == 0 || n == 1){
      return nbr;
    }else{

      for(var i = n; i >= 1; i--){
        nbr = nbr * i;
      }
      return nbr;
    }  
}
console.log(factorial(readline.question("Quelle nombre a factoriser")))

