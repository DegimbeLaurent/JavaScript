const readline = require("readline-sync");

/* recois 2 corrdonnée et renvoie la distance entre ces 2 points */
function calcDistance(x1,y1,x2,y2){
    return Math.sqrt((calcPoint(x2,x1)+calcPoint(y2,y1)));
}

/*recois deux nombre (x || y) et revoie le carré de la division de ces 2 nombres*/ 
function calcPoint(n1,n2){
    return Math.pow( (n2-n1) ,2);
}
console.log( calcDistance(readline.question("x1 ?"),readline.question("y1 ?"),readline.question("x2 ?"),readline.question("y2 ?")) );