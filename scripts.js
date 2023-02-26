let computerChoice = 0

function getComputerChoice() {
    
    if (computerChoice == 0) {
         computerChoice = "Rock"
    }

    else if (computerChoice == 1) {
         computerChoice = "Paper"
    }

    else { 
         computerChoice = "Scissors"
     }
}



// let playerChoice = prompt("Choose Rock, Paper or Scissors");
// playerChoice = playerChoice.toLowerCase(); 

let roundStatus = 1
let roundType = 1

let computerScore = 0
let playerScore = 0

let victory = "You win!"
let draw = "You draw!"
let loss = "You lost!"

let roundNumber = 0

function getPlayerChoice() {playerChoice = prompt("Choose Rock, Paper or Scissors");
playerChoice = playerChoice.toLowerCase()
}

function round() {
    
    getPlayerChoice();
    computerChoice = Math.floor(Math.random() * 3)
    getComputerChoice();

if (!(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")) { alert("Incorrect input!"); return}

   

    if ((playerChoice === "rock" && computerChoice === "Scissors") ||(playerChoice === "scissors" && computerChoice === "Paper") ||(playerChoice === "paper" && computerChoice === "Rock") ) { 
         roundStatus = victory
    }

    else if ((playerChoice === "rock" && computerChoice === "Rock") ||(playerChoice === "scissors" && computerChoice === "Scissors") ||(playerChoice === "paper" && computerChoice === "Paper") ) {
        
         roundStatus = draw
    }

    else {
 roundStatus = loss}
    
    if ((playerChoice === "rock" && computerChoice === "Scissors") || (playerChoice === "scissors" && computerChoice === "Rock") ) {
        roundType = (roundStatus + " Rock beats scissors!")
    }

    else if ((playerChoice === "paper" && computerChoice === "Rock") || (playerChoice === "rock" && computerChoice === "Paper")) {
        roundType = (roundStatus + " Paper beats rock!")
    }

    else if ((playerChoice === "scissors" && computerChoice === "Paper") || (playerChoice === "paper" && computerChoice === "Scissors")) {console.log(roundStatus + " Scissors beats paper!")}

    else {roundType = (roundStatus)}

    if (roundStatus === victory) {playerScore++}
        else if (roundStatus === loss) {computerScore++}
        else {}
        console.log(roundType + " Score - Player: " + playerScore + " | Computer: " + computerScore)

    roundNumber++;
}



function game() {
    for (let i = 0; i < 5; i++) {
        round(); 
        

    }

}

game();





