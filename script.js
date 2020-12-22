let secondsEl = document.querySelector("#seconds");
let startBtnEl = document.querySelector("#startBtn");
let totalSeconds = 60;
let secondsElapsed = 0;
let totalSecondsLeft = 60;
let interval;


function renderTimer() {
    totalSecondsLeft = totalSeconds - secondsElapsed;
    secondsEl.textContent = totalSecondsLeft;

    // if (secondsElapsed >= totalSeconds) {
    //     if (status === "Working") {
    //         alert("Time for a break!");
    //     } else {
    //         alert("Time to get back to work!");
    //     }

    //     stopTimer();
    // }
}

function startTimer() {
    //setTime();
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

// function stopTimer() {
//     clearInterval(interval);
    //setTime();
    //renderTime();
//}    

startBtnEl.addEventListener("click", function(){
    startTimer();
});



//JS DESIGN PATTERNS - COMPOSITE


