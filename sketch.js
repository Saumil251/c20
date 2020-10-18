var fixedRect
var movingRect
var object1

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(300,100,50,50);
  object1=createSprite(10,200,50,50)
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
fixedRect.velocityX=-5
object1.velocityX=5
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  bounceOff(fixedRect,object1)
  if(isTouching(movingRect,object1)){
movingRect.shapeColor="orange"
object1.shapeColor="orange"
 }
else{
  movingRect.shapeColor="lightGreen"
object1.shapeColor="lightGreen"
}

  drawSprites();
}