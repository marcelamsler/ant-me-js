import {Direction} from "../commons/direction.ts";

export class DirectionUtils{

    static turnRight(direction : Direction){

        if(direction == Direction.west){
            return Direction.north;
        }
        return direction + 1;

    }

    static turnLeft(direction : Direction){

        if(direction == Direction.north){
            return Direction.west;
        }
        return direction - 1;

    }



}
