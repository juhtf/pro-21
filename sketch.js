
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 875);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Matter.Bodies.circle(120,200,2);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj=new ground(width/2,670,width,20);
  leftSide=new ground(1100,600,20,120);
  rightSide=new ground(1100,600,20,120);

  function keyPressed(){
	if(keyCode===UP_ARROW){
		ball.setVelocity(3);
	}
  }
  
  drawSprites();

  groundObj.display();
 
}


