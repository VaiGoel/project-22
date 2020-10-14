var helicopterIMG, helicopterSprite, packageSprite,packageIMG,cloudIMG,cloudSprite,groundIMG,sunIMG,sun;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	cloudIMG = loadImage("cloudIMG.jpg");
	groundIMG = loadImage("ground.jpg");
	sunIMG = loadImage("sun.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	cloudSprite = createSprite(700,100,10,10);
	cloudSprite.addImage(cloudIMG);
	cloudSprite.scale = 0.4;

	sun = createSprite(100,100,10,10);
	sun.addImage(sunIMG);
	sun.scale = 0.5;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.addImage(groundIMG);
	groundSprite.scale = 2.1;
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 245, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  groundSprite.x = ground.position.x;
  groundSprite.y = ground.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic (packageBody,false);
 }
}



