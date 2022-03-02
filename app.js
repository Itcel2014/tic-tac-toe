let gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  turn: "X",
};
// let name =
// function myFunction() {
//   var x = document.getElementById("myText").name;
//   document.getElementById("demo").innerHTML = x;
// }
//draw grid 3x3
//
gameState.board;
let currentPlayer = "X";
const grid = document.querySelector(".grid");
grid.addEventListener("click", function (event) {
  console.log(event.target.id);

  event.target.innerText = currentPlayer;
  if (currentPlayer === "X") {
    currentPlayer = "o";
  } else if (currentPlayer === "o") {
    currentPlayer = "X";
  }
});

// keep track of whose turn it is
//winner or loser
//where x's and o's are
// how to check winner

function randomizeFirstPlayer() {
  //randomly determine player one or player two
  //re-assign the turn to the results of 21
  gameState.turn = "o";
}

function renderGrid() {}

function checkWinner() {
  //if statement and else if
}

//add restart button
