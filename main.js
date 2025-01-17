let boardSize = 16;
let fadeMode = false;
let regularMode = true;
let randomMode = false;
let eraserMode = false;
let fadeValue = 255;
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
                if(regularMode) {
                    color = "black";
                }else if(randomMode){
                    let red = Math.random() * (256 - 0) + 0;
                    let green = Math.random() * (256 - 0) + 0;
                    let blue = Math.random() * (256 - 0) + 0;
                    color = "rgb("+red+","+green+","+blue+")";
                }else if(eraserMode){
                    color = "white";
                }else{
                    if(fadeValue > 0){
                        fadeValue -= 25.5;
                        color = "rgb("+fadeValue+","+fadeValue+","+fadeValue+")";
                    }
                    
                }
                test.style.backgroundColor = color;
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
        let errorMessage = document.querySelector(".error-message"); 
        if(isNaN(userInput)) {
            errorMessage.textContent = "Please enter numbers only";
            errorMessage.style.color = "red";
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
            errorMessage.textContent = "";
            createBoard();
        }
    });
}

function changeModeListener(){
    let colorModeBtn = document.querySelector("#crack-mode");
    let regularModeBtn = document.querySelector("#normal-mode");
    let fadeModeBtn = document.querySelector("#fade-mode");
    let eraserBtn = document.querySelector("#eraser");
    let clearBoardBtn = document.querySelector("#clear-board");
    colorModeBtn.addEventListener("click", ()=>{
        randomMode = true;
        regularMode = false;
        fadeMode = false;
        eraserMode = false;
    });
    fadeModeBtn.addEventListener("click", ()=>{
        randomMode = false;
        regularMode = false;
        fadeMode = true;
        eraserMode = false;
        fadeValue = 255;
    });
    regularModeBtn.addEventListener("click", ()=>{
        randomMode = false;
        regularMode = true;
        fadeMode = false;
        eraserMode = false;
    });
    clearBoardBtn.addEventListener("click", ()=>{
        let board = document.querySelector(".board");
            for(let i = 0; i < boardSize; i++) {
                board.removeChild(document.querySelector(".board-row"));
            }
        createBoard();
    });
    eraserBtn.addEventListener("click", ()=>{
        randomMode = false;
        regularMode = false
        fadeMode = false;
        eraserMode = true;
    });
}
createBoard(); 
changeBoardSizeListener();
changeModeListener();

