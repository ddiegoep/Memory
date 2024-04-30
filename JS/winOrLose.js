//LOSE
const lostOnTime = () => {
    document.querySelector('#wrongGuessSound').play();
    const remainingCards = document.querySelectorAll('.card');
    remainingCards.forEach((remainingCard) => remainingCard.remove());
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "<div class = 'lost'><h1>Oops!</h1><p>You ran out of time</p><button class='retryButton'>Retry</button><button class='restartButton'>Restart</button></div>";
    const board = document.querySelector('#board');
    board.appendChild(newDiv);
    document.querySelector('#levelCounter').remove();
    document.querySelector('#movementsCounter').remove();
    document.querySelector('.chrono').remove();
    timerAvailable = false;
    const retryButton = document.querySelector(".retryButton");
    retryButton.addEventListener("click", retry);
    const restartButton = document.querySelector('.restartButton');
    restartButton.addEventListener("click", restart);
};

const lostOnMovements = () => {
    document.querySelector('#wrongGuessSound').play();
    const remainingCards = document.querySelectorAll('.card');
    remainingCards.forEach((remainingCard) => remainingCard.remove());
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "<div class = 'lost'><h1>Oops!</h1><p>You ran out of movements</p><button class='retryButton'>Retry</button><button class='restartButton'>Restart</button></div>";
    const board = document.querySelector('#board');
    board.appendChild(newDiv);
    document.querySelector('#levelCounter').remove();
    document.querySelector('.chrono').remove();
    timerAvailable = false;
    const retryButton = document.querySelector(".retryButton");
    retryButton.addEventListener("click", retry);
    const restartButton = document.querySelector('.restartButton');
    restartButton.addEventListener("click", restart);
};

const retry = () => {
    const lostMessage = document.querySelector(".lost");
    lostMessage.remove();
    startGame();
};

//COMPLETE LEVEL
const win = () => {
    document.querySelector('#rightGuessSound').play();
    if (currentLevel < 3) {
        const remainingCards = document.querySelectorAll('.card');
        remainingCards.forEach((remainingCard) => remainingCard.remove());
        var newDiv = document.createElement('div');
        newDiv.innerHTML = "<div class = 'win'><h1>Congratulations!</h1><p>You won</p><button class='nextLevelButton'>Next Level</button><button class='restartButton'>Restart</button></div>";
        const board = document.querySelector('#board');
        board.appendChild(newDiv);
        document.querySelector('#levelCounter').remove();
        document.querySelector('.chrono').remove();
        timerAvailable = false;
        const nextLevelButton = document.querySelector('.nextLevelButton');
        nextLevelButton.addEventListener("click", nextLevel);
        const restartButton = document.querySelector('.restartButton');
        restartButton.addEventListener("click", restart);
    }
    else {
        winTheGame();
    }
};

//COMPLETEGAME
const winTheGame = () => {
    document.querySelector('#rightGuessSound').play();
    const remainingCards = document.querySelectorAll('.card');
    remainingCards.forEach((remainingCard) => remainingCard.remove());
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "<div class = 'win'><h1>Congratulations!</h1><p>You completed the game!</p><button class='restartButton'>Restart</button></div>";
    const board = document.querySelector('#board');
    board.appendChild(newDiv);
    document.querySelector('#levelCounter').remove();
    document.querySelector('.chrono').remove();
    timerAvailable = false;
    const restartButton = document.querySelector('.restartButton');
    restartButton.addEventListener("click", restart);
};