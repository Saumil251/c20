function isTouching(fixedRect,movingRect) {

    if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
        movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && 
        fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
        movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2  ){
    return true
    
        } 
        else{
         return false
        }


}
function bounceOff(fixedRect,movingRect){
    if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
        movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 ){

            fixedRect.velocityX=fixedRect.velocityX* -1
            movingRect.velocityX=movingRect.velocityX* -1
        }
        if(fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 &&
            movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2  ){

                fixedRect.velocityY=fixedRect.velocityY* -1
                movingRect.velocityY=movingRect.velocityY* -1

            }


}