let cells = document.querySelectorAll('.row > div');

let playerTurn = ["xturn", "oturn",];


// if(xturn = true) {
//   console.log("It is X's turn.")
// } else if(xturn = false) {
//   console.log("It is O's turn.")
// }

function playerSwitch() {
  if (textcontent = "X") {
    (textcontent = "O")
  } else if (textcontent = "O") {
    (textcontent = "X")
  }

}

function cellClicked() {
  //event is an object, target tells it which box you select, textContent tell you what text is in the box
  event.target.textContent = "X"
}

function buttonClicked() {
  displayPlayerTurn();
}

function displayPlayerTurn() {
  cells[i].target.textContent = "O"
}


//cells[0].addEventListener, cells[1].addEventListener, cells[2].addEventListener...
//when a cell is clicked runs function cellClicked() 
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', cellClicked);
}

