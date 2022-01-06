// declaring global variables
var trex ,trex_running;
var ground, ground_image;

// predefined function to load animations and sounds
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  // create a trex sprite
  trex = createSprite(50,160,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  // creating a ground sprite
  ground = createSprite(300,190,600,7);
  ground.addImage("ground",ground_image);

  // moving the ground
  ground.velocityX = -5
}

function draw(){
  background("white")
  
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  // adding gravity
  trex.velocityY += 0.2;

  // to make the trex stand on top of the ground
  trex.collide(ground);

  // creating infinite ground for the game
  if(ground.x < 0){
    ground.x = width/2
  }
  
  drawSprites();
}
