const sessionState = {
  playerOneWinsThisSession:   0,
  playerTwoWinsThisSession:   0,
};

const startingGameState = {
  currentTurn:                'playerOne',
  playerOneSymbol:            'X',
  playerTwoSymbol:            'O',
  currentBoardArray:          [,,,,,,,,,],
  activeGame:                 true,
  gameOver:                   false,
  gameWinner:                 "",
};

const gameState = startingGameState;

const winConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

const newGame = () => {
  $('.cell').html("");
  $('.announce-winner-div').html("");
  updatePlayerTurnOnScreen();
  gameState = startingGameState;
};

const announceWinner = (currentGameWinner) => {
  let winnerMessage = currentGameWinner === "X" ? "Player One Wins!" : "Player Two Wins!";
  $('.announce-winner-div').html(winnerMessage);
}

const updatePlayerTurnOnScreen = () => {
  if (gameState.currentTurn === "playerOne" && gameState.activeGame === true) {
  $('.current-player-div').html("Player One's Turn!");
  } else if (gameState.currentTurn == "playerTwo" && gameState.activeGame === true) {
    $('.current-player-div').html("Player Two's Turn!");
  } else if (gameState.activeGame === false) {
    $('.current-player-div').html("")
  }
}

const resetBoard = () => {
  $('.cell').html("");
  gameState.gameOver = false;
  gameState.activeGame = true;
  gameState.currentTurn = "playerOne"
  updatePlayerTurnOnScreen()
  $('.announce-winner-div').html("");

  for (let i = 0; i < gameState.currentBoardArray.length; i++) {
    gameState.currentBoardArray[i] = "";
  }
}

const updateWinsTable = (currentGameWinner) => {
  if (currentGameWinner === "X") {
    $('#player-one-wins-counter').html(sessionState.playerOneWinsThisSession)
  } else if (currentGameWinner === "O") {
    $('#player-two-wins-counter').html(sessionState.playerTwoWinsThisSession)
  }
}

const checkWhoWins = (winTestArray) => {

  let currentGameWinner ="";

  if (winTestArray[0] === 'X' && winTestArray[1] === 'X' && winTestArray[2] === 'X') {
    sessionState.playerOneWinsThisSession++;
    gameState.gameWinner = "Player One";
    gameState.gameOver = true;
    gameState.activeGame = false;
    
    currentGameWinner = "X";

    updateWinsTable(currentGameWinner)
    announceWinner(currentGameWinner)

  } else if (winTestArray[0] === 'O' && winTestArray[1] === 'O' && winTestArray[2] === 'O') {
    sessionState.playerTwoWinsThisSession++;
    gameState.gameWinner = "Player Two";
    gameState.gameOver = true;
    gameState.activeGame = false;
    
    currentGameWinner = "O";

    updateWinsTable(currentGameWinner)
    announceWinner(currentGameWinner)
  } else {
    console.error("error in checkWhoWins")
  }
}

  const checkForVictory = () => {

    for (let i = 0; i < winConditions.length; i++) {
      
      let winTestArray = [,,,];

      if (gameState.activeGame === true) {

        for (let j = 0; j < 3; j++) {
          
          if (winTestArray[0] !== "" && winTestArray[1] !== "" && winTestArray[2] !== "") {
      
            let indexes = winConditions[i][j];
            let boardValues = gameState.currentBoardArray[indexes]
            
            winTestArray[j] = boardValues;
            
            checkWhoWins(winTestArray)
            
          }
        }
      }
    }
  } 

const addToCell = (cellID, letter) => {
    $('#' + cellID).html(letter); 

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

    gameState.currentBoardArray[arrayIndex] = letter;

    checkForVictory()
   
} 

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

const addHandlers = () => {
  $('.cell').on('click', playerMove)
  $('#board-reset-button').on('click', resetBoard)
};

$(() => {
  addHandlers()
  updatePlayerTurnOnScreen()
})