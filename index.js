
const gameState = {
  currentTurn: 'playerOne',
  playerOneSymbol: 'X',
  playerTwoSymbol: 'O',
  currentBoardArray: [,,,,,,,,,],
  activeGame: true

}

const winConditions = [
  [0,1,2],
  [0,4,8],
  [0,3,6,],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,5,8],
  [2,4,6]
];

const checkForVictory = () => {
  console.log('checking for Victory')
}

const addToCell = (cellID, letter) => {
    $('#' + cellID).html(letter); 
    console.log(cellID)
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
    gameState.currentBoardArray[arrayIndex] = letter;
    console.log("arrayIndex= ", arrayIndex);
    console.log("BOARD= ", gameState.currentBoardArray)
    

} 

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
    checkForVictory()
  }
}

const addHandlers = () => {
  $('.cell').on('click', playerMove)
};

// ON PAGE LOAD

$(() => {
  addHandlers()
})