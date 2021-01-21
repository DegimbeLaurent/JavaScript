class Circle{
    #xPos;
    #yPos;
    #radius;

    constructor(x,y,rad){
        this.#xPos = x;
        this.#yPos = y;
        this.#radius = rad;
    }

    move(xOffset,yOpffset){
        this.#xPos = xOffset;
        this.#yPos = yOpffset;
    }

    get surface(){
        return Math.PI*Math.pow(this.#radius,2);
    }
}

var cer1 = new Circle(2,3,5);

console.log(cer1.surface);