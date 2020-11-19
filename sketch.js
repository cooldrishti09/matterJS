
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,450,70)
ground=new Ground(800,670,1600,20)
dustbinL=new Dustbin(1200,650)
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  dustbinL.display()
  drawSprites();
 
}

function keyPressed()
{ 
if(keyCode === UP_ARROW) 
{
Matter.Body.applyForce(paper.body, paper.body.position, {x:45, y: -45})
}
}

