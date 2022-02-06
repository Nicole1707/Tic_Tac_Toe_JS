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
        players.setAttribute("class", "players active player");
    })

};
let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";
let playerSing = "X";


function clickedBox(element) {
    if (players.classList.contains("player")) {
        element.innerHTML=`<i class= "${playerOIcon}"></i>`;
        players.classList.add("active");
        playerSing ="o";
        element.setAttribute("id", playerSing);
    }else{
        element.innerHTML=`<i class= "${playerXIcon}"></i>`;
        players.classList.add("active");  
        element.setAttribute("id", playerSing);
    }
    selectWinner();
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random()*1000)+200).toFixed();
    setTimeout(()=>{
        bot();
    },randomDelayTime)
}
function bot(){
    playerSing="o";
    let array =[];
    for (let i = 0; i < allBox.length; i++) {
       if (allBox[i].childElementCount ==0) {
            array.push(i);
       }
        
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if (array.length >0) {
        if (players.classList.contains("player")) {
            allBox[randomBox].innerHTML=`<i class= "${playerXIcon}"></i>`;
            players.classList.remove("active");
            playerSing="x";
            allBox[randomBox].setAttribute("id", playerSing);

        }else{
            allBox[randomBox].innerHTML=`<i class= "${playerOIcon}"></i>`;
            players.classList.remove("active");  
            allBox[randomBox].setAttribute("id", playerSing);

        }
        
    }
    allBox[randomBox].style.pointerEvents = "none";
}

function getClass(idname){
    return document.querySelector(".box" + idname).id;
}

function checkClass(val1, val2, val3, sing){
    if(getClass(val1) ==sing && getClass(val2) ==sing &&getClass(val3) ==sing){
        return true;
    }
}
function selectWinner(){
    if(checkClass(1,2,3, playerSing) || 
    checkClass(4,5,6, playerSing)||
    checkClass(7,8,9, playerSing) ||
    checkClass(1,4,7, playerSing) ||
    checkClass(2,5,8, playerSing) ||
    checkClass(3,6,9, playerSing) ||
    checkClass(1,5,9, playerSing) ||
    checkClass(3,4,9, playerSing)){
     console.log(playerSing + " is the winner");   
    }
}