
const gamebaord = document.getElementById("gameboard");
const status = document.getElementById("turnstatus");
const resetbutton = document.getElementById("resetbutton");
const buttons = document.querySelectorAll(".square");

let currentPlayer = "X";
status.textContent = `turn: ${currentPlayer}`


let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let victory = false

function winCheck(index) {
    
    if (board[0] == currentPlayer && board[0] == board[1] && board[0] == board[2]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        // console.log(board)
        board = ["", "", "", "", "", "", "", "", ""];
        // console.log(board)
        victory = true
    } else if (board[3] == currentPlayer && board[3] == board[4] && board[3] == board[5]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        board = ["", "", "", "", "", "", "", "", ""];
        victory = true
    } else if (board[6] == currentPlayer && board[6] == board[7] && board[6] == board[8]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        board = ["", "", "", "", "", "", "", "", ""];
        victory = true
    
    } else if (board[0] == currentPlayer && board[0] == board[3] && board[0] == board[6]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        board = ["", "", "", "", "", "", "", "", ""];
        victory = true
    } else if (board[1] == currentPlayer && board[1] == board[4] && board[1] == board[7]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        board = ["", "", "", "", "", "", "", "", ""];
        victory = true
    } else if (board[2] == currentPlayer && board[2] == board[5] && board[2] == board[8]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        board = ["", "", "", "", "", "", "", "", ""];
        victory = true

    } else if (board[0] == currentPlayer && board[0] == board[4] && board[0] == board[8]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        board = ["", "", "", "", "", "", "", "", ""];
        victory = true
    } else if (board[2] == currentPlayer && board[2] == board[4] && board[2] == board[6]) {
        status.textContent = `DA WINNER IS ${currentPlayer}! congrats`
        board = ["", "", "", "", "", "", "", "", ""];
        victory = true
    
    } else {
        if (currentPlayer === "X") {currentPlayer = "O";
        } else if (currentPlayer === "O") {currentPlayer = "X";}

        status.textContent = `turn: ${currentPlayer}`
    }
}



function buttonPress(button, index, board) {
    if (button.textContent === "" && victory  == false) {

        console.log("buton pres!")
        buttons.textContent = currentPlayer
        button.textContent = currentPlayer

        board[index] = currentPlayer

        winCheck(index)
    }   
}

buttons.forEach((button, index)  => button.addEventListener("click", function() {
    buttonPress(button, index, board)
}
));

resetbutton.addEventListener("click", reset)

function reset() {
    console.log("ResEt!");
    buttons.forEach(button => button.textContent="");
    currentPlayer = "X";
    status.textContent = `turn: ${currentPlayer}`
    board = ["", "", "", "", "", "", "", "", ""];
    victory = false
}








