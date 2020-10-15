var bullet,bullet2;
var wall,wall2;
var damage,damage2;
var speed1,speed2;
var thickness,thickness2;
var weight1,weight2;

function setup(){
createCanvas(1200,400);

bullet = createSprite(50,100,10,5);
bullet.shapeColor = "orange";

bullet2 = createSprite(50,300,20,10);
bullet2.shapeColor = "orange";

wall = createSprite(1000,100);
wall.width = random(22,83);

wall2 = createSprite(1000,300);
wall2.width = random(50,100);

speed1 = Math.round(random(215,315));
speed2 = Math.round(random(200,250));
weight1 = Math.round(random(32,45));
weight2 = Math.round(random(42,65));

}

function draw(){
  background(0,0,0); 

bullet.velocityX = speed1;
bullet2.velocityX = speed2;

Collision(bullet,wall,bullet2,wall2);

var damage = (0.5*weight1*speed1*speed1)/wall.width*wall.width*wall.width;
var damage2 = (0.5*weight2*speed2*speed2)/wall2.width*wall2.width*wall2.width;
    
    if(damage<10){
      wall.shapeColor = "green";
    }
    
    else if(damage>10){
    wall.shapeColor = "red";
        }

        if(damage2<10){
          wall2.shapeColor = "green";
        }
        
        else if(damage2>10){
        wall2.shapeColor = "red";
            }

  drawSprites();
}

