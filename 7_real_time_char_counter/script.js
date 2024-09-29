const textArea = document.querySelector('#textarea')
const total_counter = document.querySelector('#total-counter')
const remaining_counter = document.querySelector('#remaining-counter');

textArea.addEventListener("keyup",(e)=>{
    // console.log(total_counter);
    updateCounter();
})
const updateCounter = () => {
    total_counter.innerHTML = textArea.value.length;
    remaining_counter.innerHTML = textArea.getAttribute('maxLength') - textArea.value.length;
    // console.log(remaining_counter)
}