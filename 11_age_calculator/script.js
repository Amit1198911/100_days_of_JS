const btnEl = document.querySelector('#btn');
const birthydayEl = document.querySelector('#birthday');
const resultEl = document.querySelector('#result');

const calculateAge = () => {
    const birthydayValue = birthydayEl.value;
    if(birthydayValue===""){
        alert("pLease enter your birthday");
    }
    else{
        const age = getAge(birthydayValue);
        resultEl.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
}

const getAge = (birthydayValue) => {
    const currDate = new Date();
    const birthdayDate = new Date(birthydayValue);
    let age = currDate.getFullYear() - birthdayDate.getFullYear();
    const month = currDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || (month===0 && currDate.getDate() < birthdayDate.getDate())){
        age--;
    }

    return age;
}

btnEl.addEventListener('click',calculateAge)