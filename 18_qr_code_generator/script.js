const input = document.querySelector('#qr-input');
const btn = document.querySelector('#btn');
let img = document.querySelector('#img');

btn.addEventListener('click',(e)=>{
   const qrUrl = input.value;
   if(qrUrl){
     img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrUrl}`
     console.log(`Qr generated`);
     
   }
   else{
    console.log(`Error 404`);
    
   }
})