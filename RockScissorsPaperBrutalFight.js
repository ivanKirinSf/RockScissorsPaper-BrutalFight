let playerTurn = "f";

const rock = "Rock";
const scissors = "Scissors";
const paper = "Paper";
const doubleRock = "Double Rock";
const doubleScissors = "Double Scissors";
const doublePaper = "Double Paper";

if(playerTurn === "r" || playerTurn === "Rock"){

    playerTurn = rock;

}else if(playerTurn === "s" || playerTurn === "Scissors"){

    playerTurn = scissors;

}else if(playerTurn === "p" || playerTurn === "Paper"){

    playerTurn = paper;
    
}else if(playerTurn === "dr" || playerTurn === "Double Rock"){

    playerTurn = doubleRock;
    
}else if(playerTurn === "ds" || playerTurn === "Double Scissors"){

    playerTurn = doubleScissors;
    
}else if(playerTurn === "dp" || playerTurn === "Double Paper"){

    playerTurn = doublePaper;
    
}else{

    console.log("You choose invalid weapon!")
}

console.log(playerTurn)
