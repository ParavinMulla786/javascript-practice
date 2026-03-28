
// ================================
// STEP 1: CREATE A LIST (ARRAY)
// ================================

// This array stores all tasks
// Think of it like a list (shopping list)
let tasks = ["Attend session"]



// ================================
// STEP 2: SHOW DESCRIPTION
// ================================

// We select the HTML element using id="description"
// Then we put text inside it using textContent

document.getElementById("description").textContent = 
"A simple and efficient To-Do application to organize your daily activities"



// ================================
// STEP 3: UPDATE TASK FUNCTION
// ================================

// This function runs when user clicks "Update" button
// Right now it only prints data (not fully working)

function updateTask(ind){

    // 'ind' means index (position) of task in array
    // Example: 0 = first task, 1 = second task

    console.log(ind, "Updated button clicked")

    // Get the UL (list container)
    let ulElmts = document.getElementById("tasksUL")

    // Print UL in console (for learning/debugging)
    console.log(ulElmts, "UL element")
}



// ================================
// STEP 4: DELETE TASK FUNCTION
// ================================

function deleteTask(ind){

    // Remove task from array
    // splice(index, how many items to remove)
    tasks.splice(ind,1)

    // After deleting, we refresh UI
    renderTasks()
}



// ================================
// STEP 5: DISPLAY TASKS ON SCREEN
// ================================

function renderTasks(){

    // Select UL and replace all content
    document.getElementById("tasksUL").innerHTML = 

    // Loop through tasks array using map()
    tasks.map((task,i)=>`

        <li class="list-group-item">

            <!-- Show task text -->
            ${task}

            <div>

                <!-- Update button -->
                <!-- When clicked, updateTask(i) runs -->
                <button class="btn btn-success btn-sm" onclick="updateTask(${i})">
                    Update
                </button>

                <!-- Delete button -->
                <!-- When clicked, deleteTask(i) runs -->
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${i})">
                    Delete
                </button>

            </div>

        </li>

    `).join("")  // join("") converts array → single string
}



// ================================
// STEP 6: ADD NEW TASK
// ================================

function addNewTask(){

    // Get input box
    let inputElement = document.getElementById("inputToDo")

    // Get user typed value
    let newToDo = inputElement.value

    // Add new task into array
    tasks.push(newToDo)

    // Refresh UI to show new task
    renderTasks()

    // Clear input box after adding
    inputElement.value = ''
}



// ================================
// STEP 7: INITIAL LOAD
// ================================

// When page loads, show tasks
renderTasks()