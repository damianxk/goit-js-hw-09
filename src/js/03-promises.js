import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`👍 Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`👎 Rejected promise ${position} in ${delay}ms`);
    }
  });
}

const firstDelayEl = document.querySelector('[name="delay"]');
const stepDelayEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const submitBtn = document.querySelector('[type="submit"]');

const showPromise = (amount, step, time, current = 1) => {
  if (current > amount) return;
  createPromise(current, time)
    .then(success => Notiflix.Notify.success(success))
    .catch(error => Notiflix.Notify.failure(error));
  time += step;
  setTimeout(() => showPromise(amount, step, time, current + 1), step);
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  setTimeout(
    () => showPromise(+amountEl.value, +stepDelayEl.value, +firstDelayEl.value),
    +firstDelayEl.value
  );
});
