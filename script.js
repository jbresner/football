document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("game-grid");
    const gridWidth = 3;
    const gridHeight = 9;
    const cells = [];
    let playerPosition = { x: 1, y: 8 }; // Start near the bottom center

    // Initialize the grid
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
            cells.push(cell);
        }
    }

    function renderGrid() {
        cells.forEach(cell => cell.classList.remove("active"));
        const playerIndex = playerPosition.y * gridWidth + playerPosition.x;
        cells[playerIndex].classList.add("active");
    }

    function movePlayer(dx, dy) {
        playerPosition.x = Math.max(0, Math.min(gridWidth - 1, playerPosition.x + dx));
        playerPosition.y = Math.max(0, Math.min(gridHeight - 1, playerPosition.y + dy));
        renderGrid();
    }

    document.getElementById("up").addEventListener("click", () => movePlayer(0, -1));
    document.getElementById("down").addEventListener("click", () => movePlayer(0, 1));
    document.getElementById("left").addEventListener("click", () => movePlayer(-1, 0));
    document.getElementById("right").addEventListener("click", () => movePlayer(1, 0));

    renderGrid();
});
