var lineX1=10;
var lineY1=10;
var lineY2=100;




function setup() {
  createCanvas(480, 480);

}

function draw() {
  background (100);
  lineX1 =10
  while( lineX1 < 300){
    line (lineX1, lineY1, lineX1, lineY2);
    lineX1 = lineX1 + 10;
  }
 }