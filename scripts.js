const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onClick", "clickedBox(this)")
        
    }
    selectXBtn.addEventListener("click",()=>{
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    })
    selectOBtn.addEventListener("click",()=>{
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute("class", "players active");
    })

};
let playerXIcon = "fas fa-times"
let playerOIcon = "far fa-circles"

function clickedBox(element) {

}