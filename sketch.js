
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof=new Roof(400,50,500,20);	

bob1=new Bob (200,270);
bob2=new Bob (300,270);
bob3=new Bob (400,270);
bob4=new Bob (500,270);
bob5=new Bob (600,270);

rope1=new Rope(bob1.body, {x:200, y:50});
rope2=new Rope(bob2.body, {x:300, y:50});
rope3=new Rope(bob3.body, {x:400, y:50});
rope4=new Rope(bob4.body, {x:500, y:50});
rope5=new Rope(bob5.body, {x:600, y:50});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

roof.display();

keyPressed();

  drawSprites();
 
}


function keyPressed(){
if (keyCode===UP_ARROW) {
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-6, y:-12});
}
}
