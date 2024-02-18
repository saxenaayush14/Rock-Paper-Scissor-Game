let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#compscore");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame=()=>{
    msg.innerText="Game was Draw,Play Again!";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userwin,userchoice,compchoice)=>{
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
      }
}

const playgame=(userchoice)=>{
    //GENERATE COMPUTER CHOICE
    const compchoice=gencompchoice();

    if(userchoice===compchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //compchoice=scissors,paper
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //compchoice=rock,scissors
            userwin=compchoice==="scissors"?false:true;
        }
        else if(userchoice==="scissors"){
            //compchoice=rock,paper
            userwin=compchoice==="rock"?false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})