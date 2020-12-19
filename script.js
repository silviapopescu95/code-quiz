var timerEl = document.getElementById("time-left");
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start-button");
var questionsEl = document.getElementById("questions");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var submitButton = document.getAnimations("submit-button");
var finalScore = document.getElementById("final-score");

var showTimer;
var time = 90;
var questionIndex = 0;

endScreen.setAttribute("class", "hide-end-screen")
startButton.onclick = startQuiz;
//submitButton.onclick = saveHighscore;
timerEl.textContent = time;

function startQuiz() {
    //click to move from starting screen to quiz questions
   startScreen.setAttribute("class", "hide-start-screen")
    //endScreen.setAttribute("class", "hide-end-screen")

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

    // if (questionIndex === questions.length) {
    //     endQuiz();
    // }
}

function answer() {
    console.log(this.value);
    //write a function to tell user if they answered correctly/incorrectly
    if (this.value !== questions[questionIndex].correctAnswer) {
        console.log("wrong answer")
        time = time - 15;

        if (time <= 0) {
            endQuiz();
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

    //when the last question is answered..
    if (questionIndex === questions.length) {
        endQuiz();
    } 
}

function startTimer() {
    //starts decrementing time, displays it
    time--;
    timerEl.textContent = time;
    
    //keeps timer from going negtive
    if (time <= 0) {
        clearInterval(showTimer); //stops time from going below zero
        endQuiz();
    }
}

function endQuiz() {
    console.log(finalScore.textContent);

    //hides title of last question
    questionTitleEl.setAttribute("class", "hide-questions")
    
    clearInterval(showTimer); //stops time from going below zero

    //displays the end screen
    endScreen.removeAttribute("class")

    
    //displays results when quiz is over
    //var finalScore = document.getElementById("final-score");
    finalScore.textContent = time;    
}

// function saveHighscore() {
//     //var initialsEl = document.getElementById("initials");
//     var initials = document.getElementById("initials").value;
//     localStorage.setItem("highscore", highscore);
//     var lastUser = localStorage.getItem("highscores");
// }