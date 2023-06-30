const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let color;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgChange = () => {
  color = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const stopBgChange = () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(color);
};

startBtn.addEventListener('click', bgChange);
stopBtn.addEventListener('click', stopBgChange);
