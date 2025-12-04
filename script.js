// A list to store all tasks
let taskList = [];

// Main function: add task
function addTask() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new task object
    const task = {
        name: text,
        completed: false
    };

    // Add task to list
    taskList.push(task);

    // Refresh the task display
    showTasks();

    // Clear input box
    input.value = "";
}

// Display all tasks
function showTasks() {
    const taskBox = document.getElementById("taskBox");
    taskBox.innerHTML = ""; // Clear previous display

    taskList.forEach((task, index) => {
        const item = document.createElement("div");
        item.className = "taskItem";

        // Task text
        const taskText = document.createElement("p");
        taskText.textContent = task.name;
        // taskText.style.cursor="pointer"
        taskText.classList.add("point");

        // If completed, show crossed text
        if (task.completed) {
            taskText.classList.add("completed");
        }

        // Toggle complete when text is clicked
        taskText.onclick = () => toggleComplete(index);

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editTask(index);
        editBtn.id="editBtn"

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = () => deleteTask(index);
        delBtn.id="deleteBtn"

        // Add all to item
        item.appendChild(taskText);
        item.appendChild(editBtn);
        item.appendChild(delBtn);

        // Display on page
        taskBox.appendChild(item);
    });
}

// Mark task complete / incomplete
function toggleComplete(i) {
    taskList[i].completed = !taskList[i].completed;
    showTasks();
}

// Edit a task
function editTask(i) {
    const newName = prompt("Edit your task:", taskList[i].name);

    if (newName && newName.trim() !== "") {
        taskList[i].name = newName.trim();
        showTasks();
    }
}

// Delete a task
function deleteTask(i) {
    taskList.splice(i, 1);
    showTasks();
}
