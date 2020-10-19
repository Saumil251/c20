var wall,thickness

var bullet,speed,weight

function setup() {
createCanvas(1500,400)
speed=random(223,321)
weight=random(30,52)
bullet=createSprite(50,200,50,50)
bullet.shapeColor="orange"
wall=createSprite(1200,200,thickness,height/2)
bullet.velocityX=speed
thickness=random(22,83)


}

function draw() {
background("black")
if(wall.x-bullet.x<(wall.width+bullet.width)/2)
{
bullet.velocityX=0;
var damage=0.5* weight* speed* speed/thickness*thickness*thickness
console.log(damage)
if(damage>10)
{
bullet.shapeColor="red"
}

wall.shapecolor=color(80,80,80)

if(damage<10)
{
    bullet.shapeColor="green"
}



}

drawSprites();
}



