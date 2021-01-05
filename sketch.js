var car,wall,carImage,carYImage,carRImage,wallImage;
var speed,weight;

function preload(){
  carImage = loadImage("Bcar.png");
  carYImage = loadImage("Ycar.png");
  carRImage = loadImage("Rcar.png");
  wallImage = loadImage("wall.png")
}

function setup() {
  createCanvas(1600,400);
  carImage.resize(100,0);
  carYImage.resize(100,0);
  carRImage.resize(100,0);
  wallImage.resize(100,0);

  speed=random(55,95);
  weight=random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1000,200,60,height/2);
  
  car.addImage(carImage);
  wall.addImage(wallImage);
//car.scale=0.2;


  car.velocityX = speed;
  //car.debug="true";
}

function draw() {
  background("black"); 
  
  if(wall.x-car.x < (car.width/2 + wall.width/2)){
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22509;
    if(deformation>180){
      //car.shapeColor=color(255,0,0);
      //text("red",500,200);
      
      car.addImage(carRImage);
    }
    else
    if(deformation<180 && deformation>100){
      //car.shapeColor=color(230,230,0);
      //text("yellow",500,200);
      car.addImage(carYImage);
    }else
    if(deformation<100){
     // car.shapeColor=color(0,255,0);
      //text("green",500,200);
      car.addImage(carImage);
    }
  }
  drawSprites();
  
  fill("yellow")
  textSize(30);
  text("speed:"+speed,400,100);
}