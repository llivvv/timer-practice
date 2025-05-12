const mainBtn = document.querySelector(".btn-start");
const timer = document.querySelector(".timer");
const resetBtn = document.querySelector(".btn-reset");

let initialized = false;
let going = false;

let minute = 0;
let seconds = 0;

function displayTimer() {
  if (seconds > 9) {
    timer.innerHTML = `${minute}:${seconds}`;
  } else {
    timer.innerHTML = `${minute}:0${seconds}`;
  }
}

function runTimer() {
  running = setInterval(() => {
    if ((seconds + 1) % 10 != 0) {
      seconds++;
    } else if (seconds + 1 == 60) {
      seconds = 0;
      minute++;
    } else {
      seconds++;
    }
    displayTimer();
  }, 1000);
}

function handleMain() {
  if (mainBtn.innerHTML == "start" || !going) {
    mainBtn.innerHTML = "pause";
    going = !going;
    initialized = true;
    resetBtn.disabled = false;
    runTimer();
  } else if (going) {
    mainBtn.innerHTML = "resume";
    going = !going;
    clearInterval(running);
  }
}

function handleReset() {
  initialized = false;
  going = false;
  minute = 0;
  seconds = 0;
  clearInterval(running);
  displayTimer();
  resetBtn.disabled = true;
  mainBtn.innerHTML = "start";
}

mainBtn.addEventListener("click", handleMain);
resetBtn.addEventListener("click", handleReset);
