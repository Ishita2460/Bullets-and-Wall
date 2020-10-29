var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(50, 200, 50, 50);
 
 thickness=random(22,83);
 wall=createSprite(1200,200,thickness,height/2)
 fill=(80,80,80);
  
  speed=random(223,321);
  weight=random(30,52);
  car.velocityX = speed; 

  if(wall.x-bullet.x<(bullet.width+wall.width)/2);
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180);
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      bullet.shapeColor=color(0,255,0);
    }
   }
}

function draw() {
  background("black");  
  drawSprites();
  hasCollided();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullrt.x=lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}