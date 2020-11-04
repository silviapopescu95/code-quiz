var timerEl = document.getElementById(".time-left");
var startScreenEl = document.getElementById("#start-screen");
var startButtonEl = document.getElementById("start-button");
var questionsEl = document.querySelector(".questions");
var questionTitleEl = document.getElementById("#question-title");
var choicesEl = document.getElementById("#choices");

var time = 90;
var questionIndex = 0;


function startQuiz() {
    //click to move from starting screen to quiz questions
    //startScreenEl.addEventListener("click", function(event) {
        //event.preventDefault();
      //  startScreenEl.style.display = "none";
    //})

    //Add class of aria-hidden to startScreen El to hide it
    startScreenEl.setAttribute("aria-hidden", "true");

    //show questions by removing aria-hidden attribute
    questionsEl.removeAttribute("aria-hidden");
    renderQuestion();
}

function renderQuestion() {

    //to show question title
    var currentQuestion = questions[questionIndex];
    questionTitleEl.textContent = currentQuestion.title;
    
    //render a li for each choice
    for (var i = 0; i < questions.choices[i]; i++) {
        var choicesEl = choices[i];

        var li = document.createElement("li");
        li.textContent = choicesEl;
        choicesEl.appendChild(li);
    }
    
    //create a button and add a click listener for each choice
    for (var i = 0; i < questions.choices[i]; i++) {
        choices[i].createElement("button");
        choices[i].onclick = answer;
    }
}

function answer() {
    //write a function to tell user if they answered correctly/incorrectly
}

function startTimer() {
    //starts decrementing time, displays it to 
    time--;
    timerEl.textContent = time;

    //keeps timer from going negtive
    if (time <= 0) {
        quizEnd();
    }
}

function quizEnd() {
    //displays results when quiz is over
}