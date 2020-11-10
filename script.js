var timerEl = document.getElementById("time-left");
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var questionsEl = document.querySelector("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");

var time = 90;
var questionIndex = 0;

startButton.onclick = startQuiz;

function startQuiz() {
    //click to move from starting screen to quiz questions
   startScreen.setAttribute("class", "hide-start-screen")

    startTimer();
    
    renderQuestion();
}

function renderQuestion() {

    //to show question title
    var currentQuestion = questions[questionIndex];
    questionTitleEl.textContent = currentQuestion.title;
   
    
    //render a li for each choice
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
       
        var li = document.createElement("li");
        li.textContent = questions[questionIndex].choices[i];
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