const readline = require("readline-sync");
function rand10(a){
    return Math.floor(Math.random() * a) + 1;  
}
function multiRand(n){
    var rand = readline.question("nombre random entre 1 et ? ");
    let arr = new Array(n);
    for (let index = 0; index < n; index++) {
       arr.push(rand10(rand)); 
    }
    console.log(arr)
}
    
multiRand(readline.question("Tableau de combien de chiffre ? "));