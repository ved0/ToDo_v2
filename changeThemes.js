
const currentTheme = document.getElementById("styling");
const darkModeIcon = document.getElementById("darkModeIcon");
const inputDiv = document.getElementById("inputDiv");
const test = document.getElementById("test");
const todoList = document.getElementById("todoList");


darkModeIcon.addEventListener("click", function (ev) {
    if(inputDiv.childElementCount!=5){
        todoList.append(test);
    }
    if (darkModeIcon.textContent == "dark_mode") {
        currentTheme.href = "darkMode.css";
        darkModeIcon.textContent = "light_mode";
    } else {
        currentTheme.href = "main.css";
        darkModeIcon.textContent = "dark_mode";
    }
}, false);

themeIcon.addEventListener("click", function (ev) {
    inputDiv.append(test);
    list.style.borderTop = "none";
    currentTheme.href = "someExperiment.css";
    darkModeIcon.textContent = "light_mode";
}, false);