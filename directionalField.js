/**`
 * Created by Edmond Tu on 2/17/2017.
 */
var x;
var y;
var equation =function() {return  2*x + y + Math.pow(y,2);};
var allTheSlopes = [];

function getSlope () {
    var xStart = input("xStart");
    var xEnd = input("xEnd");
    var yStart = input("yStart");
    var yEnd = input("yEnd");
    var stepSize = input("stepSize");
    for (var i = xStart; i <= xEnd; i++) {
        for (var j = yStart; j <= yEnd; j++) {
            x = i;
            y = j;
            var slope = equation;
            allTheSlopes.push(slope);
            //draw(slope);
        }
    }
    console.log("hi");
    console.log(allTheSlopes);
}

function input(element) {
    return document.getElementById(element).value;
}

function draw(slope) {
    var pic = document.getElementById("slopeField");
    var boo = pic.getContext("2d");
    boo.beginPath();
    boo.moveTo(0,0);
    boo.lineTo(slope, 100);
    boo.stroke();
}