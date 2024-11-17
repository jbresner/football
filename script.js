document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("game-grid");
    const gridSize = 10;
    const cells = [];
    let playerPosition = { x: 4, y: 9 };

    // Initialize the grid
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
            cells.push(cell);
        }
    }

    function renderGrid() {
        cells.forEach(cell => cell.classList.remove("active"));
        const playerIndex = playerPosition.y * gridSize + playerPosition.x;
        cells[playerIndex].classList.add("active");
    }

    function movePlayer(dx, dy) {
        playerPosition.x = Math.max(0, Math.min(gridSize - 1, playerPosition.x + dx));
        playerPosition.y = Math.max(0, Math.min(gridSize - 1, playerPosition.y + dy));
        renderGrid();
    }

    document.getElementById("up").addEventListener("click", () => movePlayer(0, -1));
    document.getElementById("down").addEventListener("click", () => movePlayer(0, 1));
    document.getElementById("left").addEventListener("click", () => movePlayer(-1, 0));
    document.getElementById("right").addEventListener("click", () => movePlayer(1, 0));

    renderGrid();
});
