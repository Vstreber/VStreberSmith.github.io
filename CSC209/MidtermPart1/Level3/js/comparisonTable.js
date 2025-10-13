function addRow() {
    var row = ROW.replace("CHECKCROSS1", "fa fa-check").replace("CHECKCROSS2", "fa fa-remove");
    //window.alert(row);
    
    document.getElementById("table").innerHTML += row;
}