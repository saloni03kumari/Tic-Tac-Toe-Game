let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newGame=document.querySelector("#new-game");
let message=document.querySelector(".message")
let msg=document.querySelector("#msg");
let turnO=true;//playerX,playerO
//2D arrays for win pattern
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;

        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
        
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulations,Winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes();



}
const checkWinner = () => {
    for (let p of winPatterns){
        let pos1Val=boxes[p[0]].innerText;
        let pos2Val=boxes[p[1]].innerText;
        let pos3Val=boxes[p[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log("winner",pos1Val );
                showWinner(pos1Val);

            }
        }
    }
};
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    message.classList.add("hide");

};
newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);

