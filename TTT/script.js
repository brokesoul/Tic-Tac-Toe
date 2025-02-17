let playero = true;
let grid = document.querySelectorAll(".box");
let newbtn = document.querySelector("#newgame");
let rbtn = document.querySelector("#rbtn");
let msg = document.querySelector("#msg");
let msgs = document.querySelector(".msgs").style
let isdraw = true;
let cnt=0;

let hideboxes = () => {
    for(let box of grid) {
        box.disabled = true; 
        box.style.visibility = "hidden"; 
        //all boxes will be hidden and a msg will be displayed
    }
}

let printxo =(evt) =>{
    let box = evt.target; //has to know where is the target where evt is triggered
    if(playero) {
        box.innerText = "O" ;
        playero = false;
    }
    else {
        box.innerText = "X";
        playero = true;
    } 
    box.disabled = true;
    if(checkwin()!=0) {
    hideboxes();
    let winner = (playero)?"PLAYER X":"PLAYER O" ;

    msg.innerText = `Congratulations ${winner}`;    
    msgs.display = "flex";
    msgs.justifyContent = "center";

        //congratulations ki tayyari msg m 
        console.log(winner) ; //just for us
        isdraw=false;
    }
    cnt++;//DRAW CONDITION
    if(cnt==9 && isdraw==true){
        hideboxes();
        msg.innerText = `ITS A DRAW`;    
        msgs.display = "flex";
        msgs.justifyContent = "center";
        console.log("Its a Draw"); 
    }

}



/*Here every iter will be a box(element node) so we can add ev listner to every node*/ 
for(let box of grid){
    box.addEventListener("click",printxo); 
}


let winnposs =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],
[2,4,6]];

function checkwin(){
    for(let pattern of winnposs){
        let val1 = grid[pattern[0]].innerText;
        let val2 = grid[pattern[1]].innerText;
        let val3 = grid[pattern[2]].innerText;

        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2 && val3==val2){
                return val1;
            }
        }
    }
    return 0;
}

let newgamebegins = () => {
    msg.innerText = "";
    for(let box of grid) {
        box.disabled = false;
        box.innerText="";
        box.style.visibility = "visible"; //all boxes become visible
    }
    msgs.display = "none"; //just turn of the display of msg
  
    isdraw = true;
    cnt=0;
}
let resetgamebegins = () => {
    for(let box of grid) {
        box.disabled = false;
        box.innerText="";
    }
    isdraw = true;
    cnt=0;
}
newbtn.addEventListener("click",newgamebegins);
rbtn.addEventListener("click",resetgamebegins);
