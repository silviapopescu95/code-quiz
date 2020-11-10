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
   
    //create each choice as a button
    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var li = document.createElement("button");
        li.textContent = questions[questionIndex].choices[i];
        choicesEl.appendChild(li);
        li.setAttribute("class", "choice");
        var input = li.setAttribute("option", questions[questionIndex].choices[i]);
        var correctAnswer = li.setAttribute("correct-answer", questions[questionIndex].correctAnswer);

        li.onclick = answer;
        //li.getAttribute("button", addEventListener("click", answer));
        //li.onclick = answer(input, correctAnswer);
    }
}

function answer(input, correctAnswer) {
    console.log("dick");
    //write a function to tell user if they answered correctly/incorrectly
    if (input !== correctAnswer) {
        time = time - 15;

        if (time < 0) {
            quizEnd();
        }
        li.innerHTML = "";
        questionIndex++;
        renderQuestion();
    }
    else if (input === correctAnswer) {
        li.innerHTML = "";
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
        quizEnd();
    }
}

function quizEnd() {
    //displays results when quiz is over
}