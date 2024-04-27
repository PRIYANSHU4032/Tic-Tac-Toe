let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector(".msg-conatiner");
let msgid = document.querySelector("#msg");

let turnO = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count =0;

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "X";
            turnO = false;
        }else{
            box.innerText = "O";
            turnO = true;
        }
        count++;
        box.disabled = true;
        
    

        checkWinner();
        
    });
});

const showWinner = (Winner)=>{
    msgid.innerText = `Congrutulation , Winner is ${Winner}`
    msg.classList.remove("hide");
    disablebox();
    //console.log(count);
}

const disablebox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = ()=>{
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                

                showWinner(pos1val);
                
            }
        }

        if(count > 9){
            msgid.innerText = "Match is Draw";
            msg.classList.remove("hide");
            disablebox();
        }
    }
}


const resetgame = ()=>{
    turnO = true;
    enablebox();
    msg.classList.add("hide");
    count = 0;

}

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);