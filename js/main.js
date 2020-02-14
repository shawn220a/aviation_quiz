const startBtn = document.querySelector("#start");
const scoresBtn = document.querySelector("#highscores");

let playerlist = localStorage.getItem('playerList')

function startQuiz() {
  location.replace("questions.html");
}

function showScores() {
  console.log(playerlist);
}

startBtn.addEventListener("click", startQuiz);

scoresBtn.addEventListener("click", showScores);