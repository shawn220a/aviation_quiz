const startBtn = document.querySelector("#start");

function startQuiz() {
  location.replace("../questions.html");
}

startBtn.addEventListener("click", startQuiz);