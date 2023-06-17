let message = document.querySelector("#message");
message.innerHTML = "Board: 16x16";
let boardSize = "16";
let gridColor = "pink";

document.addEventListener("DOMContentLoaded", function(){

    createBoard(16);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){       

        let size = prompt("Enter the size");

        if((size!=null || !(isNaN(size))) && (size>0 && size<=100)){

            createBoard(size);
        
            message.innerHTML = "Board: " + size + "x" + size;
            boardSize = size;

        }
       
    })    

   // drawColor(gridColor);
    

    

})

function createBoard(size){

    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size;

    for(let i=0; i<numDivs; i++){

        let div = document.createElement("div");
        div.classList.add("grid");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);

    }

}

function colorDiv(){

    if(gridColor == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else{
        this.style.backgroundColor = gridColor;
    }

}

function setColor(color){

    gridColor = color;

}

function reset(){

    let divs = document.querySelectorAll("div");
    divs.forEach( (div) => div.style.backgroundColor = "white");
}

function drawColor(color){  

    let grids = document.querySelectorAll(".grid");

    for(let i=0; i<grids.length; i++){
        grids[i].addEventListener("mouseover", function(){
          
            if(gridColor == "random"){
                grids[i].style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }else{
                grids[i].style.backgroundColor = gridColor;
            }
            
        })
    }
}


