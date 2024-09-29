const dayE1 = document.querySelector('#day')
const hourE1 = document.querySelector('#hour')
const minuteE1 = document.querySelector('#minute')
const secondE1 = document.querySelector('#second')

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m = Math.floor((gap%hour)/minute);
    const s = Math.floor((gap%minute)/second);

    dayE1.innerHTML = d;
    hourE1.innerHTML = h;
    minuteE1.innerHTML = m;
    secondE1.innerHTML = s;

    setTimeout(updateCountdown,1000)
}