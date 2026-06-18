const taskinput = document.getElementById("task");
const dateinput = document.getElementById("date");
const timeinput = document.getElementById("Time");
const addTaskButton = document.getElementById("addtask");
const removeTaskButton = document.getElementById("removetask");
const todolist = document.getElementById("todolist");
let todo = [];
// this is to create a new element in the DOM

function addtodo(task, date, time) {
    const li = document.createElement("li");

    li.innerHTML = `
        <strong>${task}</strong><br>
        Date: ${date}<br>
        Time: ${time}
    `;

    todolist.appendChild(li);

    todo.push({ task, date, time });

    setAlarm(task, date, time);
}

function setAlarm(task, date, time) {
    const alarmTime = new Date(`${date}T${time}`);

    const now = new Date();
    const delay = alarmTime - now;

    if (delay > 0) {
        setTimeout(() => {
            alert(`⏰ Reminder: ${task}`);
        }, delay);
    } else {
        alert("You selected a past time!");
    }
}

removeTaskButton.addEventListener("click", () => {
    if (todo.length > 0) {
        todo.splice(0, 1);
    }

    if (todolist.firstElementChild) {
        todolist.removeChild(todolist.firstElementChild);
    }
    console.log(todo);
    
});
// this the event for addtask button
addTaskButton.addEventListener("click", () => {
    const task = taskinput.value;
    const date = dateinput.value;
    const time = timeinput.value;

    if (task && date && time) {
        addtodo(task, date, time);

        taskinput.value = "";
        dateinput.value = "";
        timeinput.value = "";
    } else {
        alert("Please fill in all fields");
    }
});
function setAlarm(task, date, time) {
    const alarmTime = new Date(`${date}T${time}`);

    const now = new Date();
    const delay = alarmTime - now;

    if (delay > 0) {
        setTimeout(() => {
            const alarmSound = document.getElementById("alarmSound");

            alarmSound.play();

            alert(`⏰ Reminder: ${task}`);
        }, delay);
    } else {
        alert("You selected a past time!");
    }
}

const stopAlarmButton = document.getElementById("stopAlarm");
const alarmSound = document.getElementById("alarmSound");

stopAlarmButton.addEventListener("click", () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;
});
