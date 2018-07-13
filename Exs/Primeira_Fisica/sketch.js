// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;


function setup() {
    createCanvas(1200,640);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = Bodies.rectangle(300, height, width, 10, {isStatic:true});
    World.add(world, ground);
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, 20, 20));
    console.log("ola");

}

function draw() {
    background(0);

    for(var i=0; i < boxes.length; i++){
        boxes[i].show();
    }

}
