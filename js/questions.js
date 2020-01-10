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


console.log(questions[0].title);



i = 0;

document.querySelector("#titleHTML").innerHTML = questions[i].title;

var output = '';

for (var j = 0; j < 3; j++) {
  output += '<button>' + questions[i].choices[j] + '</button>' + '</br>';
}

document.querySelector(".choices").innerHTML = output;