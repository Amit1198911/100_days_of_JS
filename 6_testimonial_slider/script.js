const testimonial = [
    {
        name : "Cherise G",
        photoUrl : "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
        text : "This is simply unbelievable! I would be lost without Apple. The best Not able to tell you how happy I am with Apple."
    },
    {
        name : "John Doe",
        photoUrl : "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "The only way to do great work is to love what you do"
    },
    {
        name : "D rockerFeller",
        photoUrl : "https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text : "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart"
    }
]

const img = document.querySelector('img');
const textE = document.querySelector('.text');
const username = document.querySelector('.username')
let idx = 0;
updateTestimonial()
function updateTestimonial(){
    const {name,photoUrl,text} = testimonial[idx];
    img.src = photoUrl;
    textE.innerText = text;
    username.innerText = name;
    idx++;
    
    if(idx==testimonial.length){
        idx = 0;
    }
    
    setTimeout(()=>{
        updateTestimonial()
    },2000)
}
