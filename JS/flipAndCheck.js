//turn around card and check
function flipCard() {
    this.classList.add('flipped');
    document.querySelector('#cardFlipSound').cloneNode().play();
    var flippedCards = document.querySelectorAll(".flipped:not(.guessed)");
    var flippedCounter = flippedCards.length;
    if (flippedCounter == 2) {
        if (flippedCards[0].getAttribute('value') == flippedCards[1].getAttribute('value')) {
            rightGuess(flippedCards);
        } else {
            wrongGuess(flippedCards);
        }
        flippedCounter = 0;
        if (movementsAvailable){
            remainingMovements--};
        
        //check for win
        var guessed;
        setTimeout(()=> {
            guessed = document.querySelectorAll('.guessed');
            document.querySelector('#movementsCounter').remove();
            if(guessed.length == (doubledCards.length)){
                win();
            }else{
                if (remainingMovements == 0) {
                    lostOnMovements();
                }else{
                    setMovements();
                    if (!movementsAvailable){
                        document.querySelector('#movementsCounter').style.display = "none"};
                };
            };
        },500);
        
        

        
   
    };
};