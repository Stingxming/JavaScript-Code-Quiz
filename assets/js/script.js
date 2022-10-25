// 1. create button
startButtonEl = document.getElementById("start-btn")
startButtonEl.addEventListener("click", startQuiz) 
function startQuiz() {
    console.log("Hello")
}
// 2. start timer 

var secondsLeft = 66666;
var startQuiz
setTime()
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    counter.textContent = secondsLeft + " left on the clock.";

    if(secondsLeft === 0) {

      clearInterval(timerInterval);

      sendMessage();
    }

  }, 1000);
}

// 3. a question appear to user with 4 (text)

var questions = [
    {
        prompt: "",
        answer: ""
    },
]
var score = 0;

// 4. timer counts down from 5 minutes

// 5. the quiz ends when the timer gets to 0

