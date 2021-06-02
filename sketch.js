const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world;
var polygon,polygon_img;
var score = 0
function preload(){
    polygon_img = loadImage("polygon.png")
}


function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground = new Ground(500,390,1000,20);
    stand1 = new Ground(450,280,315,10)
    stand2 = new Ground(780,180,210,10)
    box1 = new pinkbox(700,155,40,40);
    box2 = new pinkbox(741,155,40,40);
    box3 = new pinkbox(782,155,40,40);
    box4 = new pinkbox(823,155,40,40);
    box17 = new pinkbox(864,155,40,40);
    box5 = new bluebox(741,112,40,45);
    box6 = new bluebox(782,112,40,45);
    box7 = new bluebox(823,112,40,45);
    box8 = new bluebox(170,100,50,50);
    box9 = new greenbox(782,65,40,50);
    box10 = new greenbox(190,100,50,50);
    box11 = new greenbox(200,100,50,50);
    box12 = new greenbox(210,100,50,50);
    box13 = new orangebox(585,250,45,50);
    box14 = new orangebox(540,250,45,50);
    box15 = new orangebox(495,250,45,50);
    box16 = new orangebox(450,250,45,50);
    box18 = new orangebox(405,250,45,50);
    box19 = new orangebox(360,250,45,50);
    box20 = new orangebox(315,250,45,50);
    box21 = new greenbox(540,200,45,50);
    box22 = new greenbox(495,200,45,50);
    box23 = new greenbox(450,200,45,50);
    box24 = new greenbox(405,200,45,50);
    box25 = new greenbox(360,200,45,50);
    box26 = new bluebox(495,150,45,50)
    box27 = new bluebox(450,150,45,50)
    box28 = new bluebox(405,150,45,50)
    box29 = new pinkbox(450,100,45,50)

    box30 = new Box(100,70,50,50)

    polygon = Bodies.circle(50,200,20)
    World.add(world,polygon)
    
    slingshot = new SlingShot(this.polygon,{x:100,y:200})
    // polygon = new Polygon(100,100);
    
    

    

   
}

function draw(){
    background("black")
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    // box8.display();
    box9.display();
    box9.score();
    // box10.display();
    // box11.display();
    // box12.display();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();
    ground.display();
    stand1.display();
    stand2.display();
    // polygon.display();  
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();
    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();
    box25.display();
    box25.score();
    box26.display();
    box26.score();
    box27.display();
    box27.score();
    box28.display();
    box28.score();
    box29.display();
    box29.score();
    // box30.display();

    
    imageMode(CENTER)
    image(polygon_img, this.polygon.position.x, this.polygon.position.y,40,40)

    textSize(30)
    text("Score: "+score, 750,40)

}

function mouseDragged(){       
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}