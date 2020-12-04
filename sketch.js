var ghost , gostImg;
var tower , towerImg;
var door, doorImg, doorGroups;
var climber, climberImg,climberGroups;
var gameState = "play";


function preload(){
  
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png")
  
}

function setup(){ 
createCanvas(600,600);
   
 tower = createSprite(300,600,600,600);
  tower.addImage("towerImg",towerImg);
     tower.velocityY = 4;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghostImg",ghostImg);
  ghost.scale = 0.5;
  
  doorGroups = createGroup();
  
  climberGroups = createGroup();
}

function draw(){
 if(gameState=="play"){
  background("cyan");
  
  
  if(tower.y>400){
    tower.y = 300;
 
  }
  
  if(keyDown("space")){
   ghost.velocityY = -5;
    
  }
  
  
  if(keyDown("right_arrow")){
   ghost.velocityX = 5;
    
  }
  
  if(keyDown("left_arrow")){
   ghost.velocityX = -5;
    
  }
  
  if (climberGroups.isTouching(ghost)){
    ghost.velocityY = 0;
    ghost.velocityX = 0;
 
    
  }
  if(ghost.y>600){
   gameState = "end";
    
  }

 
 ghost.velocityY = ghost.velocityY+0.8
  doors();
   climbers();
  drawSprites();
}
  if(gameState=="end"){
   background("black");
    fill("red")
    textSize(50);
    text("GAME OVER!!",170,300);
    

  
}
  
}

function doors(){
  if(frameCount%200==0){
  door = createSprite(200,45,10,10);
  door.addImage("doorImg",doorImg);
  door.x = Math.round(random(120,400) );
    door.velocityY = 4;
    
    door.lifetime = 650;
    doorGroups.add(door);
    
    ghost.depth = door.depth;
    ghost.depth = ghost.depth+1;
  }
  
}

function climbers(){
  
  if(frameCount%200==0){
  climber = createSprite(200,95,10,10);
  climber.addImage(climberImg);
  climber.x = door.x;
    climber.velocityY = 4;
    
    climber.lifetime = 650;
    climberGroups.add(climber);
    
  }
  
  
}