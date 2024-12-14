function createBoard(){
    let board = document.querySelector(".board");
    let test = document.createElement("div");
    test.classList.add("square");
    test.textContent = "Hello";
    board.appendChild(test);

}

createBoard();