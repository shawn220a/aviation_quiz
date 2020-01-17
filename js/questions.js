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
    },
    {
      "title": "The correct method of stating 5,500 feet MSL to ATC is:",
      "choices": [
        "‘FIVE POINT FIVE’",
        "‘FIFTY-FIVE HUNDRED FEET MSL’",
        "‘FIVE THOUSAND FIVE HUNDRED’"
      ],
      "answer": "‘FIVE THOUSAND FIVE HUNDRED’"
    },
    {
      "title": "Unless otherwise authorized two-way radio communications with Air Traffic Control are required for landings or takeoffs at all towered airports:",
      "choices": [
        "regardless of weather conditions",
        "only when weather conditions are less than VFR",
        "within Class D airspace only when weather conditions are less than VFR"
      ],
      "answer": "regardless of weather conditions"
    },
    {
      "title": "Pre-takeoff briefing of passengers about the use of seat belts for a flight is the responsibility of:",
      "choices": [
        "all passengers",
        "the pilot in command",
        "the right seat pilot"
      ],
      "answer": "the pilot in command"
    },
    {
      "title": "Your cousin wants you to take him flying. You must have made at least three takeoffs and three landings in your aircraft within the preceding:",
      "choices": [
        "90 days",
        "60 days",
        "30 days"
      ],
      "answer": "90 days"
    },
    {
      "title": "A 100-hour inspection was due at 3302.5 hours. The 100-hour inspection was actually done at 3309.5 hours. When is the next 100-hour inspection due:",
      "choices": [
        "3312.5 hours",
        "3395.5 hours",
        "3402.5 hours"
      ],
      "answer": "3402.5 hours"
    }
  ]

let oneChoice = document.querySelector("#choiceOne");
let twoChoice = document.querySelector("#choiceTwo");
let threeChoice = document.querySelector("#choiceThree");

let timer = document.querySelector("#timer");

i = 0;
score = 0;

// console.log(timer);

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
    alert('score: ' + score);
  }
}

document.querySelector('#choices').addEventListener('click', function(e) {
  if (e.srcElement.dataset.answer === 'true'){
    score += 10;
  }
  i++;
  isComplete();
});

loadQuestion();
