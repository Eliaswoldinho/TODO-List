let tasks = [];

function addtext() {
    let tasktext = document.getElementById("input_felt").value;
    console.log(tasktext);

    tasks.push(tasktext);

    document.getElementById("input_felt").value = "";

    let outputElement = document.getElementById("TaskList");

    outputElement.innerHTML = "";

    tasks.forEach(function(task) {
        let listItem = document.createElement("li");
        
        listItem.style.width = "200px";

        let textNode = document.createTextNode(task);
        listItem.appendChild(textNode);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        listItem.appendChild(checkbox); // legg checkboxen etter texten

        outputElement.appendChild(listItem);
    });
}