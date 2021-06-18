var sea, seaImg;
var ship, ship_Moving;

function preload(){
seaImg = loadImage("sea.png");
ship_Moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);
  sea = createSprite(300,200,600,200);
  sea.scale=0.3
  sea.addImage("s1",seaImg);
  sea.velocityX=-5;
  ship = createSprite(100,180,20,100);
  ship.addAnimation("ship1",ship_Moving);
  ship.scale=0.2
  
}

function draw() {
  background("blue");

  

  if(sea.x < 0){
  sea.x = sea.width/2
  }
 drawSprites();
}