let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const gencompchoice=()=>
{
    const options=["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];


}

const showWinner=(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`YOU WIN! Your ${userchoice} beats ${compchoice}`; 
        msg.style.backgroundColor= '#EAC435';
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`YOU LOOSE! Computer's ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor= '#EAC435';
    }
}
const drawgame=()=>
{
    console.log("game was draw");
    msg.innerText= "THE GAME WAS DRAW. PLAY AGAIN!";
    msg.style.backgroundColor= '#FB4D3D';
}
const playgame=(userchoice)=>
{
    const compchoice = gencompchoice();

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else{
        let userwin= true;
        if(userchoice== "rock")
        {
            userwin=compchoice=== "paper"? false:true;
        }
        else if(userchoice=="paper")
        {
            userwin=compchoice==="scissors"? false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }

        showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) =>
{
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    })
})