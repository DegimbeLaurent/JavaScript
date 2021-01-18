const readlineSync = require("readline-sync");

 var    n1 = readlineSync.question("nbr entre 1 et 7 ?");

 switch(n1){
    case "1":
        console.log("lundi")
        break;
    case "2":
        console.log("Mardi")
        break;
    case "3":
        console.log("Mercredi")
        break;
    case "4":
        console.log("Jeudi")
        break;
    case "5":
        console.log("Vendredi")
        break;
    case "6":
        console.log("Samedi")
        break;
    case "7":
        console.log("Dimanche")
        break;
    default:
        console.log("entre 1 et 7, c'est pourtant simple")
 }