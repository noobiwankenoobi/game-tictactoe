
const gameState = {
  currentTurn: 'playerOne',
  playerOneSymbol: 'X',
  playerTwoSymbol: 'O'
}

const addToCell = (cellID, letter) => {
    $('#' + cellID).html(letter);
} 

const playerMove = () => {
  let cellID = event.target.id
  if (gameState.currentTurn === 'playerOne') {
    addToCell(cellID, gameState.playerOneSymbol)
    gameState.currentTurn = 'playerTwo'
  } else if (gameState.currentTurn === 'playerTwo') {
    addToCell(cellID, gameState.playerTwoSymbol)
    gameState.currentTurn = 'playerOne'
  } else {
    console.error('player state unknown')
  }
}

const addHandlers = () => {
  $('.cell').on('click', playerMove)
};

// ON PAGE LOAD

$(() => {
  addHandlers()
})