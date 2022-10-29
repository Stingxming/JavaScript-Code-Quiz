// // 1. create button
// startButtonEl = document.getElementById("playgame");
// startButtonEl.addEventListener("click", startQuiz);
// function startQuiz() {
//   initPrompt();
//   console.log("Hello");
//   startTimer();
// }
// // 2. start timer

// var secondsLeft = 0;
// var startQuiz;
// setTime();
// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     counter.textContent = secondsLeft + " left on the clock.";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);

//       sendMessage();
//     }
//   }, 1000);
// }

// // 3. a question appear to user with 4 (text)

// var questions = [
//   {
//     prompt: "What is JavaScript",
//     answer: "Language",
//     choices: ["App", "Language", "Coffee", "Website"],
//     prompt: "What is JavaScript used for?",
//     answer: "Logic",
//     choices: ["Networking", "Display", "Connectivity", "Logic"],
//     prompt: "Why is JavaScript Hard for Beginners?",
//     answer: "The syntax is complex",
//     choices: [
//       "It's confusing",
//       "The syntax is complex",
//       "For loops",
//       "Functions",
//     ],
//     prompt: "Who hates JavaScript?",
//     answer: "Mat",
//     choices: ["John", "Dez", "Mat", "Ben"],
//   },
// ];
// var score = 0;

// function initPrompt() {
//   for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer) {
//       score++;
//       alert("BOOYA!");
//     } else {
//       alert("NOPE!");
//     }
//   }
// }

// // 4. timer counts down from 5 minutes

// timeInt = setInterval(function () {
//   if (timeLeft > 0) {
//     timerEl.textContent = "Time: " + timeLeft;
//     timeLeft--;
//   } else {
//     timerEl.textContent = "";
//     clearInterval(timeInt);
//     stopGame();
//   }
// }, 1000);

// 5. the quiz ends when the timer gets to 0

var headerEl = document.querySelector(".header");
var startBtnEl = document.querySelector("#startBtn");
var mainHead = document.querySelector("#main-head");
var mainP = document.querySelector("#main-p");
var timerEl = document.querySelector("#timer");
var pageContentEl = document.querySelector(".page-content");
var highscoreBtnEl = document.querySelector(".view-high-score");
var questionCount = 0;
var questionNum = {};

var timeLeft = 0;
timerEl.textContent = "Time: " + timeLeft;

var correctAns = document.createElement("div");
correctAns.className = "user-answer";
correctAns.textContent = "Previous Question: BOOYAH!";
var incorrectAns = document.createElement("div");
incorrectAns.className = "user-answer";
incorrectAns.textContent = "Previous Question: NOPE!";

var questionList = [
  {
    question: "What is JavaScript?",
    answerOne: "Language",
    answerTwo: "Coffee",
    answerThree: "App",
    answerFour: "Document",
    solution: "question-btn-one",
  },
  {
    question: "Why is JavaScript important?",
    answerOne: "Interactivity",
    answerTwo: "Appearance",
    answerThree: "Speed",
    answerFour: "Security",
    solution: "question-btn-one",
  },
  {
    question: "How do we learn JavaScript?",
    answerOne: "Stack Overflow",
    answerTwo: "w3 Schools",
    answerThree: "Google",
    answerFour: "All of the above",
    solution: "question-btn-four",
  },
  {
    question: "How does JavaScript help CSS?",
    answerOne: "It improves the styling",
    answerTwo: "It boosts speed",
    answerThree: "It increases useability",
    answerFour: "All of the Above",
    solution: "question-btn-four",
  },
  {
    question: "Why is JavaScript difficult?",
    answerOne: "It is not",
    answerTwo: "It requires practice",
    answerThree: "It has a lot of rules",
    answerFour: "You are not smart",
    solution: "question-btn-two",
  },
  {
    question: "What is your favorite thing about JavaScript?",
    answerOne: "It is easy to learn",
    answerTwo: "It is fun to learn",
    answerThree: "It pays well",
    answerFour: "It is easy to get a job",
    solution: "question-btn-four",
  },
];

var questionHead = document.createElement("h1");
questionHead.className = "question-head";
var questionDiv = document.createElement("ol");
questionDiv.className = "question-list";
var questionBtnOne = document.createElement("button");
questionBtnOne.className = "question-btn-one";
questionBtnOne.id = "question-btns";
var questionBtnTwo = document.createElement("button");
questionBtnTwo.className = "question-btn-two";
questionBtnTwo.id = "question-btns";
var questionBtnThree = document.createElement("button");
questionBtnThree.className = "question-btn-three";
questionBtnThree.id = "question-btns";
var questionBtnFour = document.createElement("button");
questionBtnFour.className = "question-btn-four";
questionBtnFour.id = "question-btns";
var scoreForm = document.createElement("form");
var userScore = document.createElement("input");
userScore.className = "user-score";
userScore.type = "text";
userScore.placeholder = "Enter initials";
scoreForm.appendChild(userScore);
var scoreBtn = document.createElement("button");
scoreBtn.className = "submit-btn";
scoreBtn.type = "submit";
scoreBtn.textContent = "Submit Highscore";
scoreForm.appendChild(scoreBtn);
var goBackBtn = document.createElement("button");
goBackBtn.className = "go-back";
goBackBtn.textContent = "Go Back";
var clearScoreBtn = document.createElement("button");
clearScoreBtn.className = "clear-score";
clearScoreBtn.textContent = "Clear Highscores";
var startGame = function () {
  timeLeft = 75;
  mainHead.remove();
  mainP.remove();
  startBtnEl.remove();

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

  createQuestion();
};

var createQuestion = function () {
  questionHead.textContent = questionList[questionCount].question;
  pageContentEl.appendChild(questionHead);
  questionDiv.textContent = "";
  pageContentEl.appendChild(questionDiv);
  questionBtnOne.textContent = questionList[questionCount].answerOne;
  questionDiv.appendChild(questionBtnOne);
  questionBtnTwo.textContent = questionList[questionCount].answerTwo;
  questionDiv.appendChild(questionBtnTwo);
  questionBtnThree.textContent = questionList[questionCount].answerThree;
  questionDiv.appendChild(questionBtnThree);
  questionBtnFour.textContent = questionList[questionCount].answerFour;
  questionDiv.appendChild(questionBtnFour);

  var questionOneBtnEl = document.querySelector(".question-btn-one");
  questionOneBtnEl.addEventListener("click", newQuestion);
  var questionTwoBtnEl = document.querySelector(".question-btn-two");
  questionTwoBtnEl.addEventListener("click", newQuestion);
  var questionThreeBtnEl = document.querySelector(".question-btn-three");
  questionThreeBtnEl.addEventListener("click", newQuestion);
  var questionFourBtnEl = document.querySelector(".question-btn-four");
  questionFourBtnEl.addEventListener("click", newQuestion);
};

var newQuestion = function (event) {
  correctAns.remove();
  incorrectAns.remove();

  var btnPressed = event.target;
  if (
    btnPressed.className === questionList[questionCount].solution &&
    questionCount < questionList.length - 1
  ) {
    questionCount++;
    createQuestion();
    pageContentEl.appendChild(correctAns);
  } else if (
    btnPressed.className != questionList[questionCount].solution &&
    questionCount < questionList.length - 1
  ) {
    timeLeft -= 10;
    questionCount++;
    createQuestion();
    pageContentEl.appendChild(incorrectAns);
  } else if (btnPressed.className === questionList[questionCount].solution) {
    stopGame();
    pageContentEl.appendChild(correctAns);
    return;
  } else {
    timeLeft -= 10;
    stopGame();
    pageContentEl.appendChild(incorrectAns);
    return;
  }
};

function stopGame() {
  if (timeLeft >= 0) {
    timerEl.textContent = "Time: " + timeLeft;
  } else {
    timeLeft = 0;
    timerEl.textContent = "Time: " + timeLeft;
  }
  questionHead.textContent = "You Finished the Quiz!";
  questionDiv.textContent = "Dun, Dun, Dun...your final score is " + timeLeft;
  questionDiv.appendChild(scoreForm);
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem(userScore.value, timeLeft);
    highScore();
  });
}

var highScore = function () {
  try {
    clearInterval(timeInt);
  } catch {}
  headerEl.remove();
  mainHead.remove();
  mainP.remove();
  startBtnEl.remove();
  correctAns.remove();
  incorrectAns.remove();

  pageContentEl.appendChild(questionHead);
  pageContentEl.appendChild(questionDiv);

  questionHead.textContent = "High Scores";
  questionDiv.textContent = "";
  var highScoreList = [];
  for (let i = 0; i < localStorage.length; i++) {
    highScoreList.push(
      localStorage.getItem(localStorage.key(i)) + " - " + localStorage.key(i)
    );
    highScoreList.sort().reverse();
  }
  for (let i = 0; i < highScoreList.length; i++) {
    var highScoreListItem = document.createElement("li");
    highScoreListItem.className = "score-list";
    highScoreListItem.textContent = highScoreList[i];
    questionDiv.append(highScoreListItem);
  }

  pageContentEl.appendChild(goBackBtn);
  pageContentEl.appendChild(clearScoreBtn);

  goBackBtn.addEventListener("click", goBack);
  clearScoreBtn.addEventListener("click", clearScore);
};

var goBack = function () {
  window.location.reload();
};

var clearScore = function () {
  localStorage.clear();
  alert("The high scores have been cleared");
  window.location.reload();
};

startBtnEl.addEventListener("click", startGame);
highscoreBtnEl.addEventListener("click", highScore);
