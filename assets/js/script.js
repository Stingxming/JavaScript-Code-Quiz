// 1. create button
startButtonEl = document.getElementById("playgame");
startButtonEl.addEventListener("click", startQuiz);
function startQuiz() {
  initPrompt();
  console.log("Hello");
  startTimer();
}
// 2. start timer

var secondsLeft = 0;
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
    prompt: "What is JavaScript",
    answer: "Language",
    choices: ["App", "Language", "Coffee", "Website"],
    prompt: "What is JavaScript used for?",
    answer: "Logic",
    choices: ["Networking", "Display", "Connectivity", "Logic"],
    prompt: "Why is JavaScript Hard for Beginners?",
    answer: "The syntax is complex",
    choices: [
      "It's confusing",
      "The syntax is complex",
      "For loops",
      "Functions",
    ],
    prompt: "Who hates JavaScript?",
    answer: "Mat",
    choices: ["John", "Dez", "Mat", "Ben"],
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

timeInt = setInterval(function () {
  if (timeLeft > 0) {
    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;
  } else {
    timerEl.textContent = "";
    clearInterval(timeInt);
    stopGame();
  }
}, 1000);

// 5. the quiz ends when the timer gets to 0
