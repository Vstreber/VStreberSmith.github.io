let x1 = true;
let x2 = true;
let x3 = true;
let x4 = true;
let x5 = true;
function readHide1() {
    if (x1){
        document.getElementById("complete1").style.backgroundColor = "green";
        document.getElementById("button1").innerHTML = "Mark Incomplete"
        x1 = false;
    } else{
        document.getElementById("complete1").style.backgroundColor = "red";
        document.getElementById("button1").innerHTML = "Mark Complete"
        x1 = true;
    }
}
function readHide2() {
    if (x2){
        document.getElementById("complete2").style.backgroundColor = "green";
        document.getElementById("button2").innerHTML = "Mark Incomplete"
        x2 = false;
    } else{
        document.getElementById("complete2").style.backgroundColor = "red";
        document.getElementById("button2").innerHTML = "Mark Complete"
        x2 = true;
    }
}
function readHide3() {
    if (x3){
        document.getElementById("complete3").style.backgroundColor = "green";
        document.getElementById("button3").innerHTML = "Mark Incomplete"
        x3 = false;
    } else{
        document.getElementById("complete3").style.backgroundColor = "red";
        document.getElementById("button3").innerHTML = "Mark Complete"
        x3 = true;
    }
}
function readHide4() {
    if (x4){
        document.getElementById("complete4").style.backgroundColor = "green";
        document.getElementById("button4").innerHTML = "Mark Incomplete"
        x4 = false;
    } else{
        document.getElementById("complete4").style.backgroundColor = "red";
        document.getElementById("button4").innerHTML = "Mark Complete"
        x4 = true;
    }
}
function readHide5() {
    if (x5){
        document.getElementById("complete5").style.backgroundColor = "green";
        document.getElementById("button5").innerHTML = "Mark Incomplete"
        x5 = false;
    } else{
        document.getElementById("complete5").style.backgroundColor = "red";
        document.getElementById("button5").innerHTML = "Mark Complete"
        x5 = true;
    }
}

var startTime, endTime;

function start() {
  startTime = new Date();
};

var timeDiff;

function end() {
  endTime = new Date();
  timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  console.log(timeDiff + " seconds");
}

function startGame() {
    document.getElementById("gameOver").innerHTML = "";
    start();
    document.getElementById("start").innerHTML = "Click the butterflies!";
    document.getElementById("butterfly1").style.visibility = "visible";
}

function butterfly1Click() {
    document.getElementById("butterfly2").style.visibility = "visible";
    document.getElementById("butterfly1").style.visibility = "hidden";
}


function butterfly2Click() {
    document.getElementById("butterfly3").style.visibility = "visible";
    document.getElementById("butterfly2").style.visibility = "hidden";
}

function butterfly3Click() {
    document.getElementById("butterfly3").style.visibility = "hidden";
    endGame();
}

function endGame() {
    document.getElementById("butterfly3").style.visibility = "hidden";
    end();
    document.getElementById("gameOver").innerHTML = `You took ${timeDiff} seconds to click all three butterflies.`
    document.getElementById("start").innerHTML = "Retry!";
}

function toggleTheme() {
    let theme = document.getElementById('theme');
    let cat = document.getElementById('cat')
    if (theme.getAttribute('href') == 'Stylesheets/day.css') {
        theme.setAttribute('href', 'Stylesheets/night.css');
        cat.setAttribute('src', 'images/nightcat.png');
    } else {
        theme.setAttribute('href', 'Stylesheets/day.css');
        cat.setAttribute('src', 'images/daycat.png');
    }
}