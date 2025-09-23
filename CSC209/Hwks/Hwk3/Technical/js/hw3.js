
let x = true;
let y = true;
let z = true;

const d = new Date();

function readHide() {
    if (x){
        document.getElementById("secret").innerHTML = "SECRET HIDDEN TEXT!"
        document.getElementById("readbutton").innerHTML = "Hide"
        x = false;
    } else{
        document.getElementById("secret").innerHTML = " "
        document.getElementById("readbutton").innerHTML = "Read Me!"
        x = true;
    }
}

function showCredits() {
    if (y){
        document.getElementById("credits").innerHTML = "I utilized W3Schools, as well as the following linked Geeks for Geeks page to create this website: https://www.geeksforgeeks.org/javascript/how-to-switch-between-multiple-css-stylesheets-using-javascript/-->"

        document.getElementById("z").innerHTML = "Hide Credits"
        y = false;
    } else{
        document.getElementById("credits").innerHTML = " "
        document.getElementById("z").innerHTML = "Show Credits"
        y = true;
    }
}

function showDay() {
    
    year = d.getFullYear() - 2000;
    month = d.getMonth() + 1;
    day = d.getDate();

    let dateString = `The current date is ${month}/${day}/${year}`

    if (z){
        document.getElementById("date").innerHTML = dateString
        document.getElementById("datebutton").innerHTML = "Hide Date"
        z = false;
    } else{
        document.getElementById("date").innerHTML = " "
        document.getElementById("datebutton").innerHTML = "Show Date"
        z = true;
    }

}
// derived from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
function hideSchedule() {
    schedule = document.getElementById("schedule");
    if (schedule.style.display === "none") {
        schedule.style.display = "block";
    } else {
        schedule.style.display = "none";
    }
}

function toggleTheme() {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'css/light.css') {
        theme.setAttribute('href', 'css/dark.css');
    } else {
        theme.setAttribute('href', 'css/light.css');
    }
}

// visible trait found when poking around CSS section - https://www.w3schools.com/cssref/pr_class_visibility.php
function hideRow1() {
    schedule = document.getElementById("row1");
    button1 = document.getElementById("row1Hide");

    if (schedule.style.visibility === "hidden") {
        schedule.style.visibility = "visible";
    } else {
        schedule.style.visibility = "hidden";
        button1.style.visibility = "visible";
    }
}

function hideRow2() {
    schedule = document.getElementById("row2");
    button2 = document.getElementById("row2Hide");
    if (schedule.style.visibility === "hidden") {
        schedule.style.visibility = "visible";
    } else {
        schedule.style.visibility = "hidden";
        button2.style.visibility = "visible";
    }
}

function toggleSide() {
    let main = document.getElementById('main');
    let nav = document.getElementById('nav');

    if (nav.getAttribute('class') == 'left') {
        nav.setAttribute('class', 'right');
        main.setAttribute('class', 'mainr');
    } else {
        nav.setAttribute('class', 'left');
        main.setAttribute('class', 'mainl');
    }
}
