const container = document.querySelector('.image-container');
const btn = document.querySelector('.btn')


btn.addEventListener('click',(e)=>{
    
    addimg();
    
})

const addimg = () => {
    for (let i = 0; i < 11; i++) {
        const newimg = document.createElement('img');
        newimg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        container.appendChild(newimg);
        
    }
}