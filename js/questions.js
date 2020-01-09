
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var questions = response.questions;
      console.log(questions);

      document.querySelector("#titleHTML").innerHTML = questions[0].title;
      
      var output = '';
      for(var i = 0;i < 3;i++){
        output += '<button>'+questions[0].choices[i]+'</button>' + '</br>';
      }
      
      document.querySelector(".choices").innerHTML = output;
      
    }
  };

  xhttp.open("GET", "./js/questions.json", true);
  xhttp.send();