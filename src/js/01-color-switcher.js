

const refs = {
  buttonStart: document.querySelector(`button[data-start]`),
  buttonStop: document.querySelector(`button[data-stop]`),
};
console.log(refs.buttonStart);
console.log(refs.buttonStop);

refs.buttonStart.addEventListener(`click`,onStartClick)
refs.buttonStop.addEventListener(`click`,onStopClick)

function onStartClick(evt){
  console.log(`hello`)
}