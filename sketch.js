var r = 0;
var g = 50;
var b=255;

const Engine = Matter.Engine;
const World= Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world;
var canvas1,canvas2,canvas3
var ball
function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  pillar1= new Castle(500,200,10,800);
  pillar4=new Castle(500,250,10,800);
  pillar5=new Castle(500,300,10,800);
  pillar6=new Castle(500,350,10,800);
  pillar14=new Castle(500,150,50,800);

  pillar2=new Castle(700,200,10,800);
  pillar7=new Castle(700,250,10,800);
  pillar8=new Castle(700,300,10,800);
  pillar9=new Castle(700,350,10,800);
  pillar13=new Castle(700,150,50,800);

  pillar3=new Castle(600,250,50,800);
  pillar10=new Castle(600,300,50,800);
  pillar11=new Castle(600,350,50,800);
  pillar12=new Castle(600,200,50,800); 


}

function draw() {
  background(r,g,b);  
  Engine.update(engine);
  r=map(mouseX,0,1200,0,255);
  g=map(mouseX,50,900,0,255);
  b=map(mouseX,100,600,0,255);
  fill("white")
  ellipse(mouseX,mouseY,10,10);
pillar1.display();
pillar2.display();
pillar3.display();
pillar4.display();
pillar5.display();
pillar6.display();

pillar7.display();
pillar8.display();
pillar9.display();

pillar10.display();
pillar11.display();

pillar12.display();
pillar13.display();
pillar14.display();

  fill("orange");
strokeWeight(5);
stroke("red");
ellipse(49,48, 80, 80);
stroke("brown");
strokeWeight(10);
line(394, 250, 300, 100);
line(300, 100, 199, 250);
line(231,198, 150, 100);
line(150, 101, 2, 250);
stroke("blue");
point(200, 200);
point(187, 211);
point(177, 220);
point(169, 230);
point(163, 241);
point(162, 256);
line(172, 278, 300, 396);
point(166, 269);
point(289, 200);
point(278, 215);
point(271, 230);
point(266, 240);
point(266, 251);
point(273, 259);
line(281, 264, 400, 400);
point(280, 263);
stroke("brown");


  drawSprites();
}