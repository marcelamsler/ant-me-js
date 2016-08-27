import {Canvas} from './game-objects/canvas';

export class GameRunner {

    startGame() {
        console.log("Game Started");
        new Canvas();
    }


}