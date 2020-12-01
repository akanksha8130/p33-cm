const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var count =0
var gameState="play"

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(240,790,480,20)

   g1=new Ground(0,750,10,200)
   g2=new Ground(65,750,10,200)
   g3=new Ground(135,750,10,200)
   g4=new Ground(205,750,10,200)
   g5=new Ground(275,750,10,200)
   g6=new Ground(345,750,10,200)
   g7=new Ground(415,750,10,200)
   g8=new Ground(475,750,10,200)



    for (var j =20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background("black");
  textSize(20)
  fill ("white")
 text("Score : "+score,50,50);
 textSize( 15)
 text(" 500 ", 5, 550);
 text(" 500 ", 80, 550);
 text(" 500 ", 160, 550);
 text(" 100 ", 240, 550);
 text(" 100 ", 320, 550);
 text(" 100 ", 400, 550);
 
  Engine.update(engine);
  ground.display();
  g1.display()
  g2.display()
  g3.display()
  g4.display()
  g5.display()
  g6.display()
  g7.display()
  g8.display()
  if(frameCount%60===0){
   particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
   score++;
 }

for (var j = 0; j < particles.length; j++) {
 
   particles[j].display();
 }
  if(gameState=== "end")
  {
     text("Gameover",150,250)
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }
     if(particles!=null)
     {
     particles.display()
     }
if(particles.body.position.y>760)
{
   if (particles.body.position.x < 300) 
   {
       score=score+500;      
       particles=null;
       if ( count>= 5)
        gameState ="end";                          
   }}
   else if (particles.body.position.x < 600 && particles.body.position.x > 301 ) 
   {
    score = score + 100;
   particles=null;
if ( count>= 5) 
{
   gameState ="end";

}}
else if (particles.body.position.x < 900 && particles.body.position.x > 601 )
{
 score = score + 200;
particles=null;
if ( count>= 5) 
{ 
   gameState ="end";

 }      
              
}
  


     
   
  
  

}
function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particles=new Particles(mouseX, 10, 10, 10); 
  }   
}