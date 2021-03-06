const daysNumber = document.querySelector(".days  h2");
const hoursNumber = document.querySelector(".hours h2");

const minutesNumberAnimation = document.querySelector(
  ".minutes .card__anime h2"
);
const minutesNumberBlock = document.querySelector(".minutes .card__block h2");

const secondsNumberAnimation = document.querySelector(
  ".seconds .card__anime h2"
);
const secondsNumberBlock = document.querySelector(".seconds .card__block h2");

let seconds = 41;
let minutes = 55;
let hours = 23;

daysNumber.innerHTML = `08`;
hoursNumber.innerHTML = hours;
minutesNumberAnimation.innerHTML = minutes;
minutesNumberBlock.innerHTML = minutes;
secondsNumberAnimation.innerHTML = seconds;
secondsNumberBlock.innerHTML = seconds;

window.addEventListener("DOMContentLoaded", () => {
  animeSeconds();
  setInterval(() => {
    if (seconds === 1) {
      animeMinutes();
      setTimeout(() => {
        changeMinutes();
      }, 500);
    }
    if (seconds === 0) {
      seconds = 60;
    }
    changeSeconds();
  }, 1000);
});

const changeSeconds = () => {
  seconds -= 1;
  secondsNumberAnimation.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  setTimeout(() => {
    secondsNumberBlock.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  }, 100);
};

const animeSeconds = () => {
  document.querySelector(".seconds .card__anime").classList.add("flip-delay");
  secondsNumberAnimation.classList.add("flip-delay");
};

const changeMinutes = () => {
  minutes -= 1;
  minutesNumberAnimation.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  setTimeout(() => {
    minutesNumberBlock.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  }, 200);
};

const animeMinutes = () => {
  document.querySelector(".minutes .card__anime").classList.add("flip");
  minutesNumberAnimation.classList.add("flip");
  setTimeout(() => {
    document.querySelector(".minutes .card__anime").classList.remove("flip");
  }, 3000);
};
