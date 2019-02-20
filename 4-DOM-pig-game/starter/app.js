
let scores, eachTurnScore, eachTurnScore2, activePlayer, dice, gamePlaying, setGameScore;

init();

document.querySelector('.btn-new').addEventListener('click', init);


document.querySelector(`.btn-roll`).addEventListener('click', () => {
    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let diceDOM = document.querySelector(`#dice-1`);
        let diceDOM2 = document.querySelector(`#dice-2`);
        diceDOM.style.display = `block`;
        diceDOM2.style.display = `block`;
        diceDOM.src = `dice-${dice}.png`;
        diceDOM2.src = `dice-${dice2}.png`;

        /* if (dice === 6 && dice2 === 6) {
             scores[activePlayer] = 0;
             document.querySelector(`#score-${activePlayer}`).textContent = '0';
             switchPlayer();
             */
        if (dice !== 1 && dice2 !== 1) {
            eachTurnScore += dice + dice2;
            document.querySelector(`#current-${activePlayer}`).textContent = eachTurnScore;

        } else {
            switchPlayer();
        }

    }
});

document.querySelector(`.btn-hold`).addEventListener('click', () => {
    if (gamePlaying) {
        scores[activePlayer] += eachTurnScore;

        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
        setGameScore = document.querySelector(`.final-score`).value;


        if (scores[activePlayer] >= setGameScore) {
            document.querySelector(`#name-${activePlayer}`).textContent = `Winner!`;
            document.querySelector(`.dice`).style.display = `none`;
            document.querySelector(`.player-${activePlayer}-panel`).classList.add(`winner`);
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove(`active`);
            gamePlaying = false;
        } else {
            switchPlayer();
        }
    }
});

// DRY Functions

function switchPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    eachTurnScore = 0;
    document.getElementById(`current-0`).textContent = '0';
    document.getElementById(`current-1`).textContent = '0';

    document.querySelector(`.player-0-panel`).classList.toggle(`active`);
    document.querySelector(`.player-1-panel`).classList.toggle(`active`);
}

function init() {
    scores = [0, 0];
    eachTurnScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    document.getElementById(`score-0`).textContent = '0';
    document.getElementById(`score-1`).textContent = '0';
    document.getElementById(`current-0`).textContent = '0';
    document.getElementById(`current-1`).textContent = '0';
    document.querySelector(`#dice-1`).style.display = `none`;
    document.querySelector(`#dice-2`).style.display = `none`;
    document.getElementById(`name-0`).textContent = `Player 1`;
    document.getElementById(`name-1`).textContent = `Player 2`;
    document.querySelector(`.player-0-panel`).classList.remove(`winner`);
    document.querySelector(`.player-1-panel`).classList.remove(`winner`);
    document.querySelector(`.player-0-panel`).classList.remove(`active`);
    document.querySelector(`.player-1-panel`).classList.remove(`active`);
    document.querySelector(`.player-0-panel`).classList.add(`active`);
    setGameScore = document.querySelector(`.final-score`).value;

}