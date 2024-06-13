function toggleCategories() {
    var caty = document.getElementById("caty");
    if (caty.style.display === "none") {
        caty.style.display = "block";
    } else {
        caty.style.display = "none";
    }
}

function toggleTaskbar() {
    var taskbar = document.getElementById("taskbar");
    taskbar.style.display = "block";
}

function cancelTaskbar() {
    taskbar.style.display = "none";
}
function addnewtask() {
    var div = document.createElement("div")
    var contain = document.querySelector("container")
    var taskname = document.querySelector("taskName")
    div.setAttribute("class", "container")
    div.innerHTML = `<h2>${taskname.value}</h2>`
    container.append(div)
}