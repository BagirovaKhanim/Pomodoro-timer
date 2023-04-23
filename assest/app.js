//Current Hour

document.addEventListener("DOMContentLoaded", () => {
  let clock = document.querySelector("#clock");
  let updateClock = () => {
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (hours < 10) {
      hours = '0' + hours;
    }
    clock.textContent = hours + 'h' + ':' + minutes + 'm' + ':' + seconds + 's';
  };

  updateClock();
  setInterval(updateClock, 1000);
});

//Timer
let timeDiv = document.querySelector(".time")
let countTime = document.querySelector(".count-time");
let startBtn = document.querySelector(".startBtn");
let pauseBtn = document.querySelector(".pauseBtn");
let countMinutes = 25;
let countSeconds = 0;
let countdown = undefined;

function updateCountdown() {
  let formattedMinutes = countMinutes < 10 ? "0" + countMinutes : countMinutes;
  let formattedSeconds = countSeconds < 10 ? "0" + countSeconds : countSeconds;
  countTime.textContent = `${formattedMinutes} : ${formattedSeconds}`;
}
//Start Button
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
  if (countdown === undefined) {
    countdown = setInterval(function () {
      countSeconds--;
      if (countSeconds < 0) {
        countMinutes--;
        countSeconds = 59;
      }
      updateCountdown();
      if (countMinutes === 0 && countSeconds === 0) {
        pauseBtn.textContent = startBtn.textContent
        clearInterval(countdown);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Time is up!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }, 1000);
  }
  //Reset Button
  let resetBtn = document.createElement("button")
  resetBtn.textContent = "RESET"
  resetBtn.classList.add("resetBTn")
  timeDiv.append(resetBtn)

  resetBtn.addEventListener("click", () => {
    countTime.textContent = "25:00"
    countMinutes = 25;
    countSeconds = 0;
    clearInterval(countdown);
    countdown = undefined;
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
  })
});
//Pause Button
pauseBtn.addEventListener("click", () => {
  clearInterval(countdown);
  countdown = undefined;
  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
});
//Todo
let todoAddBtn = document.querySelector(".todoAddBtn")
let todoList = document.querySelector(".todoList");

todoAddBtn.addEventListener("click", () => {
  let todoInput = document.querySelector(".todoInput");
  if (todoInput.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: "Please enter a todo item!"
    })
  }
  else {
    todoList.style.display = "block"
    let todoItem = document.createElement("li");
    todoItem.classList.add("todoItem")
    todoItem.innerHTML = todoInput.value;
    todoItem.addEventListener('click', function () {
      todoItem.classList.toggle("done");
    });
    todoList.appendChild(todoItem);
    todoInput.value = '';
  }
})











