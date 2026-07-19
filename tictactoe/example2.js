const buttons = document.querySelectorAll(".square");
const status = document.getElementById("turnstatus");
const resetButton = document.getElementById("resetbutton");

// This is the game board.
// It starts empty, with 9 spaces for the 9 buttons.
let board = ["", "", "", "", "", "", "", "", ""];

// X starts first.
let currentPlayer = "X";

// This tells us whether the game is still going.
let gameActive = true;

// This function checks if someone has won.
function checkWinner() {
    // These are all the possible winning lines.
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check each winning line one at a time.
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];

        // If all three spots match and are not empty, someone won.
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    // If no winning line was found, return false.
    return false;
}

// This function updates the turn message on the page.
function updateStatus(message) {
    status.textContent = message;
}

// This function resets the game.
function resetGame() {
    // Clear the board array.
    board = ["", "", "", "", "", "", "", "", ""];

    // Start over with X.
    currentPlayer = "X";
    gameActive = true;

    // Clear the button text on the page.
    buttons.forEach(button => {
        button.textContent = "";
    });

    // Show the starting message.
    updateStatus("Turn: X");
}

// This loop gives each button a click behavior.
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Do nothing if the game is over or the spot is already taken.
        if (!gameActive || board[index] !== "") {
            return;
        }

        // Put the current player's mark in the board array.
        board[index] = currentPlayer;

        // Show that mark on the button.
        button.textContent = currentPlayer;

        // Check if the current player won.
        if (checkWinner()) {
            updateStatus(`Winner: ${currentPlayer}`);
            gameActive = false;
            return;
        }

        // Check for a tie.
        if (board.every(cell => cell !== "")) {
            updateStatus("Tie game!");
            gameActive = false;
            return;
        }

        // Switch turns.
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateStatus(`Turn: ${currentPlayer}`);
    });
});

// When the reset button is clicked, run resetGame.
resetButton.addEventListener("click", resetGame);

// Start the game.
resetGame();