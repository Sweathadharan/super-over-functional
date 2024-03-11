const strikeButton = document.getElementById("strike")
const resetButton = document.getElementById("reset")

const $team1Score=document.getElementById("score-team1")
const $team2Score=document.getElementById("score-team2")

const $team1Wicket=document.getElementById("wickets-team1")
const $team2Wicket=document.getElementById("wickets-team2")

var team1Score=0,team2Score=0, team1Wicket=0, team2Wicket=0,playerTurn =1,team1Ball=0,team2Ball=0;


const possibleOutcomes=[0,1,2,3,4,6,"W"]
function gameOver(){
    if(team1Score>team2Score) alert("IND WON THE GAME")
    if(team1Score<team2Score) alert("PAK WON THE GAME");
    if(team1Score==team2Score) alert("PLAY AGAIN");
}

function updateScore(){
    $team1Score.textContent = team1Score
    $team2Score.textContent=team2Score
    $team1Wicket.textContent=team1Wicket
    $team2Wicket.textContent=team2Wicket
}

resetButton.onclick=()=>{
    window.location.reload();
};

strikeButton.onclick=()=>{
    const randomRuns=possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];

    if(playerTurn==1){
        team1Ball++;
    
    
    document.querySelector(
        `#team1-superover div:nth-child(${team1Ball})`
        ).textContent=randomRuns;
    if(randomRuns=="W"){
    team1Wicket++;
    }else{
    team1Score+=randomRuns;
    }
    if(team1Ball==6 || team1Wicket==2)
    {
     playerTurn=2;
    }
    
    
}
updateScore();

       

if(playerTurn==2){
    team2Ball++;
document.querySelector(
    `#team2-superover div:nth-child(${team2Ball})`
    ).textContent=randomRuns;
if(randomRuns=="W"){
team2Wicket++;
}else{
team2Score+=randomRuns;
}


if(team2Ball == 6 || team2Wicket==2 || team2Score> team1Score)
{
    playerTurn=3;
    gameOver();
}


}
};
