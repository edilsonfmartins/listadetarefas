// script.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    
    taskItem.innerHTML = `
        ${taskText} 
        <button class="remove" onclick="removeTask(this)">Remover</button>
    `;
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
