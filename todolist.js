const taskList = document.querySelector('#task-list');


///////////========== MAIN FUNCTION  ==========///////////



///////////========== ADD NEWW TASK  ==========///////////
const submitBtn = document.querySelector('#submit-btn');

const addTaskFunction = () => {
addTask = document.querySelector('#add-task')
submitBtn.addEventListener('click', () => {
    if(addTask.value == 0){
        return;
    }
    else{
        addingElements();
    }
})
}

///////////==========  REMOVE TASK  ==========///////////
const removeButton = document.querySelectorAll('.remove-btn');
const removeTaskFunction = () => {
    for (let index = 0; index < removeButton.length; index++) {
        let element = removeButton[index];
        element.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    }
}
///////////========== UPDATE THE LIST  ==========///////////

const update = () => {

    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const value = localStorage.getItem(key);

    }
}
const addingElements = () => {
    localStorageFunction();
    let li = document.createElement('li')
    li.innerText = addTask.value;
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-btn')
    removeBtn.innerText = 'Remove';
    removeBtn.addEventListener('click',(e) => {
        e.target.parentElement.remove();
    });
    li.classList.add('list')
    taskList.appendChild(li);
    li.appendChild(removeBtn);
    addTask.value = null;   
    return;
}
const localStorageFunction = () => {
    localStorage.setItem("todoList", addTask.value);
    const key = localStorage.key(0)
    console.log(localStorage.getItem(key))
}
update();
addTaskFunction();
removeTaskFunction();
///////////==========   ==========///////////
