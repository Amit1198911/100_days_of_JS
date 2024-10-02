const input = document.querySelector('#todo-input');
const todolist = document.querySelector('#todo-list');

const add = document.querySelector('#add-btn');
add.addEventListener('click',(e)=>{
    if(input.value===''){
        alert("Please write something ...");
    }
    let note = document.createElement('li');
    let list = `${input.value}`;
    note.textContent = list; 

    let deletebtn = document.createElement('button');
    deletebtn.textContent = 'X';
    note.appendChild(deletebtn);

    note.style.color = "black"  
    todolist.appendChild(note);
    input.value = ''

    deletebtn.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
    })
})

