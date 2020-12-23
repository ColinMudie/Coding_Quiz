let secondsEl = document.querySelector("#seconds");
let startBtnEl = document.querySelector("#startBtn");
let totalSeconds = 60;
let secondsElapsed = 0;
let totalSecondsLeft = 60;
let interval;
//Question 1
let question1Text = document.createElement("h3");
let question1a = document.createElement("p");
let question1b = document.createElement("p");
let quetion1c = document.createElement("p");

//Question 2
let question2Text = document.createElement("h3");
let question2a = document.createElement("p");
let question2b = document.createElement("p");
let question2c = document.createElement("p");

//Question 3
let question3Text = document.createElement("h3");
let question3a = document.createElement("p");
let question3b = document.createElement("p");
let question3c = document.createElement("p");

// array of objects for questions
let questionArray = [
    question1 = {
        questionText: "which of the following are an example of a string?",
        a: 9,
        b: '"9"',
        c: 9.99,
    },
    question2 = {
        questionText: 'var array = ["Cats", "Dogs", "Armadillos", "Mice"]; what string will appear from console.log(array[2])?',
        a: '"Dogs"',
        b: '"Armadillos"',
        c: "undefined",
    },
    question3 = {
        questionText: "What are the 3 common statements in a for loop?",
        a: "Initialize, Load and loss",
        b: "Log, Add, and Function",
        c: "Initialize, Evaluate and Increment",
    },
]

// display the timer
function renderTimer() {
    totalSecondsLeft = totalSeconds - secondsElapsed;
    secondsEl.textContent = totalSecondsLeft;
}

// timer
function startTimer() {
    if (totalSecondsLeft > 0) {
        var interval = setInterval(function () {
            secondsElapsed++;
            renderTimer();

            if (totalSecondsLeft <= 0){
                clearInterval(interval);
                // renderTime();
            }
        }, 100);
    }
    
}

// start button 
startBtnEl.addEventListener("click", function(){
    startTimer();

});










//JS DESIGN PATTERNS - COMPOSITE


