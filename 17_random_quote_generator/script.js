let btn = document.querySelector('#btn');
btn.addEventListener('click',(e)=>{
    generateQuote()
});

function generateQuote() {
    fetch("https://quotes-api-self.vercel.app/quote")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.querySelector('#quote-display').innerText = data.quote;
        document.querySelector('#author').innerText = data.author;
    });
}