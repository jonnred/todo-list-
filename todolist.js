const removeBtn = document.getElementsByClassName('remove-btn');
const content = document.querySelectorAll('.content');
const taskList = document.querySelector('#task-list');

////////////  TODOS   ///////////////
var todos = ["1" , "2" ,"5"];   
////////////========1.  TODO LIST   ========///////////////
const todolist = () => {
}
todolist();
///////////=====2. TO DO LIST CLASS=====/////////////////
const todoListClass = () => {
    document.querySelector('content')
    for (let i = 0; i < todos.length; i++) {
        let element = todos[i];
        let li = document.createElement('li');
        taskList.appendChild(li);
        li.
        taskList.textContent = todos[i];
        console.log(element);
        
        
    }
    
    
    console.log('todo list class ');

}
todoListClass();
/////////////=====3. ADD NEW TASK=====//////////////
const submitBtn = document.querySelector("#submitBtn");
const addTask = document.querySelector('#addTask');

const addNewTask = () => {
    if (addTask.value == null)alert("asd");
    if (addTask.value != null){
        todos.push(addTask.value);
        addTask.value = null ;
        console.log(todos)
    };
    

}
submitBtn.addEventListener('click' , addNewTask);