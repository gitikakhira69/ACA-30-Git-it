var rabbit,rabbitImg;
var carrot,carrotImg;
var edges;
var snake,sankeImg,snakeGroup;
var bg;
function preload() {
  rabbitImg = loadImage("images/bunnyImg.png");
  carrotImg = loadImage("images/carrot.png");
  sankeImg = loadImage("images/snake.png");
  bg = loadImage("images/bg.png");
}


function setup() {
  createCanvas(600,600);
  rabbit=createSprite(50,550,20,20)
  rabbit.addImage(rabbitImg);
  rabbit.scale = .3;
  carrot=createSprite(540,50,30,30)
  carrot.addImage(carrotImg);
  carrot.scale = .1;
  edges=createEdgeSprites();
  
 

  obs1=createSprite(50,240,100,20);
  obs1.velocityX=5;
  obs1.shapeColor="blue";
  obs2=createSprite(200,240,100,20)
  obs2.velocityX=5;
  obs2.shapeColor="blue";
  obs3=createSprite(350,240,100,20)
  obs3.velocityX=5;
  obs3.shapeColor="blue";
  obs4=createSprite(500,240,100,20)
  obs4.velocityX=5;
  obs4.shapeColor="blue";

  obs5=createSprite(500,350,100,20)
  obs5.velocityX=-5;
  obs5.shapeColor="blue";
  obs6=createSprite(350,350,100,20)
  obs6.velocityX=-5;
  obs6.shapeColor="blue";
  obs7=createSprite(200,350,100,20)
  obs7.velocityX=-5;
  obs7.shapeColor="blue";
  obs8=createSprite(50,350,100,20)
  obs8.velocityX=-5;
  obs8.shapeColor="blue";

  snakeGroup = new Group();
}

function draw() {
  background(bg);
  rabbit.bounceOff(edges[0]);
  rabbit.bounceOff(edges[1]);
  rabbit.bounceOff(edges[2]);
  rabbit.bounceOff(edges[3]);
  
  if(obs1.x>600) {
    obs1.x= 0;
  }
  else if (obs2.x>600) {
    obs2.x=0;
  }
  else if (obs3.x>600) {
    obs3.x=0;
  }
  else if (obs4.x>600) {
    obs4.x=0;
  }

  if(obs5.x<0) {
    obs5.x=600;
  }
  else if(obs6.x<0) {
    obs6.x=600;
  }
  else if(obs7.x<0) {
    obs7.x=600;
  }
  else if(obs8.x<0) {
    obs8.x=600;
  }
  
  generateSnakes();
  for(var i=0;i<(snakeGroup).length;i++){
    var temp = (snakeGroup).get(i);
    if(rabbit.isTouching(temp)){
      rabbit.x=50;
      rabbit.y=550;
    }
  }

  if(keyDown("up"))
  {
    rabbit.y=rabbit.y-10
  }
  if(keyDown("down"))
  {
    rabbit.y=rabbit.y+10
  }
  if(keyDown("left"))
  {
    rabbit.x=rabbit.x-10
  }
  if(keyDown("right"))
  {
    rabbit.x=rabbit.x+10
  }
  if(rabbit.isTouching(carrot))
  {
    text("You Win",250,300)
  }
  if(rabbit.isTouching(obs1)||rabbit.isTouching(obs2)||rabbit.isTouching(obs3)||rabbit.isTouching(obs4)||rabbit.isTouching(obs5)||rabbit.isTouching(obs6)||rabbit.isTouching(obs7)||rabbit.isTouching(obs8))
  {
    obs1.velocityX=0
    obs2.velocityX=0
    obs3.velocityX=0
    obs4.velocityX=0
    obs5.velocityX=0
    obs6.velocityX=0
    obs7.velocityX=0
    obs8.velocityX=0
    text("You Lose",250,300)
  }
  drawSprites();
}
function generateSnakes(){
  if(frameCount %  50 === 0){
    var snake = createSprite(random(70,500),random(500,120));
    snake.addImage(sankeImg);
    snake.scale=random(0.1,0.3);
    snakeGroup.add(snake);
  }
}
