function addRow(p1,p2) {
    var row = ROW.replace("CHECKCROSS1", p1).replace("CHECKCROSS2", p2);
    //window.alert(row);
    
    document.getElementById("table").innerHTML += row;
}

function addRows(p1,p2) {
    var row = ROW.replace("CHECKCROSS1", p1).replace("CHECKCROSS2", p2);
    for (let i = 0; i < NRROWS; i++) {
        document.getElementById("table").innerHTML += row;
    }
}