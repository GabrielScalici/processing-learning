
var circle = {
    x: 0,
    y: 0,
}

var color = {
    r: 0,
    g: 0,
    b: 0,
}


function setup() {
  // put setup code here
    createCanvas(1200,640);
    background(255);
}

function draw() {

    color.r = random(100,255);
    color.b = random(100,200);
    color.g = 0;

    circle.x = random(0, 1200);
    circle.y = random(0, 640);

    noStroke();
    fill(color.r,color.g,color.b,100);
    ellipse(circle.x,circle.y,24,24);

}

function mouseDragged() {
    color.r = random(100,105);
    color.b = random(100,105);
    color.g = 0;

    noStroke();
    fill(color.r,color.g,color.b,100);
    ellipse(mouseX,mouseY, 50, 50);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        background(255);
    }else if (keyCode === RIGHT_ARROW) {
        background(0);
    }
}
