// Simple method which just runs in circle

function onSugar(sugar){
    console.log("Seen sugar", sugar);

    turnRight();

    takeSugar(sugar);

    walkToNest();
}

function onNest(nest){
    console.log("Nest reached", nest);

    if(Math.random() < 0.5){
        turnLeft();
    }else{
        turnRight();
    }
}



