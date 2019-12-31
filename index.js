
const gameState = {
  currentTurn: 'playerOne',
  playerOneSymbol: 'X',
  playerTwoSymbol: 'O',
  currentBoardArray: [,,,,,,,,],
  activeGame: true

}

const winConditions = [
  [1,2,3],
  [1,5,9],
  [1,4,7,],
  [4,5,6],
  [7,8,9],
  [2,5,8],
  [3,6,9],
  [3,5,7]
];

const checkForVictory = () => {
  console.log('checking for Victory')
}

const addToCell = (cellID, letter) => {
    $('#' + cellID).html(letter); 
    console.log(cellID)
    let arrayIndex = ""
    if (cellID === "cell-one") {
      arrayIndex = 0;
      gameState.currentBoardArray[arrayIndex] = letter;
      console.log(arrayIndex);
      console.log(gameState.currentBoardArray)
    }
    

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