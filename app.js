function game() {
  let pScore = 0;
  let cScore = 0;

  //todo shich the scenes for play the game
  function startGame() {
    const playBtn = document.querySelector(".play");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeout");
      match.classList.add("fadein");
    });
  }

  //todo start the match
  function playMatch() {
    const options = document.querySelectorAll(".options button");
    const pHand = document.querySelector(".player-hand");
    const cHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // computer options
    const cOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // computer choise
        const cNumber = Math.floor(Math.random() * 3);
        const cChoise = cOptions[cNumber];

        setTimeout(() => {
          // call compare hands
          compareHands(this.textContent, cChoise);

          // update images
          pHand.src = `./images/${this.textContent}.png`;
          cHand.src = `./images/${cChoise}.png`;
        }, 2000);

        setTimeout(() => {
          // update images
          pHand.src = `./images/rock.png`;
          cHand.src = `./images/rock.png`;
        }, 2800);

        // animation
        pHand.style.animation = "shakePLayer 2s ease";
        cHand.style.animation = "shakeComputer 2s ease";
      });
    });
  }
  //todo update score
  function updateScore() {
    const text = document.querySelector(".winner");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (pScore === 10) {
      pScore = 0;
      cScore = 0;
      text.textContent = "Congratulations! You win the game";
      text.style.color = "green";
    } else if (cScore === 10) {
      pScore = 0;
      cScore = 0;
      text.textContent = "Unlucky! You lose the game";
      text.style.color = "red";
    }
  }
  //todo compare the hands
  function compareHands(pChoise, cChoise) {
    // update text
    const winner = document.querySelector(".winner");
    // check for tie
    if (pChoise === cChoise) {
      winner.textContent = "It is a tie";
      winner.style.color = "yellow";
      return;
    }
    // check for rock
    if (pChoise === "rock") {
      if (cChoise === "scissors") {
        winner.textContent = "You win";
        winner.style.color = "green";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You lose";
        winner.style.color = "red";
        cScore++;
        updateScore();
        return;
      }
    }
    // check for paper
    if (pChoise === "paper") {
      if (cChoise === "rock") {
        winner.textContent = "You win";
        winner.style.color = "green";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You lose";
        winner.style.color = "red";
        cScore++;
        updateScore();
        return;
      }
    }
    // check for scissors
    if (pChoise === "scissors") {
      if (cChoise === "paper") {
        winner.textContent = "You win";
        winner.style.color = "green";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You lose";
        winner.style.color = "red";
        cScore++;
        updateScore();
        return;
      }
    }
  }

  //todo call all functions
  startGame();
  playMatch();
}
game();
