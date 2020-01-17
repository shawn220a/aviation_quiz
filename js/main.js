const startBtn = document.querySelector("#start");

function startQuiz() {
  location.replace("../questions.html");
}

console.log(localStorage.getItem('playerlist'));

startBtn.addEventListener("click", startQuiz);