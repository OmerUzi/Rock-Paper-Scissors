function computerPlay(){
   let x = Math.floor(Math.random() * 3);
   switch(x){
       case 0:
           return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
   }


}   
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection ) return "it's a draw, you both play " + playerSelection;
    else{
        if (playerSelection == "rock" && computerSelection == "paper") return  "You lose! paper beats rock"; 
        else if (playerSelection == "rock" && computerSelection == "scissors") return  "You win! Rock beats scissors";
        else if (playerSelection == "paper" && computerSelection == "rock") return  "You win! Paper beats Rock";
        else if (playerSelection == "paper" && computerSelection == "scissors") return  "You lose! scissors beats paper";
        else if (playerSelection == "scissors" && computerSelection == "paper") return  "You win! scissors beats paper";
        else if (playerSelection == "scissors" && computerSelection == "rock") return  "You lose! Rock beats scissors";
        else return "There is not an option " + playerSelection;
    }
    
}

function game(){
    let playersWin = 0;
    let computerWin = 0;
    let input ;
    for( let i = 0; i<5; i++){
        input = prompt("choose your action");
        announment = playRound(input,computerPlay())
        console.log(announment);
        if (announment.split(4,8) == "lose") computerWin++;
        
        else if (announment.split(4,7) == "win") playersWin++;

    }
    if(playersWin == computerWin) console.log("Its a draw!");
    else if(playersWin > computerWin) console.log("You win!");
    else if(playersWin == computerWin) console.log("You lose!");


}


game();





