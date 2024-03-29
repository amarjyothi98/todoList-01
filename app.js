//Selectors
const todoInput = document.querySelector('.todo-input');    
const todoButton = document.querySelector('.todo-button');    
const todoList = document.querySelector('.todo-list'); 

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions

function addTodo(event){
    //Prevents form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to list 
    todoList.appendChild(todoDiv);
    ///clear Todo INPUT VALUE
    todoInput.value = " ";
    
    completedButton.addEventListener('click', function(e){
        let item = e.target;
        let toChange = item.parentElement;
        toChange.style.textDecoration = "line-through"
        console.log(toChange)        
    })

    trashButton.addEventListener('click', function(e){
        let item = e.target;    
        let toDel = item.parentElement;
        toDel.remove();
    })
    
}
