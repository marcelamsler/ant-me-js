export class Position{

    x: number;
    y: number;

    constructor(){
        this.x = 0;
        this.y = 0;
    }

    setX(x : number){
        this.x = x;
    }

    setY(y : number){
        this.y = y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

}
