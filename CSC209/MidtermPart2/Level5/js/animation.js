function randomPosAnimate() {
   const canvas = document.getElementById(1);
   const image = document.getElementById("undersea");
   let num = document.getElementById("num").value;

   for (let i = 0; i < num; i++) {
      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      INTERVALS = [];

      let xpos = Math.floor(Math.random() * (maxx - minx + 1) + minx);
      let ypos = Math.floor(Math.random() * (maxy - miny + 1) + miny);

      /*https://css-tricks.com/snippets/javascript/random-hex-color/*/
      let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      
      
      INTERVALS[i] = setInterval(step, 10, i);

      
      function step() {

         image.addEventListener("load", (e) => {
         ctx.drawImage(image, 0, 0, 500, 300);
         });

         ctx.beginPath();
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(xpos+20,ypos+20);
         ctx.lineTo(xpos+30,ypos+10);
         ctx.lineTo(xpos+20,ypos);
         ctx.lineTo(xpos,ypos+20);
         ctx.lineWidth = 30;
         ctx.strokeStyle = "#CCE2FF";
         ctx.stroke();

         let rand = Math.random();
         if (rand > .5) {
            xpos++;
         } else {
            xpos--;
         }

         ctx.beginPath();
         ctx.moveTo(xpos,ypos);
         ctx.lineTo(xpos+20,ypos+20);
         ctx.lineTo(xpos+30,ypos+10);
         ctx.lineTo(xpos+20,ypos);
         ctx.lineTo(xpos,ypos+20);
         ctx.lineWidth = 5;
         ctx.strokeStyle = randomColor;
         ctx.stroke();
      }
   }
}
