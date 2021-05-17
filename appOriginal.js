//document is the entire HTML document, querySelector selects all cells
let cells = document.querySelectorAll('.row > div');

let cell = document.querySelector('.row')

const statusDisplay = document.querySelector(".game--status");

let gameActive = "true"

let currentplayer = "X"

let gameState = ["", "", "", "", "", "", "", "", ""]

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick(clickedCellEvent) 
{const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
      );

}
function handleRestartGame() {

}


//if (player1turn = true) {
    //console.log("p1 turn")
//} else {
    //console.log("p2 turn")
//}

//if (cells)

//for (let i = 0; i < cells.length; i++) {
    //cells[i].addEventListener('click', cellClicked);
//}

//function cellClicked () {
   // event.target.textContent = 'X'
//}


//if (cells.textContent = "X") {
    //console.log("it worked");
//} else {
   // console.log("it didnt work");
//}

