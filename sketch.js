const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function setup() {
	createCanvas(800,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree1=new Tree(600,600);
	ground1=new Ground(800/2, 600-50, 800,20);
	stone1=new Stone(170,390);
	boy1=new Boy(240,435);
	mango1=new Mango(580,130);
	mango2=new Mango(670,190);
	mango3=new Mango(530,200);
	mango4=new Mango(670,270);
	mango5=new Mango(530,270);
	mango6=new Mango(600,240);

	sling1 = new SlingShot(stone1.body,{x:130, y:430});

	launcherObject=new Launcher(stone1.body,{x:130, y:430});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  	  tree1.display();
	  ground1.display();
	  stone1.display();
	  boy1.display();
	  mango1.display();
	  mango2.display();
	  mango3.display();
	  mango4.display();
	  mango5.display();
	  mango6.display(); 
	  sling1.display();
	  launcherObject.display();
		
	  detectCollision(stone1, mango1);
	  detectCollision(stone1, mango2);
	  detectCollision(stone1, mango3);
	  detectCollision(stone1, mango4);
	  detectCollision(stone1, mango5);
	  detectCollision(stone1, mango6);
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    sling1.fly();
	launcherObject.fly();
}

function detectCollision(lstone, lmango){

	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance= dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y );

	if (distance <= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango, false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body, {x:170, y:390});
		launcherObject.attach(stone1.body);
	}
}


	/*
	var collision2 = Matter.SAT.collides(stone1,mango2);
	if(collision2.collided){
		Matter.Body.setStatic(mango2.body, false);
	}
*/

 