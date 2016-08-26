import {Direction} from "../commons/direction";
import {Position} from "../commons/position";
import {Nest} from "../game-objects/nest";
import {Sugar} from "./sugar";

export class Ant {

    nest: Nest;

    position: Position;

    facing_direction: Direction;

    constructor(){
        this.position = new Position;
        this.facing_direction = Direction.north;
    }

    turnRight() {

    }

    turnLeft(){
        if(this.facing_direction == Direction.north){
            this.facing_direction = Direction.west;
            return;
        }
        if(this.facing_direction == Direction.west){
            this.facing_direction = Direction.south;
            return;
        }
    }

    takeSugar(sugar : Sugar){

    }
}
