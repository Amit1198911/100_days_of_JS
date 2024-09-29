let hour = document.querySelector('#hour');
let min = document.querySelector('#minutes');
let sec = document.querySelector('#seconds');
let am_pm = document.querySelector('#ampm');

let now = new Date();

function updateClock(){
    
    
    hour.innerHTML = now.getHours();
    min.innerHTML = now.getMinutes();
    sec.innerHTML = now.getSeconds();
    
    if(hour > 12){
        hour-=12;
        am_pm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    setInterval(()=>{
        location.reload()
        updateClock()
    },1000)

}

updateClock()