

/**
 * ----------------------------
 *   LEVEL ONE
 * ----------------------------
 */

    let canvas = document.getElementById("1");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(200,200,10,0,2*Math.PI);

    ctx.moveTo(200,200);
    ctx.lineTo(150,150);
    ctx.lineWidth = 5;
    ctx.strokeStyle = "purple";
    ctx.stroke();

/**
 * ----------------------------
 *   LEVEL TWO
 * ----------------------------
 */

    let canvas2 = document.getElementById("2");
    let ctx2 = canvas2.getContext("2d");

    ctx2.beginPath();
    ctx2.arc(200,200,10,0,2*Math.PI);
    ctx2.moveTo(200,200);
    ctx2.lineTo(150,150);
    ctx2.lineWidth = 5;
    ctx2.strokeStyle = "purple";
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(400,100,10,0,2*Math.PI);
    ctx2.moveTo(400,100);
    ctx2.lineTo(350,150);
    ctx2.lineWidth = 5;
    ctx2.strokeStyle = "blue";
    ctx2.stroke();

    ctx2.beginPath();
    ctx2.arc(100,50,10,0,2*Math.PI);
    ctx2.moveTo(100,50);
    ctx2.lineTo(150,70);
    ctx2.lineWidth = 5;
    ctx2.strokeStyle = "orange";
    ctx2.stroke();