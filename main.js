let boardSize = 16;
function createBoard(){
    // let input = prompt("Please enter board size: ");
    let pixel_header = document.querySelector("#pixel-title");
    pixel_header.textContent = boardSize + "x" + boardSize;
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
function changeBoardSizeListener() {
    let changePixelSizeBtn = document.querySelector("#create");
    changePixelSizeBtn.addEventListener("click", ()=>{
        let userInputTag = document.querySelector(".pixel-size");
        let userInput = +userInputTag.value ?? "null";
        if(isNaN(userInput)) {
            let errorMessage = document.createElement("a");
            errorMessage.textContent = "Please enter numbers only";
        }else{
            let board = document.querySelector(".board");
            for(let i = 0; i < boardSize; i++) {
                board.removeChild(document.querySelector(".board-row"));
            }
            boardSize = userInput;
            if(userInput > 100){
                userInput = 100;
            }
            boardSize = userInput;
            createBoard();
        }
    });
}

createBoard(); 
changeBoardSizeListener();

