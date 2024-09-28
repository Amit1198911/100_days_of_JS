const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];

// for(let i=0;i<emojis.length;i++){
// }

let i = 0;
// while (i < emojis.length) {
btn.addEventListener('mouseover', (e) => {
  if(i==emojis.length-1){
    i=0;
  }
  else{
    // console.log(`${emojis[i]}`);
    btn.innerHTML = `${emojis[i]}`
    i++;
  }
});
// }
