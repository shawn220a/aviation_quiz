const startBtn = document.querySelector("#start");

function startQuiz() {
  location.replace("../questions.html");
}

console.log(localStorage.getItem('score'));

startBtn.addEventListener("click", startQuiz);