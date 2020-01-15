 const questions = [
    {
      "title": "What makes up a Thunderstorm:",
      "choices": [
        "water vapor, unstable lapse rate, upward lifting",
        "water, lightning, thunder",
        "clouds, lightning, thunder"
      ],
      "answer": "water vapor, unstable lapse rate, upward lifting"
    },
    {
      "title": "When making routine transponder code changes, pilots should avoid inadvertent selection of which code:",
      "choices": [
        "7200",
        "7000",
        "7500"
      ],
      "answer": "7500"
    },  
    {
      "title": "What does the red line on an airspeed indicator represent:",
      "choices": [
        "Maneuvering speed",
        "Never-exceed speed",
        "Turbulent or rough-air speed"
      ],
      "answer": "Never-exceed speed"
    },
    {
      "title": "The term `angle of attack` is defined as the angle between the:",
      "choices": [
        "chord line of the wing and the relative wind",
        "airplane`s longitudinal axis and that of the air striking the airfoil",
        "airplane`s center line and the relative wind"
      ],
      "answer": "chord line of the wing and the relative wind"
    },
    {
      "title": "If Receiver Autonomous Integrity Monitoring (RAIM) capability is lost in-flight:",
      "choices": [
        "the pilot may still rely on GPS derived altitude for vertical information",
        "the pilot has no assurance of the accuracy of the GPS position",
        "GPS position is reliable provided at least 3 GPS satellites are available"
      ],
      "answer": "the pilot has no assurance of the accuracy of the GPS position"
    }
  ]

var oneChoice = document.querySelector("#choiceOne");
var twoChoice = document.querySelector("#choiceTwo");
var threeChoice = document.querySelector("#choiceThree");

i = 0;
score = 0;

function loadQuestion() {
  document.querySelector("#titleHTML").innerHTML = questions[i].title;

  document.querySelector("#choiceOne").textContent = questions[i].choices[0];
  document.querySelector("#choiceTwo").textContent = questions[i].choices[1];
  document.querySelector("#choiceThree").textContent = questions[i].choices[2];
  
  if(questions[i].choices[0] === questions[i].answer) {
    oneChoice.setAttribute('data-answer', 'true');
  } else {
    oneChoice.setAttribute('data-answer', 'false');
  }
  
  if(questions[i].choices[1] === questions[i].answer) {
    twoChoice.setAttribute('data-answer', 'true');
  } else {
    twoChoice.setAttribute('data-answer', 'false');
  }
  
  if(questions[i].choices[2] === questions[i].answer) {
    threeChoice.setAttribute('data-answer', 'true');
  } else {
    threeChoice.setAttribute('data-answer', 'false');
  }
}

function isComplete() {
  if (i < questions.length) {
    loadQuestion();
  } else {
    alert('score:' + score);
  }
}

document.querySelector('#choices').addEventListener('click', function(e) {
  console.log(e.srcElement.dataset.answer);
  if (e.srcElement.dataset.answer === 'true'){
    score++;
    console.log(score);
  }
  i++;
  isComplete();
});

loadQuestion();
