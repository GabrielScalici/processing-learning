// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var box1;

function setup() {
    createCanvas(1200,640);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    box1 = new Box(200, 100, 50, 50)

}

function draw() {
    background(255);
    box1.show();
}
