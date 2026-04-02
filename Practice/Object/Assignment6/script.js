
// Array to store tasks (Object concept)
let tasks = [];

// ADD TASK
function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create object
    let task = {
        id: Date.now(),   // unique id
        name: taskText
    };

    tasks.push(task);  // add object to array

    input.value = ""; // clear input

    showTasks(); // refresh list
}

// SHOW TASKS
function showTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task) => {
        list.innerHTML += `
            <li>
                ${task.name}
                <button onclick="deleteTask(${task.id})">Delete</button>
                <button onclick="updateTask(${task.id})">Update</button>
            </li>
        `;
    });
}

// DELETE TASK
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    showTasks();
}

// UPDATE TASK
function updateTask(id) {
    let newTask = prompt("Enter new task:");

    if (newTask === null || newTask === "") return;

    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, name: newTask };
        }
        return task;
    });

    showTasks();
}