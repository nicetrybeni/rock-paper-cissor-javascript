function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      console.log("Draw");
    }else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("You Win!");
    }else if (playerSelection === "rock" && computerSelection === "paper"){
      console.log("You Lose!");
    }else if (playerSelection === "paper" && computerSelection === "rock"){
      console.log("You Win!");
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
      console.log("You Lose!");
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
      console.log("You Win!");
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
      console.log("You Lose!");
    }
  }
 function getComputerChoice() {
    // Implement your logic to get the computer's choice (rock, paper, or scissors)
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  const playerSelection = "rock"; 
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
