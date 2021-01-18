const readlineSync = require("readline-sync");

var n1 = readlineSync.question("min ?");
var n2 = readlineSync.question("max ?");
var n3 = readlineSync.question("current ?");

if(this.n1 < this.n2){
    if(this.n3 <= this.n2 && this.n3 >= this.n1){
        console.log("true");
    }else{
        console.log("false");
    }
}else{
    console.log("ta rien compris");
}