var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies;


var engine;
var world;
var box1;

function setup() {
	createCanvas(windowWidth / 2, windowHeight / 2);
	engine = Engine.create();
	world = Engine.world;
	box1 = Bodies.rectangle(400, 200, 80, 80);
	Engine.run(engine);
}

function draw() {
	// put drawing code here
	background(52);
	rect(box1.position.x, box1.position.y, 80, 80);
}
