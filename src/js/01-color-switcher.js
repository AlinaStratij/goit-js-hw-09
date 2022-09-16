

const refs = {
  body:document.querySelector(`body`),
  buttonStart: document.querySelector(`button[data-start]`),
  buttonStop: document.querySelector(`button[data-stop]`),
};

refs.buttonStart.addEventListener(`click`,onStartClick)
refs.buttonStop.addEventListener(`click`,onStopClick)
let timeoutId = null;
const CLICK_DELAY = 1000;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onChangeBgcolor() {
 timeoutId = setInterval(() => {
   refs.body.style.backgroundColor = getRandomHexColor();
 }, CLICK_DELAY);
}

function onStartClick(evt) {
  onChangeBgcolor();
  console.log(`change color`)
  refs.buttonStart.disabled =true;
  refs.buttonStop.disabled =false;
}

function onStopClick(evt) {
  console.log(`stop changes`)
  clearInterval(timeoutId);
  refs.buttonStop.disabled =true;
  refs.buttonStart.disabled =false;
}

