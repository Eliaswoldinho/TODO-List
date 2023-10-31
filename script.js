let tasks = [];
const MAX_CHARACTER_LIMIT = 30; // Maximal character limit
const MAX_ITEMS = 14;

function addtext(event) {
    event.preventDefault();

    let tasktext = document.getElementById("input_felt").value;

    // Check if the input field is empty
    if (tasktext.trim() === "") {
        alert("Please write something in the textbox to submit.");
        return;
    }

    if (tasktext.length > MAX_CHARACTER_LIMIT) {
        alert("Max characters reached " + MAX_CHARACTER_LIMIT + " characters.");
        return;
    }

    if (tasks.length >= MAX_ITEMS) {
        alert("Shopping list is full. You cannot add more items.");
        return;
    }

    console.log(tasktext);

    tasks.push(tasktext);

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

        let textSpan = document.createElement("span");
        textSpan.className = "task-text";
        textSpan.appendChild(document.createTextNode(task));

        listItem.appendChild(checkbox);
        listItem.appendChild(textSpan);

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