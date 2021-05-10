const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,pig1,log1,bird,box3,box4,ball1,chain1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(460,370,70,70);
    box2 = new Box(640,370,70,70);
    box3 = new Box(550,370,70,70);
    box4 = new Box(550,345,300,10);
    box5 = new Box(460,335,70,70)
    box6 = new Box(550,335,70,70)
    box7 = new Box(640,335,70,70)
    box8 = new Box(550,315,300,10)
    box9 = new Box(460,305,70,70)
    box10 = new Box(550,305,70,70)
    box11 = new Box(640,305,70,70)
    box12 = new Box(550,280,300,10)
    ground = new Ground(200,560,1600,20)
    ball1 = new Ball(250,445,120,120)
    chain1 = new Chain(ball1.body,{x:250,y:100})
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    ball1.display();
    chain1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x:mouseX,y:mouseY})
    
}

function mouseReleased(){
   
    Matter.Body.setPosition(ball1.body, {x:640,y:305})




}