

function createCanvases() {
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
}

/**
 * ----------------------------
 *   LEVEL THREE
 * ----------------------------
 */

/* derived from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function randomPositionLimited(id) {
   let canvas = document.getElementById(id);
   let ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
   let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

   let xpos2 = Math.floor(Math.random() * (maxx - minx + 1) + minx);
   let ypos2 = Math.floor(Math.random() * (maxy - miny + 1) + miny);

   let xpos3 = Math.floor(Math.random() * (maxx - minx + 1) + minx);
   let ypos3 = Math.floor(Math.random() * (maxy - miny + 1) + miny);

   let linexpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
   let lineypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

   let linexpos2 = Math.floor(Math.random() * (maxx - minx + 1) + minx);
   let lineypos2 = Math.floor(Math.random() * (maxy - miny + 1) + miny);

   let linexpos3 = Math.floor(Math.random() * (maxx - minx + 1) + minx);
   let lineypos3 = Math.floor(Math.random() * (maxy - miny + 1) + miny);

   ctx.beginPath();
   ctx.arc(xpos,ypos,10,0,2*Math.PI);
   ctx.moveTo(xpos,ypos);
   ctx.lineTo(linexpos,lineypos);
   ctx.lineWidth = 5;
   ctx.strokeStyle = "purple";
   ctx.stroke();

   ctx.beginPath();
   ctx.arc(xpos2,ypos2,10,0,2*Math.PI);
   ctx.moveTo(xpos2,ypos2);
   ctx.lineTo(linexpos2,lineypos2);
   ctx.lineWidth = 5;
   ctx.strokeStyle = "blue";
   ctx.stroke();

   ctx.beginPath();
   ctx.arc(xpos3,ypos3,10,0,2*Math.PI);
   ctx.moveTo(xpos3,ypos3);
   ctx.lineTo(linexpos3,lineypos3);
   ctx.lineWidth = 5;
   ctx.strokeStyle = "orange";
   ctx.stroke();
}

/**
 * ----------------------------
 *   LEVEL FOUR
 * ----------------------------
 */

function randomPosition(id) {
   let canvas = document.getElementById(id);
   let ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   for (let i = 0; i < NRPTS; i++) {
      let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://css-tricks.com/snippets/javascript/random-hex-color/*/
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

      let linexpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let lineypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);
      ctx.beginPath();
      ctx.arc(xpos,ypos,10,0,2*Math.PI);
      ctx.moveTo(xpos,ypos);
      ctx.lineTo(linexpos,lineypos);
      ctx.lineWidth = 5;
      ctx.strokeStyle = randomColor;
      ctx.stroke();
   }
}

/**
 * ----------------------------
 *   LEVEL FIVE
 * ----------------------------
 */

function clearIntervals(INTERVALS, NRPTS){
   for (let i = 0; i < NRPTS; i++){
      clearInterval(INTERVALS[i]);
   }
}

function randomPosAnimate(id) {
   let canvas = document.getElementById(id);
   let ctx = canvas.getContext("2d");
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   

   for (let i = 0; i < NRPTS; i++) {
      
      let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://css-tricks.com/snippets/javascript/random-hex-color/*/
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

      let linexpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let lineypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://stackoverflow.com/questions/5985072/moving-a-point-along-a-line-in-javascript-canvas*/
      let Angle = Math.atan2(lineypos - ypos, linexpos - xpos);
      let Sin = Math.sin(Angle);
      let Cos = Math.cos(Angle);
      
      let INTERVALS = [];
      clearIntervals(INTERVALS,NRPTS);
      INTERVALS[i] = setInterval(step, 10, i);

      function step() {
         
         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 12;
         ctx.strokeStyle = "#D2F6D9";
         ctx.stroke();

         if ((xpos >= 500) || (ypos >= 300) || (xpos <= 0) || (ypos <= 0)) {
            clearIntervals(INTERVALS,NRPTS);
         } else {
            xpos += Cos;
            ypos += Sin;
            linexpos += Cos;
            lineypos += Sin;
         }

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 10;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}

/**
 * ----------------------------
 *   LEVEL SIX
 * ----------------------------
 */

function randomPosAnimateArbitrary(id) {
   let canvas = document.getElementById(id);
   
   

   for (let i = 0; i < NRPTS; i++) {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://css-tricks.com/snippets/javascript/random-hex-color/*/
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

      let linexpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let lineypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://stackoverflow.com/questions/5985072/moving-a-point-along-a-line-in-javascript-canvas*/
      let Angle = Math.atan2(lineypos - ypos, linexpos - xpos);
      let Sin = Math.sin(Angle);
      let Cos = Math.cos(Angle);
      
      let INTERVALS = [];
      INTERVALS[i] = setInterval(step, Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval), i);

      function step() {

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 12;
         ctx.strokeStyle = "#DBF6D2";
         ctx.stroke();

         if ((xpos >= 500) || (ypos >= 300) || (xpos <= 0) || (ypos <= 0)) {
            clearIntervals(INTERVALS,NRPTS);
         } else {
            xpos += Cos;
            ypos += Sin;
            linexpos += Cos;
            lineypos += Sin;
         }

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 10;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}

/**
 * ----------------------------
 *   LEVEL SEVEN
 * ----------------------------
 */

function randomPosAnimateSpecify(id) {
   let canvas = document.getElementById(id);
   let num = document.getElementById("num").value;

   for (let i = 0; i < num; i++) {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://css-tricks.com/snippets/javascript/random-hex-color/*/
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

      let linexpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let lineypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://stackoverflow.com/questions/5985072/moving-a-point-along-a-line-in-javascript-canvas*/
      let Angle = Math.atan2(lineypos - ypos, linexpos - xpos);
      let Sin = Math.sin(Angle);
      let Cos = Math.cos(Angle);
      
      let INTERVALS = [];
      INTERVALS[i] = setInterval(step, Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval), i);

      function step() {

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 12;
         ctx.strokeStyle = "#F4F6D2";
         ctx.stroke();

         if ((xpos >= 500) || (ypos >= 300) || (xpos <= 0) || (ypos <= 0)) {
            clearIntervals(INTERVALS,num);
         } else {
            xpos += Cos;
            ypos += Sin;
            linexpos += Cos;
            lineypos += Sin;
         }

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 10;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}

/**
 * ----------------------------
 *   LEVEL EIGHT
 * ----------------------------
 */

function randomPosAnimateSpecify2(id) {
   let canvas = document.getElementById(id);
   let num = document.getElementById("num2").value;
   points = [];

   for (let i = 0; i < num; i++) {
      let point = [];
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://css-tricks.com/snippets/javascript/random-hex-color/*/
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

      let linexpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let lineypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://stackoverflow.com/questions/5985072/moving-a-point-along-a-line-in-javascript-canvas*/
      let Angle = Math.atan2(lineypos - ypos, linexpos - xpos);
      let Sin = Math.sin(Angle);
      let Cos = Math.cos(Angle);
      
      let INTERVALS = [];
      INTERVALS[i] = setInterval(step, Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval), i);

      point[0] = xpos;
      point[1] = ypos;
      point[2] = linexpos;
      point[3] = lineypos;
      point[4] = randomColor;

      points[i] = point;

      function step() {

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 12;
         ctx.strokeStyle = "#F6E4D2";
         ctx.stroke();

         if ((xpos >= 500) || (ypos >= 300) || (xpos <= 0) || (ypos <= 0)) {
            clearIntervals(INTERVALS,num);
         } else {
            xpos += Cos;
            ypos += Sin;
            linexpos += Cos;
            lineypos += Sin;
         }

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 10;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}

function resetAnimate(id) {
   let canvas = document.getElementById(id);
   
   for (let i = 0; i < points.length; i++) {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let xpos = points[i][0];
      let ypos = points[i][1];

      let randomColor = points[i][4];

      let linexpos = points[i][2];
      let lineypos = points[i][3];

      let Angle = Math.atan2(lineypos - ypos, linexpos - xpos);
      let Sin = Math.sin(Angle);
      let Cos = Math.cos(Angle);
      
      let INTERVALS = [];
      INTERVALS[i] = setInterval(step, Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval), i);

      function step() {

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 12;
         ctx.strokeStyle = "#F6E4D2";
         ctx.stroke();

         if ((xpos >= 500) || (ypos >= 300) || (xpos <= 0) || (ypos <= 0)) {
            clearIntervals(INTERVALS,points.length);
         } else {
            xpos += Cos;
            ypos += Sin;
            linexpos += Cos;
            lineypos += Sin;
         }

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 10;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}


/**
 * ----------------------------
 *   LEVEL NINE
 * ----------------------------
 */

function randomPosAnimateSpecify3(id) {
   let canvas = document.getElementById(id);
   let num = document.getElementById("num3").value;
   points = [];

   for (let i = 0; i < num; i++) {
      let point = [];
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://css-tricks.com/snippets/javascript/random-hex-color/*/
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

      let linexpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let lineypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://stackoverflow.com/questions/5985072/moving-a-point-along-a-line-in-javascript-canvas*/
      let Angle = Math.atan2(lineypos - ypos, linexpos - xpos);
      let Sin = Math.sin(Angle);
      let Cos = Math.cos(Angle);
      
      let INTERVALS = [];
      INTERVALS[i] = setInterval(step, Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval), i);

      point[0] = xpos;
      point[1] = ypos;
      point[2] = linexpos;
      point[3] = lineypos;
      point[4] = randomColor;

      points[i] = point;

      function step() {

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 12;

         if (document.getElementById("trail").checked == true) {
            ctx.strokeStyle = "#ffffffff";
         } else {
            ctx.strokeStyle = "#F6D2D2";
         }
         
         ctx.stroke();

         if ((xpos >= 500) || (ypos >= 300) || (xpos <= 0) || (ypos <= 0)) {
            clearIntervals(INTERVALS,num);
         } else {
            xpos += Cos;
            ypos += Sin;
            linexpos += Cos;
            lineypos += Sin;
         }

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 10;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}

function resetAnimate2(id) {
   let canvas = document.getElementById(id);
   
   for (let i = 0; i < points.length; i++) {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let xpos = points[i][0];
      let ypos = points[i][1];

      let randomColor = points[i][4];

      let linexpos = points[i][2];
      let lineypos = points[i][3];

      let Angle = Math.atan2(lineypos - ypos, linexpos - xpos);
      let Sin = Math.sin(Angle);
      let Cos = Math.cos(Angle);
      
      let INTERVALS = [];
      INTERVALS[i] = setInterval(step, Math.floor(Math.random() * (maxInterval - minInterval + 1) + minInterval), i);

      function step() {

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 12;
         if (document.getElementById("trail").checked == true) {
            ctx.strokeStyle = "#ffffffff";
         } else {
            ctx.strokeStyle = "#F6D2D2";
         }
         ctx.stroke();

         if ((xpos >= 500) || (ypos >= 300) || (xpos <= 0) || (ypos <= 0)) {
            clearIntervals(INTERVALS,points.length);
         } else {
            xpos += Cos;
            ypos += Sin;
            linexpos += Cos;
            lineypos += Sin;
         }

         ctx.beginPath();
         ctx.arc(xpos,ypos,10,0,2*Math.PI);
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(linexpos,lineypos);
         ctx.lineWidth = 10;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}
