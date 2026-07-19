


const board = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;

const gameboard = document.getElementById("gameboard");
const status = document.getElementById("turnstatus");
const resetbutton = document.getElementById("resetbutton");

const WaysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6]
];


function renderBoard() {
    gameboard.innerHTML = "";
    board.forEach((value, index) => {
        const button = document.createElement("button");
        button.className = "square";
        button.textContent = value;
        button.disabled = !!value || !gameActive;
        button.addEventListener("click", () => handleMove(index));
        gameboard.appendChild(button);
    });
}

function handleMove(index) {
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    renderBoard();

    if (checkWin(currentPlayer)) {
        status.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (board.every(cell => cell)) {
        status.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    status.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin(player) {
    return WaysToWin.some(combo =>
        combo.every(index => board[index] === player)
    );
}

resetbutton.addEventListener("click", () => {
    board.fill("");
    currentPlayer = "X";
    gameActive = true;
    status.textContent = "Player X's turn";
    renderBoard();
});

renderBoard();
status.textContent = "Player X's turn";








