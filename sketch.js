
var trex ,trex_running;
var ground
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(40,170,60,20)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(200,180,600,10)

}

function draw() {
background("black")
if(keyDown("space")){
trex.velocityY=-3

}
trex.collide(ground)
  trex.velocityY=trex.velocityY=0.5

  
drawSprites()
}
