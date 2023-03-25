function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }
  
  async function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      let playerSelection = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();

      while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        playerSelection = prompt("Enter your choice (rock, paper, or scissors): ").toLowerCase();
      }
      const computerSelection = computerPlay();
  
      console.log(`Round ${i}:`);
      console.log(`You chose ${playerSelection}`);
      console.log(`Computer chose ${computerSelection}`);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  
    console.log(`Final score: You ${playerScore}, Computer ${computerScore}`);
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > playerScore) {
      console.log("You lose the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  game();