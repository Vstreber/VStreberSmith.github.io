
// Wanted a way to automatically get an array of all squares: https://stackoverflow.com/questions/17821560/loop-through-all-descendants-of-a-div-js-only
const squares = document.getElementById('myContainer'),
descendents = squares.getElementsByTagName('*');

const squares2 = document.getElementById('myContainer2'),
descendents2 = squares2.getElementsByTagName('*');

function moveSquares()
{
    for (let i = 0; i < descendents.length; i++) {
        let square = descendents[i];
        let x = square.getAttribute("x");
        let y = square.getAttribute("y");
        let xendpos = square.getAttribute("xendpos");
        let yendpos = square.getAttribute("yendpos");
        let stepId = setInterval(step, 5);
        function step() {
            if ((x == xendpos) || (y == yendpos)) {
                clearInterval(stepId);
            } else {
                if (x < xendpos){
                    x++
                }else{
                    x--
                }
                if (y < yendpos){
                    y++
                }else{
                    y--
                }

                square.style.top = x + 'px'; 
                square.style.left = y + 'px';
            }
        }
    }

}

function squareBounce(){
    for (let i = 0; i < descendents2.length; i++) {
    let square = descendents2[i];
    let x = square.getAttribute("x");
    let y = square.getAttribute("y");
    let xstartpos = square.getAttribute("x");
    let ystartpos = square.getAttribute("y");
    let xendpos = square.getAttribute("xendpos");
    let yendpos = square.getAttribute("yendpos");
    let altxendpos = square.getAttribute("xendpos");
    let altyendpos = square.getAttribute("yendpos");
    let stepId = setInterval(step, 5);
    let bounce = 1
    var xdir = "";
    var ydir = "";
    if (x < xendpos){
        xdir = "pos";
    }else{
        xdir = "neg";
    }
    if (y < yendpos){
        ydir = "pos";
    }else{
        ydir = "neg";
    }

    function step() {
        
        if ((x == altxendpos) || (y == altyendpos)) {
            if (xdir == "neg"){
                xdir = "pos";
                x++;
            }else{
                xdir = "neg";
                x--;
            }
            if (ydir == "neg"){
                ydir = "pos";
                y++;
            }else{
                ydir = "neg";
                y--;
            }

            if (bounce == 1) {
                altxendpos = xstartpos;
                altyendpos = ystartpos;
                bounce = 0;
            } else{
                altxendpos = xendpos;
                altyendpos = yendpos;
                bounce = 1;
            }
            
        } else {
            if (xdir == "pos"){
                x++;
            }else{
                x--;
            }
            if (ydir == "pos"){
                y++;
            }else{
                y--;
            }

            square.style.top = x + 'px'; 
            square.style.left = y + 'px';
        }
    }
}

}

function moveRed()
{   
    var redSquare = document.getElementById("redSq");   
    var redPos = 0;
    var stepRedId = setInterval(stepRed, document.getElementById("redSpeed").value);

    function stepRed() {
        if (redPos == 350) {
            clearInterval(stepRedId);
        } else {
            redPos++; 
            redSquare.style.top = redPos + 'px'; 
            redSquare.style.left = redPos + 'px';
        }
    }
}

function moveBlue()
{   
    var blueSquare = document.getElementById("blueSq");   
    var bluePos = 350;
    var stepBlueId = setInterval(stepBlue, document.getElementById("blueSpeed").value);

    function stepBlue() {
        if (bluePos == 0) {
            clearInterval(stepBlueId);
        } else {
            bluePos--;
            blueSquare.style.top = bluePos + 'px'; 
            blueSquare.style.left = bluePos + 'px';
        }
    }
}
