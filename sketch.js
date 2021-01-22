var fixedrect,movingrect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);

  fixedrect = createSprite(400,200,50,20);
  fixedrect.shapeColor = "green";
  movingrect = createSprite(100,100,50,80);
  movingrect.shapeColor = "red";
  rect1 = createSprite(700,100,60,60);
  rect1.shapeColor = "yellow";
  rect1.velocityY = 5;
  rect2 = createSprite(700,300,60,60);
  rect2.shapeColour = "blue";
  rect2.velocityY = -5;
 
}

function draw() {
  background(255,255,255); 
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  console.log(movingrect.x-fixedrect.x);

if(fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2 &&
  movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2  &&
  fixedrect.y-movingrect.y < fixedrect.height/2+movingrect.height/2 && 
  movingrect.y-fixedrect.y < fixedrect.height/2+movingrect.height/2){
  fixedrect.shapeColor = "pink";
  movingrect.shapeColor = "pink";
}
else{
  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "red";
}

if(rect1.x-rect2.x < rect1.width/2+rect2.width/2 && 
  rect2.x-rect1.x < rect1.width/2+rect2.width/2){

    rect1.velocityX = rect1.velocityX *(-1);
    rect2.velocityX = rect2.velocityX *(-1);

}
if(rect1.y-rect2.y < rect1.height/2+rect2.height/2 && 
  rect2.y-rect1.y < rect1.height/2+rect2.height/2){
    rect1.velocityY = rect1.velocityY *(-1);
    rect2.velocityY = rect2.velocityY *(-1);
}
  drawSprites();
}