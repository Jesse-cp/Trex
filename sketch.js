//creating the charecter variable
var trex
var ground

//creating a variable to store the image of the charecter
var trexImg
var groundImg
function preload()
{
 trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png")
 groundImg = loadImage("ground2.png") 
}

function setup()
{
 createCanvas( 600,400)
trex = createSprite(50,180,20,50)
  trex.addAnimation("runningtrex", trexImg)
  trex.scale = 0.5
  ground = createSprite(200,220,400,20)
  ground.addImage("ground", groundImg)
  ground.velocityX = -15
}


function draw()
{
 background("black")
  
  //continuing the ground
  if (ground.x < 0)
      {
      ground.x = ground.width/2
      }
  
  //making the jump and the gravity
  
  if (keyDown("space"))
    {
    trex.velocityY = -12.5   
      
    }
  
  //gravity 
  
  trex.velocityY += 0.8
  trex.collide(ground)
  drawSprites()
}