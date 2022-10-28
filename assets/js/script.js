// 1. create button
startButtonEl = document.getElementById("playgame");
startButtonEl.addEventListener("click", startQuiz);
function startQuiz() {
  console.log("Hello");
}
// 2. start timer

var secondsLeft = 1000;
var startQuiz;
setTime();
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    counter.textContent = secondsLeft + " left on the clock.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);

      sendMessage();
    }
  }, 1000);
}

// 3. a question appear to user with 4 (text)

var questions = [
  {
    prompt: "What is the color of the sky?",
    answer: "Blue",
    choices: ["Blue", "Red", "Yellow", "Green"],
  },
];
var score = 0;

function initPrompt() {
  for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
      score++;
      alert("BOOYA!");
    } else {
      alert("NOPE!");
    }
  }
}

// 4. timer counts down from 5 minutes

// 5. the quiz ends when the timer gets to 0
