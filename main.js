let boardSize;
function createBoard(){
    let input = prompt("Please enter board size: ");
    if(input > 100){
        input = 100;
    }
    boardSize = input;
    let board = document.querySelector(".board");
    for(let i = 0; i < boardSize; i++) {
        let row = document.createElement("div");
        row.className = "board-row";
        for(let j = 0; j < boardSize; j++) {
            let test = document.createElement("div");
            test.classList.add("cell");
            test.addEventListener("mouseover", ()=>{
                test.style.backgroundColor = "black";
            });
            row.append(test);
        }
        board.append(row);
    }
}

function draw() {
}

createBoard(); 
draw();
