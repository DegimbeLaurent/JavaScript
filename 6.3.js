const readline = require("readline-sync");

class Rectangle {
    #topLeftXPos;
    #topLeftYPos;
    #width;
    #length;
    #id;

    constructor(a, b, c, d, e) {
        this.#topLeftXPos = a;
        this.#topLeftYPos = b;
        this.#width = c;
        this.#length = d;
        this.#id = e;
    }

    set leftx(newX) {
        this.#topLeftXPos = newX;
    }

    set lefty(newY) {
        this.#topLeftYPos = newY;
    }

    set largeur(newLargeur) {
        this.#width = newLargeur;
    }

    set hauteur(newHauteur) {
        this.#length = newHauteur;
    }

    get leftX() {
        return this.#topLeftXPos;
    }

    get leftY() {
        return this.#topLeftYPos;
    }

    get width() {
        return this.#width;
    }

    get length() {
        return this.#length;
    }

    get id (){
        return this.#id;
    }

    collides(otherRectangle) {
        if (this.#topLeftXPos < otherRectangle.leftX + otherRectangle.width &&
            this.#topLeftXPos + this.#width > otherRectangle.leftX &&
            this.#topLeftYPos < otherRectangle.leftY + otherRectangle.length &&
            this.#length + this.#topLeftYPos > otherRectangle.leftY) {
            return true
        }
        return false
    }
}

function rand(n){
    return Math.floor(Math.random() * n) + 1;  
}

function GenerRectangle(n){
    return new Rectangle(rand(700),rand(700),rand(100),rand(100),n);
}

function GenerTabRatangle(n){
    var tempTab = [];
    for (let index = 0; index < n; index++) {
        tempTab.push(GenerRectangle(index));
    }
    return tempTab;
}

function CompareRect(tableau){
    var info = "colliding rectangles are : \n";
    var infotemp = ""
    tableau.forEach(rectangle1 => {
        tableau.forEach(rectangle2 => {
            if(rectangle1.id != rectangle2.id){
                if(rectangle1.collides(rectangle2)){
                    infotemp+=("-*-rect " + rectangle1.id +" and rect "+rectangle2.id+"-*-\n");
                }
            }

        });
        tableau.splice(tableau.indexOf(rectangle1),tableau.indexOf(rectangle1));
    });
    info = info + infotemp;
    return info;
}


function ProgrammeRect1000(){
    console.log(" --------------Launch program------------");
    var tableau = GenerTabRatangle( readline.question("How many rectangle do you want to compare"));
    console.log(CompareRect(tableau));
}

ProgrammeRect1000();
