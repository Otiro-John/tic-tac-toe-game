//variables for checking game status
let board; 
let currentPlayer; 
let gameStatus;

//initializing game
function initializeGame(){
   board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = "X";
    gameStatus = true;
    createBoards();
}
//creating the boards using the cells in the array
function createBoards(){
    let boardContainer = document.getElementById("board-container");
    boardContainer.innerHTML = '';
    //looping through the array to create the number of boards required
    //I am using for each loop so that I can loop through the cells in the array easily
    board.forEach((cell, index) => {
      let cellEl = document.createElement("div");
      cellEl.innerText = cell;
      cellEl.classList.add("boards");
    cellEl.addEventListener("click", ()=> handleUserClicks(index));
    boardContainer.appendChild(cellEl);
    });

}
//handling the click on each cell
function handleUserClicks(index){
    if(board[index] !== '' || !gameStatus){
        return;
    }
    board[index] = currentPlayer;
    checkResult();
    // currentPlayer = currentPlayer === "X" ? "O" : "X";
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }
    else{
        currentPlayer = "X";
    }
    createBoards();
}
// checking results

function checkResult(){
    //collecting the winning patterns represented by the cell indexes
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    //checking the winning status
    let winningStatus = false;
    //looping through the array to get the required patterns in check
    for(let x = 0; x < winPatterns.length; x++){
        const [a, b, c] = winPatterns[x];//use of array destructure to check values easily if they are true
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winningStatus = true;
            break;
        }
    }

    if (winningStatus) {
        gameActive = false;
        alert(currentPlayer + ' has won!');
        restartGame();
    } 
    else if (!board.includes('')) {
        gameActive = false;
        alert('It\'s a tie!');
        initializeGame();
        restartGame();
    }
    }
    //restarting the game if anyone has won or there has been a tie
    function restartGame(){
         initializeGame();
    }
    initializeGame();