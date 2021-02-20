var starImg, fairyImg, bgImg;
var bg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	engine = Engine.create();
	world = engine.world;

	bg = createSprite(800, 750);
	bg.addImage("background", bgImg);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;
	World.add(world, fairy);
	fairy.setCollider("circle", 0, 0, 500);
	fairy.debug = true;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	fairyVoice.loop();
}


function draw() {
  background(bgImg);

  Engine.run(engine);

  keyPressed();

  if(star.y >= 500 && fairy.x >= 550){
	  star.y = 500;
	  fairy.x = 550;
  }


  drawSprites();

}

function keyPressed() {
	if(keyDown("left")){
		fairy.x = fairy.x - 2;
	}

	if(keyDown("right")){
		fairy.x = fairy.x + 2;
	}

	if(keyDown("down")){
		star.velocityY = 10;
	}
}
