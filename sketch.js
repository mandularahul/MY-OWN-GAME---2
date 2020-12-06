var kid,kid_img;
var bg,bg_img;
var gameLevel="level2"
var gameState="play"
var gameLevel="level1"
//var gameState="end";
var coin,coin_Img,coin_gif;
var monster,monster_Img;
var invisibleground;
var coinGroup,monsterGroup,invisibleBlockGroup;
var score=0;
var life1,life2,life3,life_Img;
var count=0;
var invisibleBlock;
var gameover,gameover_Img;
var door,door_Img;
var doorGroup;
var bush1,bush2,bush3,bush4,bush5,bush6,bush7,bush8,bush9,bush10;
var bush_Img;
var darkbg_Img;
var invisibleBlocksGroup;
var invisibleBlocks;
var darkbg;
var level1blocker;
var coin1,coin2,monster1,monster2;
var arrow1,arrow2,arrow3,arrow4,arrow1_Img,arrow2_Img,arrow3_Img,arrow4_Img;
var kidlevel2,kidlevel2_Img;
var ghost,ghost1,ghost2,ghost3,ghost_Img;
var kid1,invisibleground1,invisibleground2;
var coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12;
var block;
var level3bg,level3bg_Img;
var kid2;
var house_Img;
var coins1_Img,coins2_Img,coins3_Img,coins4_Img;
var computer_Img;
var inv;
function preload(){
  kid_img=loadAnimation("images/kid1.png","images/kid2.png","images/kid3.png");
  bg_img=loadImage("images/bgImg.jpg");
  coin_Img=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png");
  monster_Img=loadImage("monster1.jpg");
  life_Img=loadImage("images/lives.png");
  gameover_Img=loadImage("images/gameover.jpg");
  door_Img=loadImage("images/door.png");
  bush_Img=loadImage("images/bushes.png");
  darkbg_Img=loadImage("images/level2bg.png");
  arrow1_Img=loadImage("images/arrow1.png");
  arrow2_Img=loadImage("images/arrow2.png");
  arrow3_Img=loadImage("images/arrow3.png");
  arrow4_Img=loadImage("images/arrow4.png");
  kidlevel2_Img=loadImage("images/kidlevel2.png");
  ghost_Img=loadImage("images/ghost.png");
  level3bg_Img=loadImage("images/level3bg.jpg");
  house_Img=loadImage("images/houses.png");
  coins1_Img=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png");
  coins2_Img=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png");
  coins3_Img=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png");
  coins4_Img=loadAnimation("images/coin1.png","images/coin2.png","images/coin3.png","images/coin4.png","images/coin5.png","images/coin6.png","images/coin7.png","images/coin8.png","images/coin9.png");
  computer_Img=loadImage("images/computer.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(0, 0, width, height);
  bg.addImage(bg_img);
  bg.scale=2.5;
  invisibleground=createSprite(10,height-200,6000,20);
  invisibleground.visible=false;
  kid=createSprite(100,height-220);
  kid.addAnimation("kid",kid_img);
  kid.scale=1.5;
  kid.visible=true;
  kid1=createSprite(100,height-500);
  kid1.addAnimation("kid1",kid_img);
  kid1.scale=1.5;
  kid1.visible=false;

  coinGroup=new Group();
  monsterGroup=new Group();
  invisibleBlockGroup=new Group();
  doorGroup=new Group();
  invisibleBlocksGroup=new Group();
  life1=createSprite(width-250,height-700);
  life1.addImage(life_Img);
  life1.scale=0.2;
  life2=createSprite(width-150,height-700);
  life2.addImage(life_Img);
  life2.scale=0.2;
  life3=createSprite(width-50,height-700);
  life3.addImage(life_Img);
  life3.scale=0.2;
  count=0;
  gameover=createSprite(200,200,width,height);
  gameover.addImage(gameover_Img);
  gameover.visible=false;
  gameover.scale=2.5;
  level1blocker=createSprite(width-100,height-200,300,3000);
  level1blocker.visible=false;

  coin=createSprite(width-50,height-500);
  coin.addAnimation("coin",coin_Img);
  coin.velocityX=-7;
  coinGroup.add(coin);

  coin1=createSprite(width+2000,height-500);
  coin1.addAnimation("coin",coin_Img);
  coin1.velocityX=-7;
  coinGroup.add(coin);

  coin2=createSprite(width+4000,height-500);
  coin2.addAnimation("coin",coin_Img);
  coin2.velocityX=-7;
  coinGroup.add(coin);



  monster=createSprite(width+300,height-220);
  monster.addImage(monster_Img);
  monster.velocityY=-2;
  monster.velocityX=-7;
  monster.scale=1.8;

  monster1=createSprite(width+3000,height-220);
  monster1.addImage(monster_Img);
  monster1.velocityX=-7;
  monster1.scale=1.8;

  monster2=createSprite(width+5000,height-600);
  monster2.addImage(monster_Img);
  monster2.velocityY=0.5;
  monster2.velocityX=-7;
  monster2.scale=1.8;

  invisibleBlockGroup.add(monster);
  invisibleBlock=createSprite(width-2000,height-150,240,400);
  invisibleBlock.velocityX=-7;
  invisibleBlock.visible=false;
  monster.visible=true;

  //invisibleBlockGroup.add(monster);
  invisibleBlock1=createSprite(width-2000,height-150,240,400);
  invisibleBlock1.velocityX=-7;
  invisibleBlock1.visible=false;
  monster1.visible=true;

  door=createSprite(width+7000,height-220);
  door.addImage(door_Img);
  door.velocityX=-7;
  /*invisibleBlocksGroup.add(door);
  invisibleBlocks=createSprite(width+100,height-170,240,400);
  invisibleBlocks.velocityX=-7;
  invisibleBlocks.visible=false;
  door.visible=true;*/

  //game Level Stage 2

  bush1=createSprite(width-200,height-300);
  bush1.addImage(bush_Img);
  bush1.visible=false;
  bush1.scale=0.2;

  bush2=createSprite(width-250,height-500);
  bush2.addImage(bush_Img);
  bush2.visible=false;
  bush2.scale=0.2;

  bush3=createSprite(width-300,height-100);
  bush3.addImage(bush_Img);
  bush3.visible=false;
  bush3.scale=0.2;

  bush4=createSprite(width-400,height-700);
  bush4.addImage(bush_Img);
  bush4.visible=false;
  bush4.scale=0.2;

  bush5=createSprite(width-500,height-600);
  bush5.addImage(bush_Img);
  bush5.visible=false;
  bush5.scale=0.2;

  bush6=createSprite(width-550,height-550);
  bush6.addImage(bush_Img);
  bush6.visible=false;
  bush6.scale=0.2;

  arrow1=createSprite(width-150,height-100);
  arrow1.addImage(arrow1_Img);
  arrow1.visible=false;

  arrow2=createSprite(width-350,height-100);
  arrow2.addImage(arrow2_Img);
  arrow2.visible=false;

  arrow3=createSprite(width-250,height-200);
  arrow3.addImage(arrow3_Img);
  arrow3.visible=false;

  arrow4=createSprite(width-250,height-30);
  arrow4.addImage(arrow4_Img);
  arrow4.visible=false;

  ghost=createSprite(width-500,height-250);
  ghost.addImage(ghost_Img);
  //ghost.velocityY=-1;
  ghost.scale=0.1;
  ghost.visible=false;

  ghost1=createSprite(width-500,height-650);
  ghost1.addImage(ghost_Img);
 // ghost.velocityY=-1;
  ghost1.scale=0.1;
  ghost1.visible=false;

  ghost2=createSprite(width-500,height-500);
  ghost2.addImage(ghost_Img);
  //ghost.velocityY=-1;
  ghost2.scale=0.1;
  ghost2.visible=false;

  ghost3=createSprite(width-200,height-600);
  ghost3.addImage(ghost_Img);
  //ghost.velocityY=-1;
  ghost3.scale=0.1;
  ghost3.visible=false;

  invisibleground1=createSprite(10,height-400,6000,20);
  invisibleground1.visible=false;
  invisibleground2=createSprite(10,height-170,6000,20);
  invisibleground2.visible=false;

  //ghost.bounceOff(invisibleground1);
  //ghost.bounceOff(invisibleground2);


   
  coin3=createSprite(550,height-500);
  coin3.addAnimation("coin",coin_Img);
  //coin3.velocityX=-7;
  coinGroup.add(coin);
  coin3.visible=false;

  coin4=createSprite(580,height-500);
  coin4.addAnimation("coin",coin_Img);
  //coin4.velocityX=-7;
  coinGroup.add(coin);
  coin4.visible=false;

  coin5=createSprite(260,height-500);
  coin5.addAnimation("coin",coin_Img);
  //coin5.velocityX=-7;
  coinGroup.add(coin);
  coin5.visible=false;

  coin6=createSprite(300,height-500);
  coin6.addAnimation("coin",coin_Img);
  //coin6.velocityX=-7;
  coinGroup.add(coin);
  coin6.visible=false;

  coin7=createSprite(340,height-500);
  coin7.addAnimation("coin",coin_Img);
  //coin7.velocityX=-7;
  coinGroup.add(coin);
  coin7.visible=false;

  coin8=createSprite(370,height-500);
  coin8.addAnimation("coin",coin_Img);
  //coin8.velocityX=-7;
  coinGroup.add(coin);
  coin8.visible=false;

  coin9=createSprite(400,height-500);
  coin9.addAnimation("coin",coin_Img);
  //coin9.velocityX=-7;
  coinGroup.add(coin);
  coin9.visible=false;

  coin10=createSprite(430,height-500);
  coin10.addAnimation("coin",coin_Img);
  //coin10.velocityX=-7;
  coinGroup.add(coin);
  coin10.visible=false;

  coin11=createSprite(470,height-500);
  coin11.addAnimation("coin",coin_Img);
  //coin11.velocityX=-7;
  coinGroup.add(coin);
  coin11.visible=false;

  coin12=createSprite(500,height-500);
  coin12.addAnimation("coin",coin_Img);
  //coin12.velocityX=-7;
  coinGroup.add(coin);
  coin12.visible=false;

  block=createSprite(1500,420,20,100);
  block.shapeColor="blue";
  block.visible=false;

  kid2=createSprite(100,height-700);
  kid2.addAnimation("kid1",kid_img);
  kid2.scale=1.5;
  kid2.visible=false;
}

function draw() {
  background(255,255,255); 
  if(gameState=="play"){
    //GAMELEVEL STAGE 1
    if(gameLevel=="level1"){
    bg.velocityX=-40;
    if(bg.x<0){
      bg.x=bg.width/2
    }
    if(touches.length>0||keyDown("SPACE")&&kid.y>=50){
      kid.velocityY=-10;
      touches=[];
    }
    if(keyDown(DOWN_ARROW)){
      kid.velocityY=5;
      touches=[];
    }
    kid.velocityY=kid.velocityY+0.8;
    
    kid.collide(invisibleground);
    kid1.collide(invisibleground);
    //coins();
    //monsters();
    //doors();
    if(coinGroup.isTouching(kid)){
      score+=10;
      coinGroup.destroyEach();
    }
    if(coin1.isTouching(kid)){
      score+=10;
      coin1.destroy();
    }
    if(coin2.isTouching(kid)){
      score+=10;
      coin2.destroy();
    }
    if(monster1.isTouching(kid)){
      count+=1;

    }
    if(monster.isTouching(kid)){
      count+=1;

    }
    if(monster2.isTouching(kid)){
      count+=1;

    }

    if(ghost.isTouching(kid1)){
      count+=1;

    }
    if(ghost1.isTouching(kid1)){
      count+=1;

    }
    if(ghost2.isTouching(kid1)){
      count+=1;

    }
    if(ghost3.isTouching(kid1)){
      count+=1;

    }
    if(count==5){
      life3.destroy();
    }
    if(count==100){
      life2.destroy();
    }
    if(count==200){
      life1.destroy();
    }
    console.log(count);
    /*if(count==5){
      life3.destroy();
    }
    else if(count==100){
      life2.destroy();
    }
    else if(count==200){
      life1.destroy();
      gameState="end";
      bg.velocityX=0;
      invisibleBlockGroup.setVelocityXEach(0);
      coinGroup.setVelocityXEach(0);
      monsterGroup.setVelocityXEach(0);
    }*/
  }
  if(gameState=="end"){
    gameover.visible=true;
  }
  
  if(door.isTouching(kid)){
    darkbg=createSprite(width/2,height/2,width,height);
    darkbg.addImage(darkbg_Img);
    darkbg.scale=0.8;
    bg.destroy();
    for (var i = 0; i < 400; i+=20) {
      line(200,i,200,i+10);
      line.shapeColor="yellow";
   }

    //kidlevel2.depth+=200;
    
    //kidlevel2.visible=true;
    ghost.visible=true;
    ghost1.visible=true;
    ghost2.visible=true;
    ghost3.visible=true;
    coin3.visible=true;
    coin4.visible=true;
    coin5.visible=true;
    coin6.visible=true;
    coin7.visible=true;
    coin8.visible=true;
    coin9.visible=true;
    coin10.visible=true;
    coin11.visible=true;
    coin12.visible=true;
    block.visible=true;

    coin3.scale=0.2;
    coin4.scale=0.2;
    coin5.scale=0.2;
    coin6.scale=0.2;
    coin7.scale=0.2;
    coin8.scale=0.2;
    coin9.scale=0.2;
    coin10.scale=0.2;
    coin11.scale=0.2;
    coin12.scale=0.2;

    

    kid1.visible=true;
    kid1.depth+=200;
    kid1.scale=0.6;
    kid.destroy();
    door.destroy();
    life1.depth=kid1.depth;
    life2.depth=kid1.depth;
    life3.depth=kid1.depth;
    ghost.depth=kid1.depth;
    ghost1.depth=kid1.depth;
    ghost2.depth=kid1.depth;
    ghost3.depth=kid1.depth;


    coin3.depth=kid1.depth;
    coin4.depth=kid1.depth;
    coin5.depth=kid1.depth;
    coin6.depth=kid1.depth;
    coin7.depth=kid1.depth;
    coin8.depth=kid1.depth;
    coin9.depth=kid1.depth;
    coin10.depth=kid1.depth;
    coin11.depth=kid1.depth;
    coin12.depth=kid1.depth;
    block.depth=kid1.depth;



    //darkbg.velocityX=kid1.velocityX;

    //background(darkbg_Img);
    /*bush1.visible=true;
    bush2.visible=true;
    bush3.visible=true;
    bush4.visible=true;
    bush5.visible=true;
    bush6.visible=true;

    bush1.depth+=200;
    bush2.depth=bush1.depth;
    bush3.depth=bush1.depth;
    bush4.depth=bush1.depth;
    bush5.depth=bush1.depth;
    bush6.depth=bush1.depth;*/
    //kid.depth+=200
    //kid.scale=0.3;
    /*arrow1.depth=kid1.depth;
    arrow1.visible=true;
    arrow2.depth=kid1.depth;
    arrow2.visible=true;
    arrow3.depth=kid1.depth;
    arrow3.visible=true;
    arrow4.depth=kid1.depth;
    arrow4.visible=true;*/
    //coinGroup.setLifetimeEach(0);
    //doorGroup.setLifetimeEach(0);
    //invisibleBlocksGroup.setLifetimeEach(0);
    //monsterGroup.setLifetimeEach(0);


    //bg.velocityX=0;
    //invisibleBlockGroup.setVelocityXEach(0);
    //coinGroup.setVelocityXEach(0);
    //monsterGroup.setVelocityXEach(0);
    


    gameLevel=="level2";
  }
  if(gameLevel=="level2"){
    bg.velocityX=0;


  }
  if (keyDown(UP_ARROW)) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    //darkbg.velocityY=0.1;
  }
  if (keyDown(DOWN_ARROW)) {
    kid1.velocityX = 0;
    kid1.velocityY = 5;
    //darkbg.velocityY=-0.1;
  }
  if (keyDown(LEFT_ARROW)) {
    kid1.velocityX = -5;
    kid1.velocityY = 0;
    //darkbg.velocityX=0.1;
  }
  if (keyDown(RIGHT_ARROW)) {
    kid1.velocityX = 5;
    kid1.velocityY = 0;
    //darkbg.velocityX=-0.1;
  }
  if(kid1.isTouching(block)){
    




    level3bg=createSprite(width/2,height/2,width,height);
    level3bg.addImage(level3bg_Img);
    level3bg.scale=0.8;
    life1.depth+=200;
    life2.depth+=200;
    life3.depth+=200;
    kid2.depth+=200;
    darkbg.destroy();
    kid1.destroy();
    kid2.visible=true;

//LEVEL 3 OBJECTS
    //var Money = createSprite(1000,1000,10,10);
    ///Money.setAnimation("money");


    var floor1 = createSprite(-25,85,2000,10);
    floor1.shapeColor='black';
    var door1 = createSprite(2010,85,110,10);
    door1.shapeColor='brown' ;
    var coins1 = createSprite(268,55,10,10);
    var coins2 = createSprite(200,122,10,10);
    var coins3 = createSprite(280,255,10,10);
    var coins4 = createSprite(170,355,10,10);
    coins1.addAnimation("coins1",coins1_Img);
    coins2.addAnimation("coins2",coins2_Img);
    coins3.addAnimation("coins3",coins3_Img);
    coins4.addAnimation("coins4",coins4_Img);
    //var score =0;
    var floor2 = createSprite(80,190,675,10);
    floor2.shapeColor='black';
    var box = createSprite(206,165,40,40);
    box.shapeColor='orange';
    var laser1 = createSprite(0,110,10,45);
    laser1.shapeColor='red';
    laser1.velocityX=5;
    var door2 = createSprite(5,150,10,70);
    door2.shapeColor='brown';
    var floor3 = createSprite(-25,290,675,10);
    floor3.shapeColor='black';
    var door3 = createSprite(370,290,110,10);
    door3.shapeColor='brown';
    var computer = createSprite(45,240,10,10);
    computer.addImage(computer_Img);
    var box2 = createSprite(42,272,35,25);
    box2.shapeColor='orange';
    var laser2 = createSprite(300,325,10,10);
    var laser3 = createSprite(225,364,10,10);
    var laser4 = createSprite(150,325,10,10);
    var laser5 = createSprite(75,364,10,10);
    laser2.shapeColor='red';
    laser3.shapeColor='red';
    laser4.shapeColor='red';
    laser5.shapeColor='red';

    laser2.velocityY=6;
    laser3.velocityY=6;
    laser4.velocityY=6;
    laser5.velocityY=6;

    var house = createSprite(30,380,10,10);
    house.addImage(house_Img);
 


    kid2.scale=0.5;
    computer.scale=0.4;
    house.scale=0.4;
    
  
 

    if (kid2.isTouching(door1)) {
      textSize(15);
      fill("white");
      text("Press X to Open Door",240,115);
    }
      
    if (kid2.isTouching(door1) && keyDown("x")) {
      door1.width = 10;
      door1.height = 80;
      door1.x = 312;
      door1.y = 50;
    }
    if (kid2.isTouching(door2)) {
      textSize(15);
      fill("white");
      text("Press X to Open Door",57,140);
    }
      
    if (kid2.isTouching(door2) && keyDown("x")) {
      door2.width = 10;
      door2.height = 80;
      door2.x = 312;
      door2.y = 50;

    //kid2.x=100;
    //kid2.y=276;
    }


    
    textSize(20);
    fill("white");
    text(score,25,20);
    
    
    createEdgeSprites() ;
    kid2.collide(box2);
    kid2.collide(box2) ;
    kid2.collide(door3);
    kid2.collide(floor3);
    kid2.collide(floor1); 
    kid2.collide(door1);
    kid2.collide(floor2);
    kid2.collide(box);
    //laser1.bounceOff(edges);
    //laser2.bounceOff(edges);
    //laser3.bounceOff(edges);
    //laser4.bounceOff(edges);
    //laser5.bounceOff(edges); 
    laser2.bounceOff(floor3); 
    laser3.bounceOff(floor3); 
    laser4.bounceOff(floor3);  
    laser5.bounceOff(floor3);  
    
    if (kid2.isTouching(coins1)) {
      //playSound("sound://category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
      coins1.destroy();

    score=+100; 
      
    }

    if (kid2.isTouching(coins2)) {
      //playSound("sound://category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
      coins2.destroy();
      
    score=+200; 
      
    }

    if (kid2.isTouching(coins3)) {
      //playSound("sound://category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
      coins3.destroy();

    score=+300; 
      
    }

    if (kid2.isTouching(coins4)) {
      //playSound("sound://category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
      coins4.destroy();
      
    score=+400; 
      
    }

    coins1.scale=0.35;
    coins2.scale=0.35;
    coins3.scale=0.35; 
    coins4.scale=0.35;
    
    if (kid2.isTouching(laser1) || kid2.isTouching(laser2) || kid2.isTouching(laser3) || kid2.isTouching(laser4) || kid2.isTouching(laser5)) {
      //reset();
      count+=1;
    //playSound("Police-Siren.mp3");
      
    }

    if (kid2.isTouching(computer)) {
      
      fill("white");
      textSize(15);
      text("Press H to Hack",97,217);
    }

    if (kid2.isTouching(computer) && keyDown("h")) {
      
    door3.width=10;
    door3.height=80;
    door3.x=390;
    door3.y=283;

    door3.shapeColor='green';
    //playSound("sound://category_achievements/lighthearted_bonus_objective_4.mp3");
    computer.addImage(computer_Img); 
      
    }    
    
    if (kid2.isTouching(house)) {
      
      textFont(15);
      fill("white");
      text("YOU WIN ",10,310);
      text("PRESS R TO RESTART ",10,310);
      
    }

    if (kid2.isTouching(house) && keyDown("r")) {
      
    textSize(25);
    /*fill("white");
    text("All Money Collected",115,16);
    text("Press R to Reset",108,40);*/
    }

    if (keyDown("r")) {
        reset();
      }

    drawSprites(); 
    }

    function reset (){
      gameLevel="level1";
    /*score=0;
    thief.x=50;
    thief.y=60;

    door1.width=110;
    door1.height=10;
    door1.x=370;
    door1.y=85;

    money1.y=55;
    money2.y=122;
    money3.y=255;
    money4.y=355;

    door3.x=370;
    door3.y=290;
    door3.width=110;
    door3.height=10;
    door3.shapeColor='brown';

    computer.setAnimation("computer");

    laser1.x=0;

    door2.x=5;
    door2.y=150;

    box.y=165;
    box2.y=272;

    floor1.y=85;
    floor2.y=190;
    floor3.y=290;

    computer.y=240;*/

    }


    if (keyDown(UP_ARROW)) {
      kid2.velocityX = 0;
      kid2.velocityY = -5;
      //darkbg.velocityY=0.1;
    }
    if (keyDown(DOWN_ARROW)) {
      kid2.velocityX = 0;
      kid2.velocityY = 5;
      //darkbg.velocityY=-0.1;
    }
    if (keyDown(LEFT_ARROW)) {
      kid2.velocityX = -5;
      kid2.velocityY = 0;
      //darkbg.velocityX=0.1;
    }
    if (keyDown(RIGHT_ARROW)) {
      kid2.velocityX = 5;
      kid2.velocityY = 0;
      //darkbg.velocityX=-0.1;
    }



  


  if(kid1.isTouching(coin3)){
      score+=10;
      coin3.destroy();
    }
    if(kid1.isTouching(coin4)){
      score+=10;
      coin4.destroy();
    }
    if(kid1.isTouching(coin5)){
      score+=10;
      coin5.destroy();
    }
    if(kid1.isTouching(coin6)){
      score+=10;
      coin6.destroy();
    }
    if(kid1.isTouching(coin7)){
      score+=10;
      coin7.destroy();
    }
    if(kid1.isTouching(coin8)){
      score+=10;
      coin8.destroy();
    }
    if(kid1.isTouching(coin9)){
      score+=10;
      coin9.destroy();
    }
    if(kid1.isTouching(coin10)){
      score+=10;
      coin10.destroy();
    }
    if(kid1.isTouching(coin11)){
      score+=10;
      coin11.destroy();
    }
    if(kid1.isTouching(coin12)){
      score+=10;
      coin12.destroy();
    }

  /*if (arrow1.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }
  if (arrow2.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }
  if (arrow3.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }
  if (arrow4.touches.length>0) {
    kid1.velocityX = 0;
    kid1.velocityY = -5;
    darkbg.velocityY=0.1;
    touches=[];
  }*/


  //GAMELEVEL STAGE 2
  }
  drawSprites();
  fill("Black");
  textSize(40);
  text("Score: "+score,width-500,height-700);
  //fill("White");
  //text(mouseX+" "+mouseY,mouseX,mouseY);
}
/*function coins(){
  if(frameCount%200==0){
    coin=createSprite(width,height-500);
    coin.addAnimation("coin",coin_Img);
    coin.velocityX=-7;
    coinGroup.add(coin);
    //coin.scale=0.5;
    coin.visible=true;
  }
}*/
/*function monsters(){
  if(frameCount%350==0){
    monster=createSprite(width,height-220);
    monster.addImage(monster_Img);
    monster.velocityX=-7;
    monster.scale=1.8;
    invisibleBlockGroup.add(monster);
    invisibleBlock=createSprite(width,height-150,240,400);
    invisibleBlock.velocityX=-7;
    invisibleBlock.visible=false;
    monster.visible=true;
  }
}*/
/*function doors(){


  if(frameCount%450==0){
    door=createSprite(width,height-220);
    door.addImage(door_Img);
    door.velocityX=-7;
    invisibleBlocksGroup.add(door);
    invisibleBlocks=createSprite(width+100,height-170,240,400);
    invisibleBlocks.velocityX=-7;
    invisibleBlocks.visible=false;
    door.visible=true;

  }
}*/
