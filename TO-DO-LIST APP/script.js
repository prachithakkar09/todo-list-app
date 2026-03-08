function addTask(){

let task = document.getElementById("taskInput").value

if(task === ""){
alert("Please enter a task")
return
}

let list = document.getElementById("taskList")

let item = document.createElement("li")

item.textContent = task

let deleteBtn = document.createElement("button")

deleteBtn.textContent = "Delete"

deleteBtn.onclick = function(){
list.removeChild(item)
}

item.appendChild(deleteBtn)

list.appendChild(item)

document.getElementById("taskInput").value = ""

}