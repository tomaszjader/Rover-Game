const numRows = prompt("Podaj liczbę wierszy:") || 10;
const numCols = prompt("Podaj liczbę kolumn:") || 10;
let roverRow = Math.floor(numRows / 2);
let roverCol = Math.floor(numCols / 2);
let movesHistory = [];


// funkcja tworząca planszę z łazikiem na środku
function createBoard() {
    const board = document.getElementById("board");
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("td");
            cell.id = `row${i}-col${j}`;
            if (i === roverRow && j === roverCol) {
                const img = document.createElement("img");
                img.id = "rover";
                img.src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Sojourner_in_cruise_configuration.gif";
                cell.appendChild(img);
            }
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}

// funkcja obsługująca ruch łazika do przodu
function moveForward() {
    if (roverRow > 0) {
        movesHistory.push("Up");
        const currentTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        currentTd.innerHTML = "";
        roverRow--;
        const newTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        const img = document.createElement("img");
        img.id = "rover";
        img.src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Sojourner_in_cruise_configuration.gif";
        newTd.appendChild(img);
    }
}

// funkcja obsługująca ruch łazika do tyłu
function moveBackward() {
    if (roverRow < numRows - 1) {
        movesHistory.push("Down");
        const currentTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        currentTd.innerHTML = "";
        roverRow++;
        const newTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        const img = document.createElement("img");
        img.id = "rover";
        img.src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Sojourner_in_cruise_configuration.gif";
        newTd.appendChild(img);
    }
}

// funkcja obsługująca ruch łazika w lewo
function moveLeft() {
    if (roverCol > 0) {
        movesHistory.push("Left");
        const currentTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        currentTd.innerHTML = "";
        roverCol--;
        const newTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        const img = document.createElement("img");
        img.id = "rover";
        img.src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Sojourner_in_cruise_configuration.gif";
        newTd.appendChild(img);
    }
}

// funkcja obsługująca ruch łazika w prawo
function moveRight() {
    if (roverCol < numCols - 1) {
        movesHistory.push("Right");
        const currentTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        currentTd.innerHTML = "";
        roverCol++;
        const newTd = document.getElementById(`row${roverRow}-col${roverCol}`);
        const img = document.createElement("img");
        img.id = "rover";
        img.src = "https://upload.wikimedia.org/wikipedia/commons/1/13/Sojourner_in_cruise_configuration.gif";
        newTd.appendChild(img);
    }
}
document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
        moveForward();
    } else if (event.code === "ArrowDown") {
        moveBackward();
    } else if (event.code === "ArrowLeft") {
        moveLeft();
    } else if (event.code === "ArrowRight") {
        moveRight();
    }
}); // obsługa ruchu łazika za pomocą klawiatury
// funkcja wyświetlająca historię ruchów łazika
function showHistory() {
    alert(movesHistory.join(", "));
}
