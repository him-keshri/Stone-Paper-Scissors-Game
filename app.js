let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const  userScorePara = document.querySelector("#user-score");
const  compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock,paper,scissor
};


const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again.";
};
 
const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice =  ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
  

if (userChoice === compChoice) { 
    //Draw Game 
    drawGame(); 
} else {
    let userWin = true;
    if(userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false : true;
    }else {
        compChoice === "rock" ? false : true ;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame (userChoice);
    });
})