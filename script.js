/*
script.js
N Leahy
15 Nov 22

Using if statements, create a rock, paper, scissors game.
 
The outcome of the game is determined by 3 simple rules:
- Rock 1 beats scissors 3.
- Scissors 3 beats paper 2.
- Paper 2 beats rock 1.
*/


    function check(){
        var userPick = document.querySelector('input[name="game"]:checked').value;
        var compPick = Math.floor(Math.random() * 3)+1;
        console.log(compPick);

    if(userPick==compPick){
        document.getElementById("rps").innerHTML="Computer picked no."+compPick+", You draw.";
    }

    //user picks rock
    else if(userPick==1){
        if(compPick==2){
             document.getElementById("rps").innerHTML="Computer picked no."+compPick+", You lose.";
        }
        else{
             document.getElementById("rps").innerHTML="Computer picked no."+compPick+", You win.";
        }
    }
    //user picks paper
    else if(userPick==2){
        if(compPick==3){
             document.getElementById("rps").innerHTML="Computer picked no."+compPick+", You lose.";
        }
        else{
             document.getElementById("rps").innerHTML="Computer picked no."+compPick+", You win.";
        }
    }
    //user picks scissors
    else if(userPick==3){
        if(compPick==1){
             document.getElementById("rps").innerHTML="Computer picked no."+compPick+", You lose.";
        }
        else{
            document.getElementById("rps").innerHTML="Computer picked no."+compPick+", You win.";
        }
    }
}