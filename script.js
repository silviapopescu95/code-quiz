var timerEl = document.querySelector(".timer");
var startScreenEl = document.getElementById("#start-screen");
var startButtonEl = document.getElementById("start-button");
var questionsEl = document.querySelector(".questions");
var questionTitleEl = document.getElementById("#question-title");
var choicesEl = document.getElementById("#choices");

var time = 90;
var questionIndex = i;
//var currentQuestion;

function startQuiz() {
    startScreenEl.addEventListener("click", function(event) {
        event.preventDefault();
        startScreenEl.style.display = "none";
    })
    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[questionIndex];
    questionTitleEl.textContent = currentQuestion.title;
    console.log(currentQuestion);
}