let y = true;

function toggleMenu() {
    if (y){
        document.getElementById("myNav").style.width = "100%";
        y = false;
    } else{
        document.getElementById("myNav").style.width = "0%";
        y = true;
    }
}

function createMenu() {
    let menu = document.getElementById("menu");

    for (let i = 0; i < NRPROJECTS; i++){
        let link = document.createElement("a");
        link.setAttribute("href",PATHS[i]);
        link.innerHTML = NAMES[i];
        menu.appendChild(link);
    }
}