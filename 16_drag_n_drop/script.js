let drag = document.querySelector('#card-1')
let dragzone = document.querySelector('#card-2')
let lists = document.querySelectorAll('#card-1 li')

lists.forEach(list => {
    list.addEventListener('dragstart',(e)=>{
        let selected = e.target;

        dragzone.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })

        dragzone.addEventListener('drop',(e)=>{
            dragzone.appendChild(selected);
            // selected = null;
        })

        drag.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })

        drag.addEventListener('drop',(e)=>{
            drag.appendChild(selected);
            // selected = null;
        })
    })
});