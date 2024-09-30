const startE1 = document.querySelector('#start')
const stopE1 = document.querySelector('#stop')
const resetE1 = document.querySelector('#reset')
const timerE1 = document.querySelector('#timer')

let interval;
let timeleft = 25*60;

const start = () => {
    interval = setInterval(()=>{
        timeleft--;
        updateTimer()
        if(timeleft===0){
            clearInterval(interval);
            alert("It's Over now");
            timeleft = 25*60;
            updateTimer()
        }
    },1000)
}

const stop = () => {
    clearInterval(interval);
}

const reset = () => {
    clearInterval(interval);
    timeleft = 25*60;
    updateTimer()
}

const updateTimer = () => {
    let minutes = Math.floor(timeleft/60);
    let seconds = timeleft%60;
    let formattedTime = `${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')}`;
    timerE1.innerHTML = formattedTime;
}

startE1.addEventListener("click", start);
stopE1.addEventListener("click", stop);
resetE1.addEventListener("click", reset);