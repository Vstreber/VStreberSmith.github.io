function addRow(p1,p2) {
    var row = ROW.replace("CHECKCROSS1", p1).replace("CHECKCROSS2", p2);
    //window.alert(row);
    
    document.getElementById("table").innerHTML += row;
}

function addRows() {
    for (let i = 0; i < NRROWS; i++) {
        var row = ROW.replace("NAME", NAMES[i]).replace("CHECKCROSS1", PART1[i]).replace("CHECKCROSS2", PART2[i]);
        document.getElementById("table").innerHTML += row;
    }
}