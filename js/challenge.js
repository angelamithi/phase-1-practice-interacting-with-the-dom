let counter = 0;
let setIntervalVariable;
let likes = 0;
let pauseButton; // Declare pauseButton variable in a higher scope

document.addEventListener("DOMContentLoaded", () => {
    incrementTimer();
    manuallyIncrementTime();
    manuallyDecrementTime();
    likeNumber();
    pauseAndResumeCounter();
    restartCounter();
});

function incrementTimer() {
    const countTimer = document.querySelector("#counter");
    setIntervalVariable = setInterval(function () {
        countTimer.textContent = counter++;
    }, 1000);
}

function manuallyIncrementTime() {
    const plusButton = document.querySelector("#plus");
    plusButton.addEventListener("click", () => {
        counter++;
        updateCounter();
    });
}

function manuallyDecrementTime() {
    const minusButton = document.querySelector("#minus");
    minusButton.addEventListener("click", () => {
        counter--;
        updateCounter();
    });
}

function likeNumber() {
    const likeButton = document.querySelector("#heart");
    likeButton.addEventListener("click", () => {
        likes++;
        const likesCount = document.querySelector(".likes");
        likesCount.textContent = `${counter} has been liked ${likes} times`;
    });
}

function pauseAndResumeCounter() {
    pauseButton = document.querySelector("#pause"); // Assign pauseButton here

    pauseButton.addEventListener("click", () => {
        if (pauseButton.textContent === "pause") {
            clearInterval(setIntervalVariable);
            disableButtons();
            pauseButton.textContent = "resume";
        } else {
            enableButtons();
            setIntervalVariable = setInterval(incrementTimer, 1000);
            pauseButton.textContent = "pause";
        }
    });
}

function disableButtons() {
    document.querySelector("#plus").disabled = true;
    document.querySelector("#minus").disabled = true;
    document.querySelector("#heart").disabled = true;
}

function enableButtons() {
    document.querySelector("#plus").disabled = false;
    document.querySelector("#minus").disabled = false;
    document.querySelector("#heart").disabled = false;
}

function restartCounter() {
    const restartButton = document.querySelector("#restart");
    restartButton.addEventListener("click", () => {
        clearInterval(setIntervalVariable);
        counter = 0;
        likes = 0;
        const countTimer = document.querySelector("#counter");
        countTimer.textContent = counter;
        const likesCount = document.querySelector(".likes");
        likesCount.textContent = "";
        enableButtons();
        pauseButton.textContent = "pause";
        incrementTimer();
    });
}

function updateCounter() {
    const countTimer = document.querySelector("#counter");
    countTimer.textContent = counter;
}
