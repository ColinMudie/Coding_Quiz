let secondsEl = document.querySelector("#seconds");
let startBtnEl = document.querySelector("#startBtn");
let totalSeconds = 60;
let secondsElapsed = 0;
let totalSecondsLeft = 60;
let interval;
let answer = "";
let buttonAEl = document.querySelector("#answerA");
let buttonBEl = document.querySelector("#answerB");
let buttonCEl = document.querySelector("#answerC");
let qText = document.querySelector("#qText");
let questionsEl = document.querySelector(".questions");
let userPick = '';
let currentArray = 0;
let currentScore = 0;
let scoreEl = document.querySelector('#total-score');
questionsEl.setAttribute('style', 'display: none;');
let scoreboardEl = document.querySelector('#scoreboard');
var userHighScore = [];

//object to store the name and highscore to.
let user = {
    name: '',
    highscore: currentScore
};

// array of objects for questions
let questionArray = [
    question1 = {
        questionText: "which of the following are an example of a string?",
        a: 9,
        b: '"9"',
        c: 9.99,
        answer: '"9"'
    },
    question2 = {
        questionText: 'var array = ["Cats", "Dogs", "Armadillos", "Mice"]; what string will appear from console.log(array[2])?',
        a: '"Dogs"',
        b: '"Armadillos"',
        c: "undefined",
        answer: '"Armadillos"'
    },
    question3 = {
        questionText: "What are the 3 common statements in a for loop?",
        a: "Initialize, Load and loss",
        b: "Log, Add, and Function",
        c: "Initialize, Evaluate and Increment",
        answer: "Initialize, Evaluate and Increment"
    },
]


//prompt for name to add to scoreboard
function beginGame() {
    return prompt("Name: ");
}



user.name = beginGame();
console.log(user);

function gameOver() {
    window.localStorage.setItem("name", JSON.stringify(user));
    // localStorage.setItem("highschore", JSON.stringify(user.highscore))
    startBtnEl.setAttribute('style', 'display: none;');
    questionsEl.setAttribute('style', 'display: none;');
    secondsEl.setAttribute('style', 'display: none;');
    scoreEl.setAttribute('style', 'display: none;');

    storedUser = JSON.parse(window.localStorage.getItem("user"));
    // scoreboardEl.textContent = storedUser
    // scoreboardEl.setAttribute('style', 'display: inline;');
    // console.log("user " + user);
    // console.log("stored user " + storedUser);
    displayHighScore();
}

function displayHighScore() {

    // Clear todoList element and update todoCountSpan
    scoreboardEl.innerHTML = "";

    // Render a new li for each todo

    var li = document.createElement("li");
    for (var i = 0; i < userHighScore.length; i++) {
        li.textContent = userHighScore[i];
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete";

        li.appendChild(button);
        scoreboardEl.appendChild(li);
        console.log(storedUser)
    }
}

//textcontent function
function changeQuestion(x) {
    if (currentArray === 3) {
        gameOver()
        console.log(x);

    }
    else {
        qText.textContent = questionArray[x].questionText;
        buttonAEl.textContent = questionArray[x].a;
        buttonBEl.textContent = questionArray[x].b;
        buttonCEl.textContent = questionArray[x].c;
    }
}


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

            if (totalSecondsLeft <= 0) {
                clearInterval(interval);
                // renderTime();
            }
        }, 1000);
    }

}


// start button 
startBtnEl.addEventListener("click", function () {
    startTimer();
    startBtnEl.setAttribute('style', 'display: none;');
    questionsEl.setAttribute('style', 'display: inline;');
    changeQuestion(0);
    // for (let ind = 0; ind < questionArray.length; ind++) {
    //     changeQuestion(ind);
    // }
});





questionsEl.addEventListener("click", function (event) {
    var element = event.target;
    // If that element is a button...
    if (element.matches("button") === true) {
        // Get its 
        userPick = element.textContent;

        // changeQuestion(currentArray++)
        //Determining if an answer was correct.
        //Q1
        if (currentArray === 0) {
            if (userPick === '"9"') {
                currentScore += 10;
            }
            else {
                secondsElapsed += 10
            }
        }
        //Q2
        if (currentArray === 1) {
            if (userPick === '"Armadillos"') {
                currentScore += 10;
            }
            else {
                secondsElapsed += 10
            }
        }
        //Q3
        if (currentArray === 2) {
            if (userPick === 'Initialize, Evaluate and Increment') {
                currentScore += 10;
            }
            else {
                secondsElapsed += 10
            }
        }
        scoreEl.textContent = "Total Score: " + currentScore;
        currentArray++;
        changeQuestion(currentArray);
        user.highscore = currentScore;
    }
});


console.log(user);


function whenToStop() {
    if (totalSecondsLeft === 0) {
        gameOver();
    }
    else if (currentArray === 3) {
        gameOver();
    }
}




// for leadboard placement
// if (objA.score > objB.score){
//     return objA
// }
// else{
//     return objB

// }

















// changeQuestion(1);
// buttonAEl.addEventListener("click", console.log(buttonAEl));
// buttonBEl.addEventListener("click", );
// buttonCEl.addEventListener("click", );






// function to fromat the questions
// function renderQuestion(w, x, y, z,){
//     document.body.appendChild(w);
//     document.body.appendChild(x);
//     document.body.appendChild(y);
//     document.body.appendChild(z);
// }
// renderQuestion(q1Text, q1a, q1b, q1c);
// renderQuestion(q2Text, q2a, q2b, q2c);
// renderQuestion(q3Text, q3a, q3b, q3c);





//JS DESIGN PATTERNS - COMPOSITE


// buttonA.addEventListener("click", ));
// buttonB.addEventListener("click", console.log(buttonB.textContent));
// buttonC.addEventListener("click", console.log(buttonC.textContent));











// local vs global scope