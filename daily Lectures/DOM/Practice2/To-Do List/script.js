const todoinput = document.getElementById('todo-input');
const addbutton = document.getElementById('add-button');
const todolist = document.getElementById('todo-list');

addbutton.addEventListener('click', () => {
    const task = todoinput.value.trim();

    if (task !== '') {

        const listitem = document.createElement('li');

        listitem.innerHTML = `${task} 
        <button class="delete-button">Delete</button>`;

        todolist.appendChild(listitem);

        const deletebutton = listitem.querySelector('.delete-button');

        deletebutton.addEventListener('click', () => {
            todolist.removeChild(listitem);
        });

        todoinput.value = '';
    }
});