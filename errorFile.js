/*var doraemon,doraemon_running,doraemon_zombie;
var zombie,zombie_running,zombie_dead;
var T1,T2;
var firstPage;
var story;
var rules;
var Themeimg;
var gameState="initial";
var PLAY=1;
var END=0;
var gadget;
var changePage;

var backgroundImg;
var tile,tileImg;
var tileGroup;
var zombieGroup;
var counter =0
function preload(){
doraemon_running=loadAnimation("d1.png","d2.png","d3.png","d4.png");
doraemon_zombie=loadImage("zombied1.png");
backgroundImg=loadImage("BG.png");
zombie_running=loadAnimation("Walk (1).png","Walk (2).png","Walk (3).png","Walk (4).png");
zombie_dead=loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (10).png");
zombie_attack=loadAnimation("Attack (1).png","Attack (2).png","Attack (3).png",
"Attack (4).png","Attack (5).png");
T1=loadImage("t1.jpg");
T2=loadImage("t2.jpg");
story=loadImage("story.jpg");
firstPage=loadImage("1stpage.jpg");
gadget=loadImage("gadget.jpg");
tileImg=loadImage("ground2.png");
restartImg=loadImage("restart.png");




}

function setup(){
    createCanvas(1200,800);
    doraemon=createSprite(200,600);
    doraemon.addAnimation("d",doraemon_running);
    doraemon.scale=0.6;
    t1=createSprite(600,400);
    t1.addImage("t1",T1);
    t1.visible=false;
    t1.scale=0.3;
    t2=createSprite(600,400);
    t2.addImage("t2",T2)
    t2.visible=false;
    t2.scale=0.3;
    changePage=createButton("NEXT");
    changePage.position(800,95);
    restart=createSprite(250,110,10,10);
   // restart.addImage(restartImg);
    restart.visible=false;
    restart.scale=0.4;
  
     gameOver=createSprite(250,90,10,10);
    // gameOver.addImage(gameOverImg);
     gameOver.visible=false;
     gameOver.scale=0.5;
      
    
    tileGroup = new Group();
   zombieGroup = new Group();
   story1=createSprite(600,400);
   story1.visible=false;
   story1.scale=0.3;
   story1.addImage("story",story)
   changePage=createButton("Change");
   changePage.position(800,95);
  
   
   
}
function draw(){
background(backgroundImg);
if(gameState==="initial"){
  changePage.mouseClicked(()=>{
    counter +=1
switch(counter){
case 1 :  t1.visible=true;
            break;
case 2 : t2.visible=true;
         t1.visible=false;
            break;
case 3 : t2.visible=false;
    t1.visible=false;
    story1.visible = true
    break;
default : console.log("error")
}

//console.log(gameState);
 
if (gameState===PLAY){
  //if(ground.x<0){
    //ground.x=ground.width/2;
  
 // }
  score = score + Math.round(getFrameRate()/60);
  background.velocityX = -(6 + 3*score/100);

  if(keyDown("space") && doraemon.y >= 600) {
    doraemon.velocityY = -12;
  }
  console.log(doraemon.y);
 
  if(keyDown("k")){
     gadget.velocityX=3;
     zombie.addAnimation("zd",zombie_dead);
     

  }
doraemon.velocityY =doraemon.velocityY + 0.8

 /* if (ground.x < 0){
    ground.x = ground.width/2;
  }

 doraemon.collide(invisibleGround);
  spawnTiles();
  spawnZombies();

  if(zombieGroup.isTouching(doraemon)){
    gameState = END;
}
if(tileGroup.isTouching(doraemon)){
  score=score+30;
 tileGroup.destroyEach();
}

}
else if (gameState === END) {
  gameOver.visible = true;
  restart.visible = true;
  
  //set velcity of each game object to 0
  ground.velocityX = 0;
  doraemon.velocityY = 0;
  zombieGroup.setVelocityXEach(0);
  tileGroup.setVelocityXEach(0);
  
  //change the trex animation
 doraemon.changeAnimation("dz",doraemon_zombie);
  
  //set lifetime of the game objects so that they are never destroyed
  zombieGroup.setLifetimeEach(-1);
  tileGroup.setLifetimeEach(-1);
  
  if(mousePressedOver(restart)) {
    reset();
  }
}

drawSprites();



}
}
function spawnZombies() {
  if(frameCount % 60 === 0) {
    var zombie = createSprite(600,165,10,40);
    zombie.velocityX = -6;
    zombie.addAnimation("zr",zombie_running);
    
    //generate random obstacles
   /* var rand = Math.round(random(1,6));
    switch(rand){
      case 1:obstacle.addImage(Obstacle1);
        break;
      case 2:obstacle.addImage(Obstacle2);
        break;
      case 3:obstacle.addImage(Obstacle3);
        break;
      case 4:obstacle.addImage(Obstacle4);
        break;
      case 5:obstacle.addImage(Obstacle5);
        break;
      case 6:obstacle.addImage(Obstacle6);
        break;
        default:break;
    }
    //assign scale and lifetime to the obstacle           
   zombie.scale = 0.5;
    zombie.lifetime = 100;
    zombieGroup.add(obstacle);
  }
}
function spawnTiles() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
   tile = createSprite(600,120,40,10);
    tile.y = Math.round(random(80,120));
    tile.addImage(tileImg);
   tile.scale = 0.9;
    tile.velocityX = -3;
    
     //assign lifetime to the variable
   tile.lifetime = 200;
    
    //adjust the depth
   tile.depth = doraemon.depth;
   doraemon.depth = doraemon.depth + 1;
    
    //add each cloud to the group
    tileGroup.add(tile);
  }
  
}}
*/