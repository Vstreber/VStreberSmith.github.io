/**
 * Determines time elapsed in user session.
 * Accessed when user logs in/logs out.
 */

var start = NaN;
var time;

function timeLoggedIn(startEnd) {

    if (startEnd == "start") {
        start = Date.now();
        time = 0;
        return;
    }

    if (startEnd == "end") {
        time = Date.now() - start;
        time =  time / 60000;
        document.getElementById("timeElapsed").value = time;
        return time;
    }
}