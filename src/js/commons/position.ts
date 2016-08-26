export class Position{

    x: number;
    y: number;

    constructor(){
        this.x = 0;
        this.y = 0;
    }

    constructor(public x, public y){
        this.x = x;
        this.y = y;
    }

}
