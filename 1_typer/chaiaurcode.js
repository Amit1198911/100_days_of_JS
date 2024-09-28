const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordsIdx = 0;
let charIdx = 0;
type()
function type() {

        if(wordsIdx<words.length){
            charIdx++;

            typedTextSpan.innerHTML = `${words[wordsIdx].slice(0,charIdx)}`
            setTimeout(type,400);
            if(charIdx===words[wordsIdx].length){
                wordsIdx++;
                charIdx = 0;
            }
        }
        else{
            wordsIdx = 0;
        }
      
}

function erase() {}
