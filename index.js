const sessionState = {
  playerOneWinsThisSession:   0,
  playerTwoWinsThisSession:   0,
};

const startingGameState = {
  currentTurn:                'playerOne',
  playerOneSymbol:            'X',
  playerTwoSymbol:            'O',
  activeGame:                 true,
  gameOver:                   false,
  gameWinner:                 "",
};

const gameState = {};

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

const resetGameState = () => {
  gameState.currentTurn =                startingGameState.currentTurn;
  gameState.playerOneSymbol =            startingGameState.playerOneSymbol;
  gameState.playerTwoSymbol =            startingGameState.playerTwoSymbol;
  gameState.currentBoardArray =          ["","","","","","","","","",""];
  gameState.activeGame =                 startingGameState.activeGame;
  gameState.gameOver =                   startingGameState.gameOver;
  gameState.gameWinner =                 startingGameState.gameWinner;
};

const newGame = () => {
  $('.cell').html("");
  $('.announce-winner-div').html("");
  resetGameState();
  updatePlayerTurnOnScreen();
};

const updatePlayerTurnOnScreen = () => {
  if (gameState.currentTurn === "playerOne" && gameState.activeGame === true) {
  $('.current-player-div').html("Player One's Turn!");
  } else if (gameState.currentTurn == "playerTwo" && gameState.activeGame === true) {
    $('.current-player-div').html("Player Two's Turn!");
  } else if (gameState.activeGame === false) {
    $('.current-player-div').html("");
  }
};

const announceWinner = () => {
  let winnerMessage = gameState.gameWinner === "X" ? "Player One Wins!" : "Player Two Wins!";
  $('.announce-winner-div').html(winnerMessage);
};

const updateSessionWins = () => {
  gameState.gameWinner === "X" ? sessionState.playerOneWinsThisSession++ : sessionState.playerTwoWinsThisSession++;
}

const updateWinsTable = () => {
  gameState.gameWinner === "X" ? $('#player-one-wins-counter').html(sessionState.playerOneWinsThisSession) : 
  $('#player-two-wins-counter').html(sessionState.playerTwoWinsThisSession);
};

const endTheGame = () => {
  gameState.gameOver = true;
  gameState.activeGame = false;
  announceWinner();
  updateSessionWins();
  updateWinsTable();
}

const checkCondition = (condition) => {
    let val1 = gameState.currentBoardArray[condition[0]];
    let val2 = gameState.currentBoardArray[condition[1]];
    let val3 = gameState.currentBoardArray[condition[2]];

    if (val1 == "") {
      return "";
    }
    if (val1 !== val2) {
      return "";
    }
    if (val1 !== val3) {
      return "";
    }
    return val1;
};

const checkForVictoryToo = () => {
  for (const condition of winConditions) {
    let winnerSymbol = checkCondition(condition);
    if ("" !== winnerSymbol) {
      return winnerSymbol;
    }
  }
  return "";
};

const checkForVictory = () => {
  
  let whoWon = checkForVictoryToo();
  if (whoWon !== "") {
    gameState.gameWinner = whoWon;
    endTheGame();
  }
}

// const oldCheckForVictory = () => {
//   for (let i = 0; i < winConditions.length; i++) {
//     // console.log("gameState.currentBoardArray[winConditions[i][0] =", gameState.currentBoardArray[winConditions[i][0]]);
//     // console.log("gameState.currentBoardArray[winConditions[i][1] =", gameState.currentBoardArray[winConditions[i][1]]);
//     // console.log("gameState.currentBoardArray[winConditions[i][2] =", gameState.currentBoardArray[winConditions[i][2]]);
//     if (((gameState.currentBoardArray[winConditions[i][0]]) === (gameState.currentBoardArray[winConditions[i][1]]) === (gameState.currentBoardArray[winConditions[i][2]])) && (gameState.currentBoardArray[winConditions[i][0]] !== "")) {
//       console.log("i =", i)
//       gameState.gameWinner = (winConditions[i][0] === "X") ? "Player One" : "Player Two";
//       endTheGame();
//     }
//   }
// }

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

    checkForVictory();
} 

const playerMove = () => {
  if (gameState.activeGame && $('#' + event.target.id).html() === '') {

    if (gameState.currentTurn === 'playerOne') {

      addToCell(event.target.id, gameState.playerOneSymbol);
      gameState.currentTurn = 'playerTwo';

      updatePlayerTurnOnScreen();

    } else if (gameState.currentTurn === 'playerTwo') {

      addToCell(event.target.id, gameState.playerTwoSymbol);
      gameState.currentTurn = 'playerOne';

      updatePlayerTurnOnScreen();

    } else {
      console.error('player state unknown');
    }
  }
}

const addHandlers = () => {
  $('.cell').on('click', playerMove);
  $('#board-reset-button').on('click', newGame);
};

$(() => {
  addHandlers();
  resetGameState();
  updatePlayerTurnOnScreen();
});