var player,playershootsimg,playerdieimg,playerwalkimg
var enemy,enemyimg
var gameState="play"

var bgimg
var obs,obsimg,obstacle,obsgroup

function preload(){
obsimg=loadAnimation("bg_removed/obs/1.png"/*,"bg_removed/obs/2.png","bg_removed/obs/3.png","bg_removed/obs/4.png"*/)
playershootsimg=loadAnimation("bg_removed/player/1.png","bg_removed/player/2.png")
playerdieimg=loadAnimation("bg_removed/player/3.png","bg_removed/player/4.png","bg_removed/player/5.png","bg_removed/player/6.png","bg_removed/player/7.png")
playerwalkimg=loadAnimation("bg_removed/player/8.png","bg_removed/player/9.png","bg_removed/player/10.png")

enemyimg=loadAnimation("bg_removed/enemy/11.png","bg_removed/enemy/12.png","bg_removed/enemy/13.png","bg_removed/enemy/14.png","bg_removed/enemy/15.png")

bgimg=loadImage("backgroung.gif")


   }

function setup() {
    createCanvas(windowWidth,windowHeight)
    player=createSprite(width/2,height-220) 
    player.addAnimation("walk",playerwalkimg)
    player.addAnimation("shoot",playershootsimg)
    player.addAnimation("die",playerdieimg)
    player.scale = 2

  


    enemy=createSprite(100,height-200)
    enemy.addAnimation("walk",enemyimg)
    enemy.scale=2.5


    obsgroup=new Group()
   // enemy.addAnimation("hit",enemyimg)



}

function draw() {
 background(bgimg)


if(gameState==="play"){
    if(keyDown("a")){
        player.x -=15
    }


    if(keyDown("d")){
        player.x +=15
    }


    if(frameCount%250==0){
    //y=Math.round(random(50,height-50))
    obstacle=createSprite(width,height-150)
    obstacle.scale=.75
    obstacle.velocityX=-5
    obstacle.addAnimation("weapon",obsimg)
    obsgroup.add(obstacle)
}


    if(player.isTouching(enemy) || player.isTouching(obsgroup)){
        gameState="die"
        obsgroup.destroyEach()
        enemy.destroy()
        player.destroy()
        }

      
}




if(gameState==="die"){
    background(0)
    textSize(80)
    fill("yellow")
    stroke("red")
    strokeWeight(4)
    text ("GAME OVER",width/2-100,height/2)

}


 drawSprites()
}