const input = document.querySelector('#todo-input');
const todolist = document.querySelector('#todo-list');
const add = document.querySelector('#add-btn');

add.addEventListener('click',(e)=>{
    if(input.value===''){
        alert("Please write something ...");
        return;
    }


    let note = document.createElement('li');
    let list = document.createElement('span');
    list.textContent = input.value;
    note.appendChild(list); 

    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    note.appendChild(deletebtn);

    let editbtn = document.createElement('button');
    editbtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    note.appendChild(editbtn);

    note.style.color = "black"  
    todolist.appendChild(note);
    input.value = ''

    deletebtn.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
    })

    editbtn.addEventListener('click',(e)=>{
        const newTask = prompt("Enter a new task",list.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            list.textContent = newTask; 
        }
    })
})

