/** A modified version of openTab - opens just the first tab when site loads.*/
function activateFirstTab(filename) {

    /** Changing selected tab (and creating "selected" effect) */
    let firstTab = document.getElementsByClassName("tablinks")[0];    
    firstTab.className = "tablinks active";

    prevTab = null;
    prevContent = null;

    /** Sending XML request to openTab.php, 
     * which will save the current note and replace it with the new tab's note. */
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("content").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "../php/openTab.php?currentTab="+firstTab.innerHTML+"&filename="+filename+"&prevTab="+prevTab+"&prevContent="+prevContent);
    xhttp.send();
}

function openTab(evt, noteName, filename) {

    /** Getting the tab+content that was just switched off of to auto-save. */
    var prevTab = document.getElementsByClassName("tablinks active")[0].innerHTML;
    var prevContent = document.getElementById("content").innerHTML;

    /** Changing selected tab (and creating "selected" effect) */
    var tabs = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].className = "tablinks";
    }
    evt.currentTarget.className += " active";

    /** Sending XML request to openTab.php, 
     * which will save the current note and replace it with the new tab's note. */
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("content").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "../php/openTab.php?currentTab="+noteName+"&filename="+filename+"&prevTab="+prevTab+"&prevContent="+prevContent);
    xhttp.send();

}

function loadNotes(filename) {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("tabBar").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "../php/loadNotes.php?filename="+filename);
    xhttp.send();
}

function saveNote(noteName, filename) {
    var content = document.getElementById("content").innerHTML;

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("content").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "../php/saveNote.php?filename="+filename+"&content="+content+"&title="+noteName);
    xhttp.send();
    
    window.location.reload();
}

function createNote(filename) {
    
    saveNote(document.getElementsByClassName('tablinks active')[0].innerHTML, filename);

    var title = prompt("Please enter a title (must be unique!).");

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("content").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "../php/createNote.php?filename="+filename+"&title="+title);
    xhttp.send();

    window.location.reload();

}

function deleteNote(noteName, filename) {
    
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("content").innerHTML =
        this.responseText;
    }
    xhttp.open("GET", "../php/deleteNote.php?filename="+filename+"&title="+noteName);
    xhttp.send();

    window.location.reload();

}