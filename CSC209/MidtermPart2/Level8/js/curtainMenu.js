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