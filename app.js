let gameState = {
  players: ["X", "O"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  count: 0,
  turn: "X",
};

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo1").innerHTML = x;
}

gameState.board;
let currentPlayer = "X";
const grid = document.querySelector(".grid");
grid.addEventListener("click", function (event) {
  console.log(event);

  if (gameState.count % 2 === 0 && event.target.innerHTML === "") {
    event.target.innerHTML = "X";
    gameState.count++;
  } else if (event.target.innerHTML === "") {
    event.target.innerHTML = "o";
    gameState.count++;
  }
  // if (
  //   (currentPlayer === "X" && event.target.className === "cell") ||
  //   event.target.inner.html === ""
  // ) {
  //   event.target.innerText = currentPlayer;
  //   currentPlayer = "o";
  // } else if (
  //   (currentPlayer === "o" && event.target.className === "cell") ||
  //   event.target.inner.html === ""
  // ) {
  //   currentPlayer = "X";
  // }
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
