const targetNumber = 823;
const duration = 2000; // 3 секунди
const frameRate = 60; // 60 кадрів в секунду
const totalFrames = duration / (1000 / frameRate);
let currentNumber = 0;
const increment = targetNumber / totalFrames;

const counterElement = document.getElementById("counter");

const updateCounter = () => {
  currentNumber += increment;
  if (currentNumber >= targetNumber) {
    currentNumber = targetNumber;
    clearInterval(interval);
  }
  counterElement.textContent = String(Math.floor(currentNumber)).padStart(
    3,
    "0"
  );
};

const interval = setInterval(updateCounter, 1000 / frameRate);
