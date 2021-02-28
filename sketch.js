
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
function preload()
{
	tree=loadImage("tree.png")
	boy=loadImage("boy.png")
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(650,690,1300,20);
	//Create the Bodies Here.
mango1=new Mango(1100,200,40);
mango2=new Mango(1000,200,50);
mango3=new Mango(1000,300,40);
s=new Stone(345,430,60);

slingshot=new Slingshot(s.body,{x:345,y:435});
	
  
}


function draw() {
  //rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  fill("white");
 text("X"+mouseX+","+"Y"+mouseY,40,20);
 image(boy,300,300,200,500);
  image(tree,900,100,300,600);
  mango1.display();
  mango2.display();
  mango3.display();
 
 
 
  s.display();
  ground.display();
  
  slingshot.display();
  /*detectcollision(s,mango1);
detectcollision(s,mango2);
detectcollision(s,mango3);*/
isTouching(s,mango1)
isTouching(s,mango2)
isTouching(s,mango3)
 
}
function mouseDragged(){
	Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingshot.fly();
}
/*function detectcollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.radius+lstone.radius)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }*/
  function isTouching(object1,object2){
  if (object1.body.position.x - object2.body.position.x < object2.radius/2 + object1.radius/2
    && object2.body.position.x - object1.body.position.x < object2.radius/2 + object1.radius/2
    && object1.body.position.y - object2.body.position.y < object2.radius/2 + object1.radius/2
    && object2.body.position.y - object2.body.position.y < object2.radius/2 + object1.radius/2) {
    
    Matter.Body.setStatic(object2.body,false);
  }
  
}
