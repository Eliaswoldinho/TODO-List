let tasks = [];
const MAX_CHARACTER_LIMIT = 25; // Maximal character limit

function addtext(event) {
    document.getElementById("add_button").addEventListener("click", addtext);

    event.preventDefault();
    
    let tasktext = document.getElementById("input_felt").value;

    // Max characters reached alert
    if (tasktext.length > MAX_CHARACTER_LIMIT) {
        alert("Max characters reached " + MAX_CHARACTER_LIMIT + " characters.");
        return;
    }

    console.log(tasktext);

    tasks.push(tasktext);

    document.getElementById("input_felt").value = "";

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

        textSpan.addEventListener("click", function(clickedIndex) {
            return function() {
                tasks.splice(clickedIndex, 1);
                renderTasks();
            };
        }(index));

        outputElement.appendChild(listItem);
    });
}

document.getElementById("input_felt").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addtext(event);
    }
});