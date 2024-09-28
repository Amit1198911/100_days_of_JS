const month = document.querySelector('#month-name')
const day = document.querySelector('#day-name')
const day_num = document.querySelector('#day-number')
const year = document.querySelector('#year')

const date = new Date();

month.innerHTML = date.toLocaleString('en',{
    month : "long"
})

day.innerHTML = date.toLocaleString('en',{
    weekday : "long"
})

day_num.innerHTML = date.getDate()

year.innerHTML = date.getFullYear()


