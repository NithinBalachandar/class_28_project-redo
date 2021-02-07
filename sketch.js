
const Engine = Matter.Engine;
const Constraint = Matter.Constraint
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground (600,970,1500,50);
	stone1 = new Stone (50,700,30);
	sling = new slingShot (stone1.body,{x:450,y:750});
	tree1 = new Tree (100,700,10,10);
	boy1 = new boy (100,900,10,10);
	mango1 = new mango (1000,600,10,10);
	mango2 = new mango (1200,600,10,10);
	mango3 = new mango (1100,500,10,10);
	mango4 = new mango (1200,500,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
 ground1.display();
 tree1.display();
 stone1.display();
 sling.display();
 boy1.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 line(stone1.body.x,stone1.body.y, {x:200,y:500});
detectcollision(stone1,mango1);
detectcollision(stone1,mango2);
detectcollision(stone1,mango3);
detectcollision(stone1,mango4);

}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    sling.fly();
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
console.log(distance + "false");
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false);
console.log(distance + "true");
}
}
 
