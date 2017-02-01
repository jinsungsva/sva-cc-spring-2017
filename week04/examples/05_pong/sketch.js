var circleX = 10;
var circleY = 20;
var circleSize = 20;
var speedX = 2;
var speedY = 2.1;
var boxWidth = 10;
var boxHeight = 100;

var leftSideBoxY;
var rightSideBoxY;

function setup() {
  createCanvas(400, 400);
  leftSideBoxY = height / 2 - boxHeight / 2;
  rightSideBoxY = height / 2 - boxHeight / 2;
}

function draw() {
  var leftSideBoxX = 10;
  var rightSideBoxX = width - boxWidth - 10;

  background(100);

  stroke(0);
  fill(255);

  // draw left side box
  rect(leftSideBoxX, leftSideBoxY, boxWidth, boxHeight);
  // draw right side box
  rect(rightSideBoxX, rightSideBoxY, boxWidth, boxHeight);

  ellipse(circleX, circleY, circleSize, circleSize);

  circleX += speedX;
  circleY += speedY;

  if (circleX > width - circleSize/2 || circleX < 0 + circleSize/2) {
    speedX *= -1;
  } else if (circleY > height - circleSize/2 || circleY < 0 + circleSize/2) {
    speedY *= -1;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   rightSideBoxY--;
 } else if (keyCode === DOWN_ARROW) {
   rightSideBoxY++;
 }
}
