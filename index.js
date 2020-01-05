
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

// FIRST ATTEMPT for checkForVictory function
// FIRST ATTEMPT for checkForVictory function
// FIRST ATTEMPT for checkForVictory function

// const checkForVictory = () => {

//   console.log('Running: Checking for Victory')

//   let testArray = winConditions[0]
//   let checkIfXWins = 

//   console.log("first win condition=", winConditions[0])

//   for (let i = 0; i < testArray.length; i++) {
//     console.log("test log =", gameState.currentBoardArray[testArray[i]])
//     if (gameState.currentBoardArray[testArray[i]] === "x") {
//       match = true
//     }

//   for (let i = 0; i < testArray.length; i++) {
//     if (gameState.currentBoardArray[testArray[i]] !== "x") {
//       match = false;
//     }
//   }
// }
//   if (match === true) {
//     console.log ("x wins")
//   }
// }

// SECOND ATTEMPT for checkForVictory function
// SECOND ATTEMPT for checkForVictory function
// SECOND ATTEMPT for checkForVictory function

// const checkForVictory = () => {

//   for (let i = 0; i < winConditions.length; i++) {
//     let testArray = winConditions[i];
//     console.log("testArray =", testArray)

//     for (let j = 0; j < testArray.length; j++) {
//       let checkForMatchArray = [];
//       checkForMatchArray.push(gameState.currentBoardArray[testArray[j]]);
//       console.log("checkforMatchArray =", checkForMatchArray)
      
//     }
    
//   }
  
// }

// THIRD ATTEMPT
// THIRD ATTEMPT
// THIRD ATTEMPT

// const checkForVictory = () => {

//   for(let i = 0; i < winConditions.length; i++){

//     let checkVal = gameState.currentBoardArray[winConditions[i][0]];

//     if(checkVal !== ''){
//       let match = true;

//       for(let j = 0; j < 3; j++){

//         if(gameState.currentBoardArray[winConditions[i][j]] !== checkVal){
//           match = false;
//         }
//       }
//       // console.log(match);
//       let gameOver = false;
//       if (match === true) {
//       gameOver = false;
//       console.log("gameOver=", gameOver)
//       }
//   }
// }
// }

// if (cellsMatchX = true) {
//   console.log("Player X Wins!")
//

// FOURTH ATTEMPT at checkVictory // FOURTH ATTEMPT at checkVictory //
// FOURTH ATTEMPT at checkVictory // FOURTH ATTEMPT at checkVictory //  
// FOURTH ATTEMPT at checkVictory // FOURTH ATTEMPT at checkVictory // 

// const checkForVictory = () => {

//   for (let i = 0; i < winConditions.length; i++) {
//     let testArray = winConditions[i];
//     console.log("testArray =", testArray)

//     for (let j = 0; j < testArray.length; j++) {
//       let checkForMatchArray = [];
//       checkForMatchArray.push(gameState.currentBoardArray[testArray[j]]);
//       console.log("checkforMatchArray =", checkForMatchArray)
      
//     }
    
//   }
  
// }

// TEST ATTEMPT at checkVictory // TEST ATTEMPT at checkVictory
// TEST ATTEMPT at checkVictory // TEST ATTEMPT at checkVictory
// TEST ATTEMPT at checkVictory // TEST ATTEMPT at checkVictory
// const ifXWins = () => {
//   console.log("ifXWins IS RUNNING!");
//   console.log('X WINS')
// }


const checkWins = (arr1) => {
  console.log("checkXWins is RUNNING!")
  console.log("arr1=", arr1);
  if (arr1[0] === 'X' && arr1[1] === 'X' && arr1[2] === 'X') {
    console.log("X WINS!")
  } else if (arr1[0] === 'O' && arr1[1] === 'O' && arr1[2] === 'O') {
    console.log("O WINS!")
  } else {
    console.log("KEEP PLAYING!")
  }

 
}

  
// const checkContainsX = (value) => {
//   return value === "X"; 
// }

// if (arr1[0] !== '' && arr1[1] !== '' && arr1[2] !== '') {
//   let allX = arr1.every(checkContainsX);
//   console.log("allX is =", allX);
//   } else {
//     console.log("NOT WORKING")
//   }
  

 

  // console.log("arr2=", arr2);

  // let xWins = false

  // for (let i = 0; i < 3; i++) {
  //   console.log(a="arr1=", arr1)
  //   if (arr1[i] !== arr2[i]) {
  //     console.log("KEEP PLAYING");
  //   } else {
  //     ifXWins()
  //   }
    
  // }




const checkForVictory = () => {
  let testArray = [,,,];
  for (let i = 0; i < winConditions[0].length; i++) {
    let indexes = winConditions[0][i];
    // console.log("indexes=", indexes);
    let boardValues = gameState.currentBoardArray[indexes]
    // console.log("boardValues=", boardValues);
    testArray[indexes] = boardValues;
    // console.log("testArray=", testArray);

    // const xWinsArray = ["X","X","X"]
    // console.log("xWinsArray=", xWinsArray)
    // console.log("testArray length=", testArray.length)
    // checkXWins(testArray, xWinsArray)

    checkWins(testArray)


    // if (testArray[i] !== xWinsArray[i]) {
    //   console.log("KEEP PLAYING")
    // } else if (testArray[i] === xWinsArray[i]) {
    //   console.log("X WINS")
    // }

  //   const checkXWins = () => {
  //     console.log("checkXWins is RUNNING")
  //   for (let j = 0; j < xWinsArray.length; j++) {
  //     if (testArray[j] !== xWinsArray[j]) {
  //       console.log("KEEP PLAYING")
  //     } else {
  //       console.log("X WINS")
  //     }
  //   }
  // }
  // checkXWins()
      
    }
   
  }


// POTENTIAL CHECK X WIN FUNCTION

// const checkIfXWins = () => {
//   for (let j = 0; j < xWinsArray.length; j++) {
//     if (testArray[j] !== xWinsArray[j]) {
//     return false
//   } else {
//     return true
//     console.log("PLAYER X WINS")
//   }
// }

//   }


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

    // console logs
    // console.log("Clicked arrayIndex= ", arrayIndex);
    // console.log("BOARD= ", gameState.currentBoardArray)
} 

// checks to make sure cell is empty before putting current turn symbol and changing turn
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
};

// ON PAGE LOAD // ON PAGE LOAD
// ON PAGE LOAD // ON PAGE LOAD
// ON PAGE LOAD // ON PAGE LOAD


$(() => {
  addHandlers()
})