let tasks = [];
const MAX_CHARACTER_LIMIT = 30; //This 
const MAX_ITEMS = 14;

//This delete all the items in the list
function deleteAllTasks() {
    tasks = [];
    renderTasks();
}

function addtext(event) {
    event.preventDefault();

    let tasktext = document.getElementById("input_felt").value.trim();

    if (tasktext === "") {
        alert("Please write something in the textbox to submit.");
        return;
    }

    //sends a message that you have reached the mac character limit
    if (tasktext.length > MAX_CHARACTER_LIMIT) {
        alert("Max characters reached " + MAX_CHARACTER_LIMIT + " characters.");
        return;
    }

    if (tasks.length >= MAX_ITEMS) {
        alert("Shopping list is full. You cannot add more items.");
        return;
    }

    tasks.push({ text: tasktext, checked: false });

    document.getElementById("input_felt").value = "";

    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    let outputElement = document.getElementById("TaskList");
    outputElement.innerHTML = "";

    tasks.forEach(function(task, index) {
        let listItem = document.createElement("li");
        listItem.className = "task-item";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.checked;

        let textSpan = document.createElement("span");
        textSpan.className = "task-text";
        textSpan.appendChild(document.createTextNode(task.text));

        listItem.appendChild(checkbox);
        listItem.appendChild(textSpan);

        checkbox.addEventListener("change", function(event) {
            tasks[index].checked = event.target.checked;
        });

        textSpan.addEventListener("click", function() {
            removeTask(index);
        });

        outputElement.appendChild(listItem);
    });
}

document.getElementById("input_felt").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addtext(event);
    }
});
renderTasks();