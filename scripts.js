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

let victory = "You win the round!"
let draw = "You draw the round!"
let loss = "You lost the round!"

let roundNumber = 0

playerChoice = 0

const scoreText = document.querySelector('#score')



document.addEventListener('click', function (e) {
    const click = document.querySelector(`div.rps[id = "${e.target.id}"]`)
    playerChoice = click.id.toString();
    if ((playerScore==5) || (computerScore==5)) {
        return}
    else {
   
    round();
    }
    
       });




function round() {
    
    if (playerChoice==0) {return};
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

        const scoreText = document.querySelector('#score')
        const roundText = document.querySelector('#roundtext')

       /* if ((playerScore==5) || (computerScore==5)) {if (playerScore > computerScore) {scoreText.textContent = "You win!"}
        else if (computerScore > playerScore) {scoreText.textContent = "You lose!"}
        else {scoreText.textContent = "Draw!"}
         
     } else { */
        scoreText.textContent = roundType 
        roundText.textContent = "Player: " + playerScore + " | Computer: " + computerScore

        if ((playerScore==5) || (computerScore==5)) {
            const finalscore = document.querySelector('#finalscore');
            if (playerScore > computerScore) {finalscore.textContent = "You win the game!"}
            else if (computerScore > playerScore) {finalscore.textContent = "You lose the game!"}
            else {finalscore.textContent = "The game is a draw!" }}

    roundNumber++;
}



/*function game() {
    for (let i = 0; i < 5; i++) {
        round(); 
        

    }

} 

game();*/




