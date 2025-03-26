    // Function to load tasks from localStorage
    function loadTasks() {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            createTaskElement(task);
        });
    }

    // Function to save tasks to localStorage
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task
    function addTask() {
        let taskInput = document.getElementById('taskInput');
        let taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTaskElement(taskText);
            // Save to localStorage
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.push(taskText);
            saveTasks(tasks);
            
            // Clear the input field
            taskInput.value = "";
        }
    }

    // Function to create a task list item in the DOM
    function createTaskElement(taskText) {
        let li = document.createElement('li'); // Create a new list item
        let taskNode = document.createTextNode(taskText); // Create text for the task
        // Create delete button
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "delete";
        deleteButton.onclick = function() {
            deleteTask(li, taskText);
        };
        // Append text and button to the list item
        li.appendChild(taskNode);
        li.appendChild(deleteButton);
        // Append the list item to the task list
        document.getElementById('taskList').appendChild(li);
    }

    // Function to delete a task
    function deleteTask(taskItem, taskText) {
        document.getElementById('taskList').removeChild(taskItem);
        // Remove task from localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(task => task !== taskText); // Remove the task
        saveTasks(tasks);
    }

    // Load tasks when the page loads
    window.onload = function() {
        loadTasks();
    };
