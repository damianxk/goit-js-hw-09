import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const datePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.disabled = true;
stopBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('🗓️ Please choose a date in the future');
      startBtn.disabled = true;
      stopBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(datePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};

datePicker.addEventListener('input', e => {
  const pickedDate = new Date(e.currentTarget.value).getTime();

  startBtn.addEventListener('click', () => {
    Notiflix.Report.success('Countdown started!');
    const countdown = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeLeft = pickedDate - currentDate;

      secondsEl.innerHTML = addLeadingZero(convertMs(timeLeft).seconds);
      minutesEl.innerHTML = addLeadingZero(convertMs(timeLeft).minutes);
      hoursEl.innerHTML = addLeadingZero(convertMs(timeLeft).hours);
      daysEl.innerHTML = addLeadingZero(convertMs(timeLeft).days);

      startBtn.disabled = true;
      stopBtn.disabled = false;

      if (timeLeft < 0) {
        clearInterval(countdown);
        secondsEl.innerHTML = addLeadingZero(0);
        minutesEl.innerHTML = addLeadingZero(0);
        hoursEl.innerHTML = addLeadingZero(0);
        daysEl.innerHTML = addLeadingZero(0);
      }

      stopBtn.addEventListener('click', () => {
        Notiflix.Report.failure('Countdown stopped!');
        clearInterval(countdown);
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        stopBtn.disabled = true;
      });
    }, 1000);
  });
});
