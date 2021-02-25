const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5
var bird
var backgroundImg,platform;
var tempLog,slingShot;

function preload() {
    // backgroundImg = loadImage("night.png");
    getBackground();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    // platform = new Ground(150, 305, 300, 170);
    ground1 = new Ground(500,240,210,10)
    ground2 = new Ground(1000,270,210,10)

    box9 = new Box(1000,265,30,40);
    box10= new Box(1010,265,30,40);
    box11= new Box(1020,265,30,40);
    box12= new Box(1030,265,30,40);
    box13= new Box(1025,245,30,40);
    box14= new Box(1015,245,30,40);
    box15 = new Box(1015,235,30,40);



    box1 = new Box(500,235,30,40);
    box2 = new Box(510,235,30,40);
    box3 = new Box(520,235,30,40)
    // box3 = new Box(530,235,30,40);
    box4 = new Box(530,235,30,40);
    // level three 
    box5 = new Box(505,215,30,40)
    box6 = new Box(525,215,30,40)
    box7 = new Box(515,195,30,40)

    box8 = new Box(390,155,30,40)

    bird = new Bird(100,100,500,50);

    // tempLog = new Log(230,180,80,PI/2);
    slingShot = new SlingShot(bird.body, {x:200, y:100});

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    
    Engine.update(engine);
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();


    box1.display();
    box2.display();
    ground1.display();
    ground2.display();
    ground.display();
    box3.display();
    box4.display();

    box5.display();
    box6.display();
    
    box7.display();
    // box8.display();

    bird.display();
    // platform.display();
    // tempLog.display();
    slingShot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x:mouseX, y: mouseY})
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(bird.body)
    }
}

async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime;    //"2021-02-8T18:16:21.319837+05:30"
    var hour = dateTime.slice(11,13);       // 18
    var bg;
    if (hour >= 06 && hour <=18){
        //day time
        bg = "day.png";
    }
    else{
        //night time
        bg = "night.jpg";
    }
    backgroundImg  = loadImage(bg);
}