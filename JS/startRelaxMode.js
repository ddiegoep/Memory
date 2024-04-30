//RelaxMode
const startRelaxMode = () => {

    //relaxMode ON
    relaxMode = true;

    //remove the menu & select level
    if (document.querySelector('.menu')) {
        currentLevel = Number(document.querySelector('input[name="radioLevel"]:checked').value);
        document.querySelector('.menu').remove();
    }

    //check level
    adjustLevel(currentLevel);

    //cards
    dealCards();
    document.querySelectorAll(".card").forEach((oneCard) =>
        oneCard.addEventListener("click", flipCard));

    //levelCounter
    setLevelCounter();

    //timer
    timerAvailable = false;
    currentWidth = 100;
    setTimer();
    document.querySelector('.chrono').style.display = "none";

    //movements
    movements = 1;
    remainingMovements = 1;
    movementsAvailable = false;
    setMovements();
    document.querySelector('#movementsCounter').style.display = "none";

    
};  