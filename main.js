const inputLabel = document.getElementById("inputField");
const taskInput = document.getElementById("task");
const button = document.getElementById("addTask");
const list = document.getElementById("taskList");
const countingLabel = document.getElementById("counter");
const warningText = document.getElementById("flashingText");
const currentCounting = document.getElementById("current-counter");
const currentCounter = "Done tasks on current list : ";
const counterText = "All time tasks done : ";
let counter = 0;
let arrayWithEverything = [];
let counterOfEverything = 0;
let doneTasksCounter = 0;
let taskArray = [];
let arrayLastPoss = 0;
let opacity = 0;


countingLabel.textContent = counterText + doneTasksCounter;
button.textContent = "Add task";
inputLabel.textContent = "Input :";
currentCounting.textContent = currentCounter + counter;


taskInput.addEventListener("keypress", function (ev) {
    if (ev.key === "Enter") {
        button.click();
    }
});

button.onclick = function () {
    whenClicked();
}

list.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        if (ev.target.classList.toggle("checked")) {
            ++doneTasksCounter;
            ++counter;
            countingLabel.textContent = counterText + doneTasksCounter;
            currentCounting.textContent = currentCounter + counter;
        } else {
            --doneTasksCounter;
            --counter;
            countingLabel.textContent = counterText + doneTasksCounter;
            currentCounting.textContent = currentCounter + counter;
        };
    }
}, false);


function whenClicked() {
    if (taskInput.value < 1) {
        //  alert("You need to write something first!");
        warningText.style.display = "block";
        setTimeout(function () {
            warningText.style.display = "none";
        }, 6000);


    } else {
        let input = taskInput.value;
        taskArray[arrayLastPoss] = input;
        arrayLastPoss++;
        arrayWithEverything[counterOfEverything] = input;
        counterOfEverything++;
        const newTask = document.createElement("li");
        newTask.appendChild(document.createTextNode(taskInput.value));
        const thrashCan = document.createElement("i");
        thrashCan.className = "fa-solid fa-trash-can";
        thrashCan.style.float = "right";
        thrashCan.onclick = function () {
            const index = taskArray.indexOf(newTask.textContent);
            taskArray.splice(index, 1);
            arrayLastPoss--;
            if (counter > 0 && !newTask.classList.toggle("checked")) {
                --counter;
                currentCounting.textContent = currentCounter + counter;
            }
            newTask.parentNode.removeChild(newTask);
            if (taskArray.length == 0) {
                list.style.borderTop = "none";
            }
        }
        newTask.appendChild(thrashCan);
        fade(newTask);
        list.appendChild(newTask);
        taskInput.value = "";
        if (taskArray.length > 0) {
            list.style.borderTop = "2px solid black";
        }
    }
}

function fade(element) {
    let op = 0.1;  // initial opacity
    let pos = 75;
    let timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
        element.style.transform = "translateY(" + pos + "px)";
        pos = pos - 3;
    }, 20);
}

