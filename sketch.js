
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	ball = new Paper(100,500);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
	ball.display();
	if(keyPressed ("up")){
		Matter.Body.applyForce(ball,ball.position,{x : 130 , y : -145})
	}
  groundObject.display();
  dustbinObj.display()
 // Matter.Body.setVelocity(ball.Body,10);

}
function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.Body,ball.Body.position,{x : 3,y : -5.5})
	}
}

