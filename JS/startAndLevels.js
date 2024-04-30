
//start the game
const startGame = () => {
    
    //remove the menu & select level
    if (document.querySelector('.menu')){
        currentLevel = Number(document.querySelector('input[name="radioLevel"]:checked').value);
        console.log(currentLevel); 
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
    timerAvailable = true;
    currentWidth = 100;
    setTimer();

    //movements
    movementsAvailable = true;
    remainingMovements = movements;
    setMovements();
};

//next level
const nextLevel = () => {
    document.querySelector('.win').remove();
    currentLevel ++;
    if(!relaxMode){
        startGame()
    }else{
        startRelaxMode();
    };
};

//adjustLevel
const adjustLevel = (level) =>{
    
    switch (level){
        case 1:
            numberOfCards = 4; //4
            time = 30;
            movements = 10;
            break;
        case 2:
            numberOfCards = 8; //8
            time = 120;
            movements = 20;
            break;
        case 3:
            numberOfCards = 15; //15
            time = 300;
            movements = 40;
            break;
    }
};

//restart
const restart = () => {
    location.reload();
};