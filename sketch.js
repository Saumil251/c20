var fixedRect
var movingRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(300,100,50,50);
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"

}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX
  movingRect.y=mouseY
  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2  ){
fixedRect.shapeColor="yellow"
movingRect.shapeColor="yellow"

    } 
    else{
      fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
    }
  drawSprites();
}