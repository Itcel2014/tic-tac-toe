let gameState = {
  players: ["X", "O"],
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  count: 0,
  turn: "X",
};

//Name fields and buttons
function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
}
function playerTwo() {
  var x = document.getElementById("Txt").value;
  document.getElementById("show").innerHTML = x;
}
//x's & o's
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
});

const playerDisplay = document.querySelector(".displayPlayer");
const announcer = document.querySelector(".displayWinner");

const PlayerXwon = "PLAYER 1 WON!";
const PlayerOWon = "PLAYER 2 WON!";
const tieLoser = "it's a tie!";

function renderGrid() {}

function checkWinner() {
  //if statement and else if
  //DIDNT WORK DRAFT
  // function checkWinner(x, o, y) {
  //   let section = [];
  //   for (let i = 0; i < x.length; i++)
  //     if (i < 3) {
  //       section.push(x[i][0]);
  //       section.push(x[i][1]);
  //       section.push(x[i][2]);
  //     }
  //   return "WINNER!";
  // }
  // console.log(checkWinner(gameState.board, 0, 1, 2));
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  //winner or loser
}

function createButton() {
  location.reload();
}
