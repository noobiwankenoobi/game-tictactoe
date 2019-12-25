
const gameState = {
  currentTurn: 'playerOne'
}

const addX = () => {
    $('#' + event.target.id).html('X')
}

const addO = () => {
  $('#' + event.target.id).html('O')
}

const playerMove = () => {
  if (gameState.currentTurn === 'playerOne') {
    addX()
    gameState.currentTurn = 'playerTwo'
  } else if (gameState.currentTurn === 'playerTwo') {
    addO()
    gameState.currentTurn = 'playerOne'
  } else {
    console.error('player state unknown')
  }
}

// const addToCell = (cellID, letter) => {
//     $(cellID).html(letter);
// } 

const addHandlers = () => {
  $('.cell').on('click', playerMove)
  
};

// ON PAGE LOAD
// ON PAGE LOAD

$(() => {
  addHandlers()
})