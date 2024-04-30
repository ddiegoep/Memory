//set level counter
const setLevelCounter = () => {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "<div id='levelCounter'>" +
        "level: " +
        currentLevel +
        "</div>";
    const counters = document.querySelector('.counters');
    counters.appendChild(newDiv);
};


//set chrono
const setTimer = () => {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "<div class='chrono'>" +
        "<div id='timeBar'></div></div>";
    const counters = document.querySelector('.counters');
    counters.appendChild(newDiv);
    const timeBar = document.getElementById("timeBar");
    const widthInterval = 100 / (10 * time);
    const interval = setInterval(() => {
        if (timerAvailable) {
            currentWidth = currentWidth - widthInterval;
            timeBar.style.width = currentWidth + "%";
            if (currentWidth < 50) {
                timeBar.style.backgroundColor = "orange";
            };
            if (currentWidth < 25) {
                timeBar.style.backgroundColor = "red";
            };
            if (currentWidth < 0) {
                lostOnTime();
                clearInterval(interval);
            }
        }
    }, 100);
};

//set movements
const setMovements = () => {
    var numerator;
    var denominator;
    if (remainingMovements >= 10) {
        numerator = remainingMovements;
    } else {
        numerator = '0' + remainingMovements;
    };
    if (movements >= 10) {
        denominator = movements;
    } else {
        denominator = '0' + movements;
    }
    var newDiv = document.createElement('div');
    newDiv.innerHTML = "<div id='movementsCounter'>" +
        numerator +
        "/" +
        denominator +
        "</div>";
    const counters = document.querySelector('.counters');
    counters.appendChild(newDiv)
};