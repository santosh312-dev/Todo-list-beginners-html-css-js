//making a list which contain all the task object
taskList = [];
function addTask() {
  const taskInput = document.getElementById("taskInput"); //accessed element
  const taskText = taskInput.value.trim(); //removed extra spaces in text

  if (taskText === "") {
    //checkiing blank space in the box
    alert("Enter task to add in the list");
    return;
  }

  //making task object: based on input data:
  const task = {
    data: taskText,
    isCompleted: false,
  };
  //adding individual task into taskList
  taskList.push(task);

  //displaying all the task in the html web page
  taskList.forEach((taskObj) => {
    // Create a container for each task
    const taskItem = document.createElement("div");
    taskItem.className = "taskItem";

    // Task text
    const taskP = document.createElement("p");
    taskP.textContent = taskObj.data;

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Add elements to taskDiv
    taskItem.appendChild(taskP);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    // Add taskItem to main taskBox
    document.getElementById("taskBox").appendChild(taskItem);
  });

  // Clear input box
  taskInput.value = "";
}
