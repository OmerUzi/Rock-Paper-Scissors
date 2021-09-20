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
function playRound(event){
    playerSelection = event.target.textContent;
    computerSelection = computerPlay()
    playerSelection = playerSelection.toLowerCase(); 
    if (computerSelection == playerSelection )  h1.textContent = ("it's a draw, you both play " + playerSelection);
    else{
        if (playerSelection == "rock" && computerSelection == "paper")  {
            h1.textContent = ("You lose! paper beats rock"); 
            computerresult++;
        }
        else if (playerSelection == "rock" && computerSelection == "scissors")  {  
            h1.textContent = ("You win! Rock beats scissors");
            playerresult++;
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            h1.textContent = ("You win! Paper beats Rock");
            playerresult++;
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") { 
            h1.textContent = ("You lose! scissors beats paper");
            computerresult++;
        }
        else if (playerSelection == "scissors" && computerSelection == "paper") {  
            h1.textContent = ("You win! scissors beats paper");
            playerresult++;
        }
        else if (playerSelection == "scissors" && computerSelection == "rock"){   
            h1.textContent =("You lose! Rock beats scissors");
            computerresult++;
        }
        else  h1.textContent = ("There is not an option " + playerSelection);
        
        if(playerresult == 5){
            alert("total win!");
            playerresult = 0;
            computerresult = 0;
        }
        if(computerresult == 5){
            alert("total loss!")
            playerresult = 0;
            computerresult = 0;
        }
        playerh3.textContent = "player: " + playerresult;
        computerh3.textContent = "computer: " + computerresult;
        
        }

    }
    
    

let playerresult = 0;
let computerresult = 0;
const buttons = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
const playerh3 = document.querySelector('#player_score');
const computerh3 = document.querySelector('#computer_score');
buttons.forEach(button => {
        button.addEventListener("click", playRound);     
    })


