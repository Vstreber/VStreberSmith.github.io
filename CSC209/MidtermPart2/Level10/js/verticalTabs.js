function openCity(evt, name) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function createCanvas() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

    // Create linear gradient
    const grad=ctx.createLinearGradient(0,0,280,0);
    grad.addColorStop(0, "lightblue");
    grad.addColorStop(1, "darkblue");

    // Fill outlined text with gradient
    ctx.font = "50px Arial";
    ctx.strokeStyle = grad;
    ctx.strokeText("Hello World",10,80);
}

function createChart() {

    new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
        display: true,
        text: "World Wine Production 2018"
        }
    }
    });
}