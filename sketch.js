const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;
var dustbinImg;

function preload() {
	
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);


	dustbin1 = new Dustbin(1100, 300, 1, 1000);
	dustbin2 = new Dustbin(800, 325, 5, 250);
	
	ground = new Ground(500, 500, 1200, 50);
	paper = new Paper(100, 400, 75);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background("white");
	fill("yellow");
	stroke(0);
	strokeWeight(4);
	textSize(35);
	dustbin1.display();
	dustbin2.display()
	
	ground.display();
	paper.display();
	image(dustbinImg,1000,325,200,250);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 1000, y: -1500 });
	}
}

