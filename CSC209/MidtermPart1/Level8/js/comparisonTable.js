function addRow(name,p1,p2) {
    var row = ROW.replace("NAME", name).replace("CHECKCROSS1", p1).replace("CHECKCROSS2", p2);    
    document.getElementById("table").innerHTML += row;
}

function addRows() {
    for (let i = 0; i < NRROWS; i++) {
        addRow(NAMES[i], PART1[i], PART2[i]);
    }
}