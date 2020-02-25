// GAME OBJECT // GAME OBJECT

const startingGameState = {
  currentTurn: 'playerOne',
  playerOneSymbol: 'X',
  playerTwoSymbol: 'O',
  currentBoardArray: [,,,,,,,,,],
  activeGame: true,
  gameOver: false,
  gameWinner: "",
  playerOneWinsThisSession: 0,
  playerTwoWinsThisSession: 0,
}

const gameState = {
  currentTurn: 'playerOne',
  playerOneSymbol: 'X',
  playerTwoSymbol: 'O',
  currentBoardArray: [,,,,,,,,,],
  activeGame: true,
  gameOver: false,
  gameWinner: "",
  playerOneWinsThisSession: 0,
  playerTwoWinsThisSession: 0,
}

const winConditions = [
  [0,1,2],
  [0,4,8],
  [0,3,6],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,5,8],
  [2,4,6]
];

// NEW GAME FUNCTION

const newGame = () => {
  // this will clean up a bunch of the lower functions that are resetting things themselves
  // reset the board, reset the gameState, reset everything on screen that needs resetting
  console.log("RESET BOARD IS RUNNING!")
  $('.cell').html("");
  gameState.gameOver = false;
  gameState.activeGame = true;
  gameState.currentTurn = "playerOne"
  updatePlayerTurnOnScreen();
  $('.announce-winner-div').html("");

  for (let i = 0; i < gameState.currentBoardArray.length; i++) {
    gameState.currentBoardArray[i] = "";
  }

  console.log("currentBoardArray=", gameState.currentBoardArray)
}

// FUNCTION THAT RUNS WHEN WINNER IS DETERMINED AND NEEDS ANNOUNCING
// FUNCTION THAT RUNS WHEN WINNER IS DETERMINED AND NEEDS ANNOUNCING

const announceWinner = (currentGameWinner) => {
  // Create a modal in future that announces the winner with a "Player again" button that runs a newGame function
  console.log("ANOUNCE WINNER IS RUNNING")
  console.log("currentGameWinner", currentGameWinner)
  if (currentGameWinner === "X") {
    console.log("X conditions running")
    $('.announce-winner-div').html("Player One Wins!");
  } else if (currentGameWinner === "O") {
    $('.announce-winner-div').html("Player Two Wins!");
  }
}

// UPDATE PLAYER TURN ON SCREEN
// UPDATE PLAYER TURN ON SCREEN

const updatePlayerTurnOnScreen = () => {
  if (gameState.currentTurn === "playerOne" && gameState.activeGame === true) {
  $('.current-player-div').html("Player One's Turn!");
  } else if (gameState.currentTurn == "playerTwo" && gameState.activeGame === true) {
    $('.current-player-div').html("Player Two's Turn!");
  } else if (gameState.activeGame === false) {
    $('.current-player-div').html("")
  }
}

// RESET BOARD ON SCREEN AND GAME STATE
// RESET BOARD ON SCREEN AND GAME STATE

const resetBoard = () => {
  console.log("RESET BOARD IS RUNNING!")
  $('.cell').html("");
  gameState.gameOver = false;
  gameState.activeGame = true;
  gameState.currentTurn = "playerOne"
  updatePlayerTurnOnScreen()
  $('.announce-winner-div').html("");

  for (let i = 0; i < gameState.currentBoardArray.length; i++) {
    gameState.currentBoardArray[i] = "";
  }

  console.log("currentBoardArray=", gameState.currentBoardArray)
}

// UPDATE WINS TABLE ON THE SCREEN
// UPDATE WINS TABLE ON THE SCREEN

const updateWinsTable = (currentGameWinner) => {
  if (currentGameWinner === "X") {
    $('#player-one-wins-counter').html(gameState.playerOneWinsThisSession)
  } else if (currentGameWinner === "O") {
    $('#player-two-wins-counter').html(gameState.playerTwoWinsThisSession)
  }
}

// CHECK WHO WINS AFTER VICTORY IS DETERMINED
// CHECK WHO WINS AFTER VICTORY IS DETERMINED


const checkWhoWins = (winTestArray) => {
  // console.log("checkXWins is RUNNING!");
  // console.log("arr1=", arr1);
  let currentGameWinner ="";

  if (winTestArray[0] === 'X' && winTestArray[1] === 'X' && winTestArray[2] === 'X') {
    gameState.playerOneWinsThisSession++;
    gameState.gameWinner = "Player One";
    gameState.gameOver = true;
    gameState.activeGame = false;
    
    currentGameWinner = "X";

    console.log("X WINS!")
    console.log(gameState)

    updateWinsTable(currentGameWinner)
    announceWinner(currentGameWinner)

  } else if (winTestArray[0] === 'O' && winTestArray[1] === 'O' && winTestArray[2] === 'O') {
    gameState.playerTwoWinsThisSession++;
    gameState.gameWinner = "Player Two";
    gameState.gameOver = true;
    gameState.activeGame = false;
    
    currentGameWinner = "O";

    console.log("O WINS!")
    console.log(gameState)

    updateWinsTable(currentGameWinner)
    announceWinner(currentGameWinner)
  } else {
    // console.log("KEEP PLAYING!")
  }
}
 
// FIRST CHECK FOR A VICTORY
// FIRST CHECK FOR A VICTORY

  const checkForVictory = () => {

    for (let i = 0; i < winConditions.length; i++) {
      
      let winTestArray = [,,,];

      if (gameState.activeGame === true) {
      console.log("NEXT ITERATION-----------")

        for (let j = 0; j < 3; j++) {
          
          // THIS IF STATEMENT (MAYBE) NEEDS FIXING!!
          if (winTestArray[0] !== "" && winTestArray[1] !== "" && winTestArray[2] !== "") {
      
            let indexes = winConditions[i][j];
            let boardValues = gameState.currentBoardArray[indexes]
            
            // testArray IS BEING ASSIGNED VALUES IN CERTAIN INDEXES BY THE CURRENT BOARD ARRAY
            winTestArray[j] = boardValues;
            console.log("indexes=", indexes)
            console.log("winTestArray=", winTestArray);
            
            // runs checkWins and sends the iteration of testArray every loop to be checked by checkWhoWins
            checkWhoWins(winTestArray)
            
          }
        }
      }
    }
  } 

// ADDS SYMBOL TO GAMEBOARD IN DOM // ADDS SYMBOL TO GAMEBOARD IN DOM
// ADDS SYMBOL TO GAMEBOARD IN DOM // ADDS SYMBOL TO GAMEBOARD IN DOM
// ADDS SYMBOL TO GAMEBOARD IN DOM // ADDS SYMBOL TO GAMEBOARD IN DOM

const addToCell = (cellID, letter) => {
  // puts the correct symbol onto the playing board
    $('#' + cellID).html(letter); 

    // putting symbols into correct position on currentBoardArray
    let arrayIndex = ""

    if (cellID === "cell-one") {
      arrayIndex = 0;
    } else if (cellID === "cell-two") {
      arrayIndex = 1;
    } else if (cellID === "cell-three") {
      arrayIndex = 2;
    } else if (cellID === "cell-four") {
      arrayIndex = 3;
    } else if (cellID === "cell-five") {
      arrayIndex = 4;
    } else if (cellID === "cell-six") {
      arrayIndex = 5;
    } else if (cellID === "cell-seven") {
      arrayIndex = 6;
    } else if (cellID === "cell-eight") {
      arrayIndex = 7;
    } else if (cellID === "cell-nine") {
      arrayIndex = 8;
    }
    // after assigning the index, this puts the letter into that index position
    gameState.currentBoardArray[arrayIndex] = letter;
    // run the victory check after assigning to array
    checkForVictory()
   
} 


//  PLAYER MOVE FUNCTION // PLAYER MOVE FUNCTION
//  PLAYER MOVE FUNCTION // PLAYER MOVE FUNCTION
//  PLAYER MOVE FUNCTION // PLAYER MOVE FUNCTION

//  Makes sure that thee is an activeGame and that the target cell is empty
//  Adds correct symbol based on currentTurn, then switches the currentTurn to the other player
const playerMove = () => {
  if (gameState.activeGame && $('#' + event.target.id).html() === '') {

    if (gameState.currentTurn === 'playerOne') {

      addToCell(event.target.id, gameState.playerOneSymbol)
      gameState.currentTurn = 'playerTwo';

      updatePlayerTurnOnScreen()

    } else if (gameState.currentTurn === 'playerTwo') {

      addToCell(event.target.id, gameState.playerTwoSymbol)
      gameState.currentTurn = 'playerOne';

      updatePlayerTurnOnScreen()

    } else {

      console.error('player state unknown')
    }
    
  }
}

// CLICK HANDLERS // CLICK HANDLERS
// CLICK HANDLERS // CLICK HANDLERS
// CLICK HANDLERS // CLICK HANDLERS

const addHandlers = () => {
  $('.cell').on('click', playerMove)
  $('#board-reset-button').on('click', resetBoard)
};

// ON PAGE LOAD // ON PAGE LOAD
// ON PAGE LOAD // ON PAGE LOAD
// ON PAGE LOAD // ON PAGE LOAD

$(() => {
  addHandlers()
  updatePlayerTurnOnScreen()
})