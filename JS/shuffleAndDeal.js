//shuffle cards using Durstenfeld algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};



//deal cards
function dealCards() {

    var shuffledCards = cards;
    shuffleArray(shuffledCards); //shuffle to grant different emojis each game    
    var availableCards = shuffledCards.slice(0, numberOfCards);
    doubledCards = availableCards.concat(availableCards);
    shuffleArray(doubledCards);//shuffle playing cards

    const board = document.getElementById('board');

    doubledCards.forEach((oneCard) => {
        var newDiv = document.createElement('div');
        newDiv.innerHTML =
            '<div class="card" value="' +
            oneCard +
            '">' +
            '<div class="face back">' +
            '</div>' +
            '<div class="face front">' +
            oneCard +
            '</div>' +
            '</div>';
        board.appendChild(newDiv);
    });
};
