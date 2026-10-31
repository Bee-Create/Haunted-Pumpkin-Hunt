const grid = document.getElementById("grid");
const attemptsDisplay = document.getElementById("attempts");

let pumpkinIndex;
let attempts;

function startGame() {
    grid.innerHTML = "";
    attempts = 5;
    pumpkinIndex = Math.floor(Math.random() * 9);

    attemptsDisplay.textContent = `Attempts Left: ${attempts}`;

    for (let i = 0; i < 9; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");

        tile.addEventListener("click", () => checkTile(tile, i));

        grid.appendChild(tile);
    }
}

function checkTile(tile, index) {
    if (tile.textContent !== "") return;

    if (index === pumpkinIndex) {
        tile.textContent = "🎃";

        setTimeout(() => {
            alert("🎉 You found the haunted pumpkin!");
        }, 100);

        disableBoard();
    } else {
        tile.textContent = "👻";
        attempts--;

        attemptsDisplay.textContent =
            `Attempts Left: ${attempts}`;

        if (attempts === 0) {
            revealPumpkin();

            setTimeout(() => {
                alert("💀 The ghosts win!");
            }, 100);

            disableBoard();
        }
    }
}

function revealPumpkin() {
    const tiles = document.querySelectorAll(".tile");

    tiles[pumpkinIndex].textContent = "🎃";
}

function disableBoard() {
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
        tile.style.pointerEvents = "none";
    });
}

function restartGame() {
    startGame();
}

startGame();