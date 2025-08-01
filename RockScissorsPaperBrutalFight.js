let playerTurn = "s";

let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

if( playerTurn == "r" || playerTurn == "Rock"){
    playerTurn = rock;
}else if( playerTurn == "p" || playerTurn == "Paper" ){
    playerTurn = paper;
}else if( playerTurn == "s" || playerTurn == "Scissors"){
    playerTurn = scissors;
}else{
    console.log("Invalid input! Try again later...")
}

let computerNum = Math.floor(Math.random() * 3) + 1;

switch(computerNum){

    case 1:
        computerMove = rock;
        break;
        case 2:
            computerMove = paper;
        break;
        case 3:
            computerMove = scissors;
        break;
}

console.log(`The computer chooses ${computerMove}`);

if(playerTurn === rock && computerMove === scissors || playerTurn === paper && computerMove === rock || 
   playerTurn === scissors && computerMove === paper){

    console.log(`You win!`);

   }else if(playerTurn === rock && computerMove === paper || playerTurn === paper && computerMove === scissors || 
   playerTurn === scissors && computerMove === rock){

    console.log(`You lose!`);

   }else{

    console.log(`This game was a draw!`);

   }






//console.log(computerMove)
