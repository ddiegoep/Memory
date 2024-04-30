//Menu
const menu = () =>{
var newDiv = document.createElement('div');
newDiv.innerHTML = 
"<div class = 'menu'>" +
    "<h1>Hello!</h1>" +
    "<p>Select level</p>" + 
    "<div class='levelSelector'>" +
        "<input type='radio' id='radioLevel1' name='radioLevel' value='1' checked>" +
        "<label for='radioLevel1'>1</label>" +
        "<input type='radio' id='radioLevel2' name='radioLevel' value='2'>" +
        "<label for='radioLevel2'>2</label>" +
        "<input type='radio' id='radioLevel3' name='radioLevel' value='3'>" +
        "<label for='radioLevel3'>3</label>" + 
    "</div>" +
    "<button class='playButton'>Play</button>" +
    "<p>or</p>" +
    "<button class='playRelaxMode'>Play Relax Mode</button>"
"</div>";
const board = document.querySelector('#board');
board.appendChild(newDiv);
const playButton = document.querySelector('.playButton');
playButton.addEventListener("click", startGame);
const playRelaxModeButton = document.querySelector('.playRelaxMode');
playRelaxModeButton.addEventListener("click", startRelaxMode);
};

menu();