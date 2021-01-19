function average(a){
    var moy = 0;
    a.forEach(element => {
        moy = moy + element;   
    });
    moy = moy/a.length;
    return moy;
}
function min(a){
    return Math.min.apply(null,a);
}
function max(a){
    return Math.max.apply(null,a);
}

const readline = require("readline-sync");
function rand10(a){
    return Math.floor(Math.random() * a) + 1;  
}
function multiRand(n,m){
    let arr = new Array();
    for (let index = 0; index < n; index++) {
       arr.push(rand10(m)); 
    }
    return arr;
}

function appDés(){
   let arr =  multiRand(readline.question("Tableau de combien de chiffre ? "),readline.question("nombre random entre 1 et ? "));
   console.log(arr);
   console.log("Moyenne : "+average(arr)+" min : "+min(arr)+" max : " +max(arr));
}


appDés();
