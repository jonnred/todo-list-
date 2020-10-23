const taskList = document.querySelector('#task-list');

let task = ["Complete this todo List", "Complete the Shoping Website In javascript", "Learn how to connect The Todo list In Node Js "];

///////////========== MAIN FUNCTION  ==========///////////


///////////========== TODO LIST  ==========///////////

    for (let index = 0; index < task.length; index++) {
        let li = document.createElement('li')
        li.innerText = task[index];
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-btn')
        removeBtn.innerText = 'Remove';
        li.classList.add('list')
        taskList.appendChild(li);
        li.appendChild(removeBtn);
    }

///////////========== ADD NEWW TASK  ==========///////////
const submitBtn = document.querySelector('#submit-btn');
addTask = document.querySelector('#add-task')
submitBtn.addEventListener('click', () => {
    task.push(addTask.value);

    let li = document.createElement('li')
        li.innerText = addTask.value;
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-btn')
        removeBtn.innerText = 'Remove';
        li.classList.add('list')
        taskList.appendChild(li);
        li.appendChild(removeBtn);
        addTask.value = null;
        console.log(task);
        removeTaskFunction();

})

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
removeTaskFunction();
///////////==========   ==========///////////
///////////==========   ==========///////////
