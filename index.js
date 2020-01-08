
// GAME OBJECT // GAME OBJECT
// GAME OBJECT // GAME OBJECT
// GAME OBJECT // GAME OBJECT

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

// THIS ONE WORKS FOR JUST THE FIRST ARRAY IN WIN CONDITIONS
// THIS ONE WORKS FOR JUST THE FIRST ARRAY IN WIN CONDITIONS
// THIS ONE WORKS FOR JUST THE FIRST ARRAY IN WIN CONDITIONS
// THIS ONE WORKS FOR JUST THE FIRST ARRAY IN WIN CONDITIONS

// const checkForVictory = () => {
  
//   let testArray = [,,,];

//   for (let i = 0; i < 3; i++) {

//     let indexes = winConditions[0][i];

//     let boardValues = gameState.currentBoardArray[indexes]
    
//     testArray[i] = boardValues;

//     // console.log("testArray=", testArray);
//     // console.log("boardValues=", boardValues);
//     // const xWinsArray = ["X","X","X"]
//     // console.log("xWinsArray=", xWinsArray)
//     // console.log("testArray length=", testArray.length)
//     // console.log("indexes=", indexes)
//     // checkXWins(testArray, xWinsArray)
    
//     checkWins(testArray)
//     }
//   }

const resetBoard = () => {
  console.log("RESET BOARD IS RUNNING!")
  $('.cell').html("");
  gameState.gameOver = false;
  gameState.activeGame = true;
  gameState.currentTurn = "playerOne"

  for (let i = 0; i < gameState.currentBoardArray.length; i++) {
    gameState.currentBoardArray[i] = "";
  }

  console.log("currentBoardArray=", gameState.currentBoardArray)
}

const updateWinsTable = (currentGameWinner) => {
  if (currentGameWinner === "X") {
    $('#player-one-wins-counter').html(gameState.playerOneWinsThisSession)
  } else if (currentGameWinner === "O") {
    $('#player-two-wins-counter').html(gameState.playerTwoWinsThisSession)
  }
}


const checkWhoWins = (testArray) => {
  // console.log("checkXWins is RUNNING!");
  // console.log("arr1=", arr1);
  let currentGameWinner ="";

  if (testArray[0] === 'X' && testArray[1] === 'X' && testArray[2] === 'X') {
    gameState.playerOneWinsThisSession++;
    gameState.gameWinner = "Player One";
    gameState.gameOver = true;
    gameState.activeGame = false;
    
    currentGameWinner = "X";

    console.log("X WINS!")
    console.log(gameState)

    updateWinsTable(currentGameWinner)

  } else if (testArray[0] === 'O' && testArray[1] === 'O' && testArray[2] === 'O') {
    gameState.playerTwoWinsThisSession++;
    gameState.gameWinner = "Player Two";
    gameState.gameOver = true;
    gameState.activeGame = false;
    
    currentGameWinner = "O";

    console.log("O WINS!")
    console.log(gameState)

    updateWinsTable(currentGameWinner)
  } else {
    // console.log("KEEP PLAYING!")
  }
}

  // TRYING TO NEST THE LOOPS 
  // TRYING TO NEST THE LOOPS 
  // TRYING TO NEST THE LOOPS 

  const checkForVictory = () => {
  
    let testArray = [,,,];
  
    for (let i = 0; i < winConditions.length; i++) {
      
      if (gameState.activeGame === true) {

      for (let j = 0; j < 3; j++) {

        // THIS IF STATEMENT NEEDS FIXING!!
        if (testArray[j] !== null && testArray[j] !== "") {
    
        let indexes = winConditions[i][j];
    
        let boardValues = gameState.currentBoardArray[indexes]
        
        testArray[j] = boardValues;
        console.log("testArray=", testArray);
        
        // runs checkWins and sends the iteration of testArray every loop to be checked by checkWins
        checkWhoWins(testArray)
          
        // console logs--------
        // console.log("boardValues=", boardValues);
        // const xWinsArray = ["X","X","X"]
        // console.log("xWinsArray=", xWinsArray)
        // console.log("testArray length=", testArray.length)
        // console.log("indexes=", indexes)
        // checkXWins(testArray, xWinsArray)
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
    }
    else if (cellID === "cell-two") {
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

    // console logs----------
    // console.log("Clicked arrayIndex= ", arrayIndex);
    // console.log("BOARD= ", gameState.currentBoardArray)
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
      gameState.currentTurn = 'playerTwo'
    } else if (gameState.currentTurn === 'playerTwo') {
      addToCell(event.target.id, gameState.playerTwoSymbol)
      gameState.currentTurn = 'playerOne'
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
})