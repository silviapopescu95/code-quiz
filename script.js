var timerEl = document.getElementById("time-left");
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var questionsEl = document.querySelector("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");

var showTimer;
var time = 90;
var questionIndex = 0;

startButton.onclick = startQuiz;
timerEl.textContent = time;

function startQuiz() {
    //click to move from starting screen to quiz questions
   startScreen.setAttribute("class", "hide-start-screen")

    showTimer = setInterval(startTimer, 1000);
    renderQuestion();
}

function renderQuestion() {

    //to show question title
    var currentQuestion = questions[questionIndex];
    questionTitleEl.textContent = currentQuestion.title;
   
    //create each choice as a button
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var li = document.createElement("button");
        li.textContent = questions[questionIndex].choices[i];
        choicesEl.appendChild(li);
        li.setAttribute("class", "choice");
        li.setAttribute("value", questions[questionIndex].choices[i]);
        li.onclick = answer;
    }
}

function answer() {
    console.log(this.value);
    //write a function to tell user if they answered correctly/incorrectly
    if (this.value !== questions[questionIndex].correctAnswer) {
        console.log("wrong answer")
        time = time - 15;

        if (time < 0) {
            quizEnd();
        }
        choicesEl.innerHTML = ""; //clears away choices from previous questions
        questionIndex++;
        renderQuestion();
    }
    else if (this.value === questions[questionIndex].correctAnswer) {
        console.log("correct answer")
        choicesEl.innerHTML = ""; //clears away choices from previous questions
        questionIndex++;
        renderQuestion();
    }
}

function startTimer() {
    //starts decrementing time, displays it to 
    time--;
    timerEl.textContent = time;

    //keeps timer from going negtive
    if (time <= 0) {
        clearInterval(showTimer); //stops time from going below zero
        quizEnd();
    }
}

function quizEnd() {
    clearInterval(showTimer); //stops time from going below zero
    //displays results when quiz is over
}