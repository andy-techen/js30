const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const leaderBoard = document.querySelector('.high-score');
let lastHole;
let timeUp;
let score = 0;
localStorage.setItem('highScore', 0);

function randTime(min = 500, max = 1500) {
    return Math.round(Math.random() * (max - min) + min);
}

function randHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);  // get 0~5 randomly
    const hole = holes[idx];

    if (hole === lastHole) {
        return randHole(holes);
    }  // prevent same hole from popping up twice in a row

    lastHole = hole;   // keep track of the last popped-up hole
    return hole;
}

function peep(min, max) {
    const time = randTime(min, max);
    const hole = randHole(holes);
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep(min, max);
    }, time);
}

function bonk(e) {
    if (!e.isTrusted) return;  // returns false when event simulated, i.e., not actually clicked
    score++;
    scoreBoard.textContent = score;
}

function startGame(min, max) {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    const highScore = parseInt(localStorage.getItem('highScore'));
    peep(min, max);
    setTimeout(() => {
        timeUp = true;
        if (score > highScore) {
            localStorage.setItem('highScore', score);
            alert(`Time Up! You Scored ${score} Points! New High Score!!!`);
            leaderBoard.textContent = score;
        } else {
            alert(`Time Up! You Scored ${score} Points!`);
        }
    }, 10000);  // end game after 10 seconds
}

moles.forEach(mole => mole.addEventListener('click', bonk));