async function game() {
  const buttons = document.querySelectorAll('#buttons button');
  const restartBtn = document.querySelector('#restart button');
  restartBtn.style.display = 'none';
  
  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      const playerSelection = event.target.id;
      playRound(playerSelection);
    });
  });

  function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const results = document.querySelector('#results');
  
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection) {
    results.innerHTML = "";
    const computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
      results.innerHTML += "<br>It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissors' && computerSelection === 'paper') {
      results.innerHTML += `<br>You win! ${playerSelection} beats ${computerSelection}`;
      playerScore++;
    } else {
      results.innerHTML += `<br>You lose! ${computerSelection} beats ${playerSelection}`;
      computerScore++;
    }
    
    results.innerHTML += `<br>Your score: ${playerScore} Computer score: ${computerScore}`;
    
    if (playerScore >= 5) {
      results.innerHTML += "<br>Congratulations! You won the game!";
      buttons.forEach(button => button.disabled = true);
      restartBtn.style.display = 'inline-block';
    } else if (computerScore >= 5) {
      results.innerHTML += "<br>Sorry, you lost the game!";
      buttons.forEach(button => button.disabled = true);
      restartBtn.style.display = 'inline-block';
    }
  }

  restartBtn.addEventListener('click', function() {
    playerScore = 0;
    computerScore = 0;
    results.innerHTML = "";
    buttons.forEach(button => button.disabled = false);
    restartBtn.style.display = 'none';
  });
}
  
game();
