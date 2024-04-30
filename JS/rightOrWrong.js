//rightGuess
const rightGuess = (selectedCards) => {
    document.querySelector('#rightGuessSound').play();
    setTimeout(() =>selectedCards.forEach((flippedCard) => flippedCard.classList.toggle('guessed')), 300);
}

//badGuess
const wrongGuess = (selectedCards) => {
    document.querySelector('#wrongGuessSound').play();
    selectedCards.forEach((flippedCard) => flippedCard.classList.toggle('missed'));
    setTimeout(function(){
        selectedCards.forEach(function(flippedCard){
            flippedCard.classList.toggle('flipped');
            flippedCard.classList.toggle('missed');
        });
    }, 400);
}