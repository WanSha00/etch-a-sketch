let message = document.querySelector("#message");
message.innerHTML = "Board: 16x16";
let boardSize = "16";
let gridColor = "pink";
let click = true;

document.addEventListener("DOMContentLoaded", function () {

    createBoard(16);

    document.querySelector("body").addEventListener("click", function (e) {

        if (e.target.tagName != "BUTTON") {

            click = !click;
            let draw = document.querySelector("#draw");
            if (click) {

                draw.innerHTML = "Draw Mode ON";

            } else {

                draw.innerHTML = "Draw Mode OFF";

            }

        }

    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function () {

        let size = prompt("Enter the size (1-100)");

        if ((size != null || !(isNaN(size))) && (size > 0 && size <= 100)) {

            createBoard(size);

            message.innerHTML = "Board: " + size + "x" + size;
            boardSize = size;

        }

    })

})

function createBoard(size) {

    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size;

    let blackBtn = document.getElementById('blackbtn');
    blackBtn.onclick = () => setColor('black');

    let randomBtn = document.getElementById('randombtn');
    randomBtn.onclick = () => setColor('random');

    let resetBtn = document.getElementById('resetbtn');
    resetBtn.onclick = () => reset();


    for (let i = 0; i < numDivs; i++) {

        let div = document.createElement("div");
        div.classList.add("grid");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);

    }

}

function colorDiv() {

    if (click) {

        if (gridColor == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = gridColor;
        }
    }


}

function setColor(color) {

    gridColor = color;

}

function reset() {

    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}




