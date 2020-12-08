var canvas
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var player,PlayerImage;
var virus,coronaVirus;
var sanitizer,SanitizerImage;
var mask,maskImg;
var gameState;
var gameState = "first";
var gameState = "second";
var score;

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    var player=new PlayerClass(250,50,35,35);
    
    this.stroke("white");
    
    var sanitizer=new Sanitizer(250,250,20,20);
    
    this.stroke("blue");
    this.visible=false;
    var mask=new Mask(270,250,20,20);
   
    this.stroke("pink");
    this.visible=false;
}

function draw(){
    background("green");
    textSize(25);
    Engine.update(engine);
    text("SCORE : ",70,20);
   if(virus.lifeTime===250){
     score=score+1;
   }
    if(score===10){
     gameState="second";
     virus.destroy;
     player.destroy;
     sanitizer.visible=true;
     mask.visible=true;
     text("CLICK ON MASK AND SANITIZER IMAGES TO GET IMMUNITY BOOST",250,280);
    }
    if(keyDown("LEFT_ARROW")){
     player.velocityX=-3;
    }
    if(keyDown("RIGHT_ARROW")){
        player.velocityX=3;
       }
       if(mousePressedOver(sanitizer.png) && mousePressedOver(mask.jpg)){
           gameState = "first";
           var player=new PlayerClass(250,50,35,35);
           sanitizer.visible=false;
            mask.visible=false;
    
           this.stroke("white");
           
           var sanitizer=new Sanitizer(250,250,20,20);
           
           this.stroke("blue");
           this.visible=false;
           var mask=new Mask(270,250,20,20);
          
           this.stroke("pink");
           this.visible=false;
           var virus=new Virus(500,200,5,5);
           virus.velocityY=(6 + 2*score/100);
          
           virus.lifeTime=250;
       }
    player.display();
    virus.display();
    sanitizer.display();
    mask.display();
    spawnVirus();
    drawSprites();
}

function spawnVirus(){
    if(frameCount % 30===0){
        var virus=new Virus(500,200,5,5);
        virus.velocityY=( + 2*score/100);
       
        virus.lifeTime=250;
    }
}