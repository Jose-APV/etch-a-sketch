boardSize = 16;
function createBoard(){
    let board = document.querySelector(".board");
    for(let i = 0; i < boardSize; i++) {
        let row = document.createElement("div");
        row.className = "board-row";
        for(let j = 0; j < boardSize; j++) {
            let test = document.createElement("div");
            test.classList.add("cell");
            row.append(test);
        }
        board.append(row);
    }
}

createBoard();  