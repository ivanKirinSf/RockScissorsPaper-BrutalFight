
let winCounter = 0;

let lostCounter = 0;

function game(input){

    let playerTurn = input;

    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    let doubleRock = "Double Rock";
    let doublePaper = "Double Paper";
    let doubleScissors = "Double Scissors";

    if(playerTurn == "r" || playerTurn == "Rock"){
        playerTurn = rock;
    }else if(playerTurn == "p" || playerTurn == "Paper"){
        playerTurn = paper;
    }else if(playerTurn == "s" || playerTurn == "Scissors"){
        playerTurn = scissors;
    }else if(playerTurn == "dr" || playerTurn == "Double Rock"){
        playerTurn = doubleRock;
    }else if(playerTurn == "dp" || playerTurn == "Double Paper"){
        playerTurn = doublePaper;
    }else if(playerTurn == "ds" || playerTurn == "Double Scissors"){
        playerTurn = doubleScissors;
    }

    let compTurn = Math.floor((Math.random() * 6 + 1));

    switch(compTurn){

        case 1: 
        compTurn = rock;
        break;
        case 2:
            compTurn = paper;
            break;
            case 3:
                compTurn = scissors;
                break;
                case 4:
                    compTurn = doubleRock;
                    break;
                    case 5:
                        compTurn = doublePaper;
                        break;
                        case 6:
                            compTurn = doubleScissors;
                        break;


    }

    //console.log(playerTurn)
    //console.log(compTurn)

    if(playerTurn == rock && compTurn == scissors || playerTurn == rock && compTurn == doubleScissors || playerTurn == paper && compTurn == rock ||
        playerTurn == paper && compTurn == doubleRock || playerTurn == scissors && compTurn == paper || playerTurn == scissors && compTurn == doublePaper ||
        playerTurn == doubleRock && compTurn == doubleScissors || playerTurn == doubleRock && compTurn == scissors || playerTurn == doublePaper && compTurn == doubleRock ||
        playerTurn == doublePaper && compTurn == rock || playerTurn == doubleScissors && compTurn == doublePaper ||
        playerTurn == doubleScissors && compTurn == scissors ){

            console.log(`Player chooses ${playerTurn}.`);
            console.log(`Computer chooses ${compTurn}.`);
            console.log("You win!");
            
            winCounter += 1;

            console.log(`wins: ${winCounter} lost: ${lostCounter}`);

            //console.log(`The result is: wins ${winCounter}, lost ${lostCounter}`);

        }else if( playerTurn == scissors && compTurn == rock || playerTurn == scissors && compTurn == doubleRock || playerTurn == rock && compTurn == paper ||
        playerTurn == rock && compTurn == doublePaper || playerTurn == paper && compTurn == scissors || playerTurn == paper && compTurn == doublePaper || playerTurn == doubleRock && compTurn == doublePaper || 
    playerTurn == doubleRock && compTurn == paper || playerTurn == doublePaper && compTurn == doubleScissors ||
    playerTurn == doublePaper && playerTurn == scissors || playerTurn == doubleScissors && compTurn == doubleRock || 
    playerTurn == doubleScissors && compTurn == rock ){


            console.log(`Player chooses ${playerTurn}.`);
            console.log(`Computer chooses ${compTurn}.`);
            console.log("You lost!");
            
            lostCounter += 1;

            console.log(`wins: ${winCounter} lost: ${lostCounter}`);

        }else {

            console.log(`Player chooses ${playerTurn}.`);
            console.log(`Computer chooses ${compTurn}.`);
            console.log("It is a draw!");
            
            //lostCounter += 1;

            console.log(`wins: ${winCounter} lost: ${lostCounter}`);
        }

    //console.log(compTurn)

}

game("r")
