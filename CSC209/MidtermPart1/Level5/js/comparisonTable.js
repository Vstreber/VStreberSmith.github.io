function addRow(p1,p2) {
    var row = ROW.replace("CHECKCROSS1", p1).replace("CHECKCROSS2", p2);
    //window.alert(row);
    
    document.getElementById("table").innerHTML += row;
}