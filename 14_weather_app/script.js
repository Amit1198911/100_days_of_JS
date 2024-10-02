const srch = document.querySelector('#search-bar');
let city_dis = document.querySelector('#city')
const temp = document.querySelector('#temp')
const wind = document.querySelector('#wind-speed')
const hum = document.querySelector('#humidity-value')
srch.addEventListener('click',(e)=>{
    let city = srch.value;
    if(city!==""){
        city_dis.innerHTML = city;
        fetch(`http://api.weatherapi.com/v1/current.json?key=f5981f40d91d4c7095265701240210&q=${city}`)
      .then(response => response.json())
      .then((data)=>{
        console.log(data);
        hum.innerHTML = data.current.humidity
        wind.innerHTML = data.current.wind_kph
        temp.innerHTML = data.current.temp_c
      })
      .catch(err => console.log(err))

      
    }   
    
})


  