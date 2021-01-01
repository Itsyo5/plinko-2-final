  var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particless = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particles;
var turn = 5;
var gameState = "play";
var plinko1, plinko2, plinko3, plinko4, plinko5, plinko6, plinko7, plinko8, plinko9, plinko10;




var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  getScore();

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 0; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 0; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}





function draw() {
  background(0);
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   


   fill(255);
   textSize(30);
   text("Score: " + score, 30, 30);
   text("Turns Left: " + turn, 600, 30);
   textSize(30);
   writeScore();
   addPoints();
   
   if(gameState === "end"){
     textSize(80);
     fill(20, 255, 200);
     text("Game Over", 190, 250);
     textSize(50);
     text("Your Score Is: " + score, 200, 350);
     fill(20, 200, 100);
     textSize(35);
     text("Click To Play Again!", 250, 450);
     if(mouseIsPressed){
       gameState = "play";
       score = 0;
       turn = 5;
       particles = null;
       getScore();
       writeScore();
     }
    }
}
function mouseClicked(){
  if(gameState!=="end"){
  turn--;
  particles = new Particles(mouseX,10,10);
}
}
async function getScore(){
  plinko1 = Math.round(random(2, 10)) * 50;
  plinko2 = Math.round(random(2, 10))* 50;
  plinko3 = Math.round(random(2, 10))* 50;
  plinko4 = Math.round(random(2, 10)) * 50;
  plinko5 = Math.round(random(2, 10)) * 50;
  plinko6 = Math.round(random(2, 10)) * 50;
  plinko7 = Math.round(random(2, 10)) * 50;
  plinko8 = Math.round(random(2, 10)) * 50;
  plinko9 = Math.round(random(2, 10)) * 50;
  plinko10 = Math.round(random(2, 10)) * 50;
}
function writeScore(){
  textSize(30);
    text(plinko1, 13.5, 525);
    text(plinko2, 93.5, 525);
    text(plinko3, 173.5, 525);
    text(plinko4, 253.5, 525);
    text(plinko5, 333.5, 525);
    text(plinko6, 413.5, 525);
    text(plinko7, 493.5, 525);
    text(plinko8, 573.5, 525);
    text(plinko9, 653.5, 525);
    text(plinko10, 733.5, 525);
    
}
async function addPoints(){
  if(particles != null){
    particles.display();
    if(particles.body.position.y > 760){
      if(particles.body.position.x < 80 && particles.body.position.x > 10){
         score+=plinko1;
         particles = null;
      }
      else if(particles.body.position.x < 160 && particles.body.position.x > 90){
       score+=plinko2;
       particles = null;
     }
      else if(particles.body.position.x < 240 && particles.body.position.x > 170){
       score+=plinko3;
       particles = null;
     }
      else if(particles.body.position.x < 320 && particles.body.position.x > 250){
       score+=plinko4;
       particles = null;
     }
      else if(particles.body.position.x < 400 && particles.body.position.x > 330){
       score+=plinko5;
       particles = null;
     }
      else if(particles.body.position.x < 480 && particles.body.position.x > 410){
       score+=plinko6;
       particles = null;
     }
     else if(particles.body.position.x < 560 && particles.body.position.x > 490){
       score+=plinko7;
       particles = null;
     }
    else if(particles.body.position.x < 640 && particles.body.position.x > 570){
       score+=plinko8;
       particles = null;
     }
    else if(particles.body.position.x < 720 && particles.body.position.x > 650){
     score+=plinko9;
     particles = null;
     }
     else if(particles.body.position.x < 800 && particles.body.position.x > 730){
       score+=plinko10;
       particles = null;
     } else {
       particles = null;
       }
      if(turn <= 0){
       gameState = "end";
     }
    }
  }
}