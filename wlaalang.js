const taskList = document.querySelector('#task-list');
const submitBtn = document.querySelector('#submitBtn');

let task= ['1', '2' , '3',  '4'];
///////////========== TODO LIST  ==========///////////

const toDoList = () =>{
    for (let index = 0; index < task.length; index++) {
        let li = document.createElement('li')
        li.innerText = task[index];
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-btn')
        removeBtn.innerText = 'remove';
        
        taskList.appendChild(li);
        taskList.appendChild(removeBtn);
    }
}
toDoList();

///////////========== ADD NEWW TASK  ==========///////////
const addNewTask = () => {
    const addTask = document.querySelector('#add-task');
    task.push(addTask.value);
    addTask.value = null;
    console.log(task);

}
submitBtn.addEventListener('click' , addNewTask);
///////////==========  REMOVE TASK  ==========///////////
const removeButton = document.querySelectorAll('.remove-btn');
removeButton.addEventListener('click' , (e) => {
    for (let index = 0; index < removeButton.length; index++) {
        console.log(removeButton[index]);
    }
    console.log(e.target.parentElement);
    console.log(removeButton);
});

///////////==========   ==========///////////
///////////==========   ==========///////////
