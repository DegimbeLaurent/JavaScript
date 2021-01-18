const readline = require("readline-sync");

function calcSurfaceU(){
    var n1 = readline.question("longeur?");
    var n2 = readline.question("largeur?");
    console.log(calcSurface(n1,n2));
}

/*Multiplie 2 nombre en eux*/ 
function calcSurface(a,b){
    return a*b;
}
calcSurfaceU();