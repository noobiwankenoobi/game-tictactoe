
const gameState = {
  currentTurn: 'playerOne',
  playerOneSymbol: 'X',
  playerTwoSymbol: 'O'
}

const addToCell = (cellID, letter) => {
    $('#' + cellID).html(letter); 
} 

const playerMove = () => {
  if ($('#' + event.target.id).html() === '') {
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

const addHandlers = () => {
  $('.cell').on('click', playerMove)
};

// ON PAGE LOAD

$(() => {
  addHandlers()
})