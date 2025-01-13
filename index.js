
function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) { 
       const humanSelection = getHumanChoice()
	   const computerSelection = getComputerChoice()
	   console.log(playRound(humanSelection, computerSelection))
	   if (checkWinner(humanSelection, computerSelection) == "player") {
		 humanScore++
	   } else if (checkWinner(humanSelection, computerSelection) == "cpu") {
		  computerScore++
	   } else {}
	   console.log(`score: you: ${humanScore} cpu: ${computerScore}`)
	   }
	    if (humanScore > computerScore) {
			console.log("you won the game")
	   } else if (humanScore < computerScore) {
		console.log("cpu won the game")
	   } else {
		console.log("draw! play again")
	   }
	}


function playRound(humanSelection, computerSelection) {
	const result = checkWinner(humanSelection, computerSelection);
	if (result == "draw") {
		return "draw";
	} else if (result == "player") {
		return "you won this round";
	} else {
		return "cpu won this round";
	}
}		 

function getComputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3)
	 if (computerChoice === 0) {
	 console.log("cpu: rock")	
	 return "rock"
	} else if (computerChoice === 1) {
     console.log("cpu: paper")
	 return "paper"
	} else if (computerChoice === 2) {
		console.log("cpu: scissors")
        return "scissors"
	}
} 

function getHumanChoice() {
	let humanChoice = prompt("rock paper scissors")
	while (humanChoice == null) {
		humanChoice = prompt("rock paper scissors")
	}
	if (humanChoice.toLowerCase() === "rock") {
          console.log("you:rock")
          return "rock"
      } else if (humanChoice.toLowerCase() === "paper") {
	  console.log("you:paper")
          return "paper"
      } else if (humanChoice.toLowerCase() === "scissors" || humanChoice.toLowerCase() === "scissor") {
	 console.log("you:scissors")
         return "scissors"
      }
}

function checkWinner(humanSelection, computerSelection) {
	if (humanSelection === computerSelection) {
		return "draw"
	} else if (
		(humanSelection === "rock" && computerSelection === "paper") ||
		(humanSelection === "paper" && computerSelection === "scissors") ||
		(humanSelection === "scissors" && computerSelection === "rock")
	){
		return "cpu";
	} else {
		return "player"
	}
	}		  
	 

playGame()
// playRound(humanChoice, computerChoice)