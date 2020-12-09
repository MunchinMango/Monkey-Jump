var bananaImage, obstacleImage, obstacleGroup, backgroundImage, back, score, playerRunning, player, banana, bananaGroup, stone, stoneGroup, invisGround;

function preload() {
backgroundImage = loadImage("jungle.jpg");
 playerRunning = loadAnimation ("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png"); 
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");
}

function setup() {
createCanvas(600, 280);
  
 back = createSprite(200, 0, 400,400);
  back.addImage(backgroundImage);
   back.velocityX = -5;
    back.visiblity = false;
     back.x = back.width/2
      back.scale = 1.2;
   
 player = createSprite(50, 190, 20 ,50);
  player.addAnimation("Running",playerRunning);
   player.scale = 0.09;
  
  score = 0;
  
  bananaGroup = createGroup ();
  stoneGroup = createGroup ();
  
  invisGround = createSprite(300, 220, 600, 10)
  invisGround.visible = false;
}

function draw() {
  background(220);
  
  if(back.x < 0){
     back.x = back.width/2;
  }
  
  player.collide(invisGround);
  
  spawnBanana();
  spawnObstacles();
  
  if (player.isTouching(bananaGroup)){
    score = score + 2;
    bananaGroup.destroyEach();
  }
  
  switch(score){
    case 10: player.scale=0.10;
       break;
    case 20: player.scale=0.12;
       break;
    case 30: player.scale=0.14;
       break;
    case 40:player.scale=0.16;
       break; 
    case 50:player.scale=0.18;
       break;
    case 60:player.scale=0.20;  
       break;
    case 70:player.scale=0.22;
       break;
    case 80:player.scale=0.24;
       break;
         }
  
  if (stoneGroup.isTouching(player)){
    player.scale = 0.09;
  }
  //console.debug(player.y);
  if(keyDown("space") && player.y > 186){
  player.setVelocity(0,-10);
     }
  player.velocityY = player.velocityY + 0.6;
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
}

function spawnBanana(){
  
  if (frameCount % 120 === 0){
    
  banana = createSprite(550, 190, 20, 20);
   banana.addImage(bananaImage);
    banana.velocityX=-5;
     banana.lifetime=122;
      banana.scale=0.06
       bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  
  if (frameCount%200===0) {
    stone = createSprite(550, 200,20,20);
    stone.addImage(obstacleImage);
    stone.velocityX=-5;
    stone.lifetime=122;
    stone.scale=0.18;
    stone.setCollider("rectangle",0,0,350,350);
    stoneGroup.add(stone);
     
  }
}