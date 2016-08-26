import {Direction} from "../commons/direction";
import {DirectionUtils} from "../commons/directionUtils.ts";
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
        this.facing_direction = DirectionUtils.turnRight(this.facing_direction);
    }

    turnLeft(){
        this.facing_direction = DirectionUtils.turnLeft(this.facing_direction);
    }

    takeSugar(sugar : Sugar){

    }
}
