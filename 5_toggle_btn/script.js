const input = document.querySelector('.input')

input.addEventListener('click',(e)=>{
    if(input.checked===true){
        document.body.style.backgroundColor = "#212121";
    }
    else{
        document.body.style.backgroundColor = "#fff";
    }
})