const readline = require("readline-sync");

let serieTv = {

    constructor(arrInfo){
            this.Name = arrInfo[0];
            this.ProductionYear = arrInfo[1];
            this.Caster = arrInfo[2];
        },

    Name : String,
    ProductionYear : String,
    Caster : []
}

function askTvSerie(){
    let arr = [];
    let serie;
    let caster = [];
    console.log("--------------Serie TV----------------");
    console.log("--------------Ajout info----------------");
    arr.push(readline.question(" Nom de la serie a ajouter ?"));
    arr.push(readline.question(" Année de production de la serie a ajouter ?"));
    let nbr = readline.question(" nombre d'acteur ?");
    for (let index = 0; index < nbr; index++) {
        caster.push(readline.question(" Acteur de la serie a ajouter ?"))
    }
    arr.push(caster);
    console.log(arr)
    serie = serieTv.constructor(arr);
    console.log("--------------Presentation Json----------------");
    return serie;
}

console.log(askTvSerie());