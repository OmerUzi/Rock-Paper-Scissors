function computerPlay(){
   let x = Math.floor(Math.random() * 3);
   switch(x){
       case 0:
           return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissor";
   }


}   
function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection ) return "it's a draw, you both play " + playerSelection;
    else{
        if (playerSelection == "rock" && computerSelection == "paper") return  "You lose! paper beats rock"; 
        else if (playerSelection == "rock" && computerSelection == "scissor") return  "You win! Rock beats Scissor";
        else if (playerSelection == "paper" && computerSelection == "rock") return  "You win! Paper beats Rock";
        else if (playerSelection == "paper" && computerSelection == "scissor") return  "You lose! scissor beats paper";
        else if (playerSelection == "scissor" && computerSelection == "paper") return  "You win! scissor beats paper";
        else if (playerSelection == "scissor" && computerSelection == "rock") return  "You lose! Rock beats scissor";
        else return "There is not an option " + playerSelection;
    }
    
}
const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));