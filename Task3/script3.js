let cells = document.querySelectorAll(".cell");
let msg = document.getElementById("msg");
let reset = document.getElementById("reset");
let turn = "X";
let win = false;

let wins = [
 [0,1,2], [3,4,5], [6,7,8],
 [0,3,6], [1,4,7], [2,5,8],
 [0,4,8], [2,4,6]
];

cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
        if(cell.innerText=="" && !win){
            cell.innerText = turn;
            checkWinner();
            turn = turn=="X" ? "O" : "X";
            if(!win) msg.innerText = "Turn: " + turn;
        }
    })
});

function checkWinner(){
    wins.forEach(combo=>{
        let [a,b,c] = combo;

        if(cells[a].innerText &&
           cells[a].innerText == cells[b].innerText &&
           cells[a].innerText == cells[c].innerText){
            msg.innerText = "Winner: " + cells[a].innerText;
            win = true;
        }
    });

    // Draw
    if(!win){
        let filled = [...cells].every(c => c.innerText!="");
        if(filled) msg.innerText = "Match Draw!";
    }
}

reset.addEventListener("click",()=>{
    cells.forEach(c => c.innerText="");
    win=false;
    turn="X";
    msg.innerText="Turn: X";
});
