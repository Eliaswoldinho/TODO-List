function addtext() {
    let tasktext = document.getElementById("input_felt").value;
    console.log(tasktext);
    let testElement = document.getElementById("test");
    testElement.textContent = tasktext;
}