import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputText: document.querySelector(`#datetime-picker`),
  buttonStart: document.querySelector(`button[data-start]`),
  timerDays: document.querySelector(`.value[data-days]`),
  timerHours: document.querySelector(`.value[data-hours]`),
  timerMinutes: document.querySelector(`.value[data-minutes]`),
  timerSeconds: document.querySelector(`.value[data-seconds]`),
};

function updateClockFace({days,hours,minutes,seconds}) {
  refs.timerDays.textContent=`${days}`;
  refs.timerHours.textContent=`${hours}`;
  refs.timerMinutes.textContent=`${minutes}`;
  refs.timerSeconds.textContent=`${seconds}`;
}

function pad(value) {
  return String(value).padStart(2, `0`);
}

function convertMs(ms) {
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days =pad(Math.floor(ms / day));
      const hours =pad(Math.floor((ms % day) / hour));
      const minutes = pad(Math.floor(((ms % day) % hour) / minute));
      const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

      return { days, hours, minutes, seconds };
    }
   
refs.buttonStart.addEventListener(`click`, onclickStart);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0])
      if (selectedDates[0] < new Date()) {
        refs.buttonStart.disabled = true;
        return Notify.failure('Please choose a date in the future');
      }
      else {
        refs.buttonStart.disabled = false; 
        
      } 
  },
};

function onclickStart() {
  let intervalId = setInterval(() => {
     const startTime = new Date();
    let selectedTime = new Date(refs.inputText.value);
   
    let deltaTime = selectedTime - startTime;
    
    refs.buttonStart.disabled = true;
    if(deltaTime>=0){
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      updateClockFace({ days, hours, minutes, seconds });
    }
    
    if (deltaTime < 0) {
      clearInterval(intervalId);
     
    }
     }, 1000);  
 };

flatpickr(refs.inputText, options);




