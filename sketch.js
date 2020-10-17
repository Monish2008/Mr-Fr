function setup() {
  createCanvas(800,400);
  Mr=createSprite(400, 200, 50, 50);
  Fr=createSprite(300,100,20,20);
}

function draw() {
  background(255,255,255);  
  Mr.x=mouseX;
  Mr.y=mouseY;

  if(Mr.x-Fr.x<Mr.width/2+Fr.width/2&&Fr.x-Mr.x<Mr.width/2+Fr.width/2&&Mr.y-Fr.y<Mr.height/2+Fr.height/2&&Fr.y-Mr.y<Mr.height/2+Fr.height/2){
    Fr.shapeColor="Blue"
    Mr.shapeColor="Green"

  }
   else
   {
     Fr.shapeColor="Grey"
     Mr.shapeColor="Grey"
   }
  drawSprites();
}