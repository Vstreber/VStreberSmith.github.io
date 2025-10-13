function addRow(name,p1,p2) {
    let table = document.getElementById("table");
    
    let tr = document.createElement("tr");

    let tdname = document.createElement("td");
    tdname.innerHTML = name;

    let tdP1 = document.createElement("td");
    let i1 = document.createElement("i");
    i1.setAttribute("class",p1);
    tdP1.appendChild(i1);

    let tdP2 = document.createElement("td");
    let i2 = document.createElement("i");
    i2.setAttribute("class", p2);
    tdP2.appendChild(i2);

    tr.appendChild(tdname);
    tr.appendChild(tdP1);
    tr.appendChild(tdP2);

    table.appendChild(tr);
}

function addRows() {
    for (let i = 0; i < NRROWS; i++) {
        addRow(NAMES[i], PART1[i], PART2[i]);
    }
}