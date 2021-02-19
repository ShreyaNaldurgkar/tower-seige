const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState;


function preload() {

}

function setup() {
  createCanvas(900, 700)

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 670, 900, 10);
  stand1 = new Ground(400, 290, 200, 10);
  stand1.shapeColor = (green);
  stand2 = new Ground(700, 400, 200, 10);
  //LHS
  box = new Box(340, 285, 25, 40);
  box2 = new Box(370, 280, 25, 40);
  box3 = new Box(401, 279, 25, 40);
  box4 = new Box(432, 283, 25, 40);
  box5 = new Box(463, 280, 25, 40);
  //2nd level
  box6 = new Box(371, 245, 25, 40);
  box7 = new Box(402, 245, 25, 40);
  box8 = new Box(433, 245, 25, 40);
  //top
  box9 = new Box(402, 200, 25, 40);

  //RHS
  box10 = new Box(620, 380, 25, 40);
  box11 = new Box(652, 380, 25, 40);
  box12 = new Box(684, 380, 25, 40);
  box13 = new Box(716, 380, 25, 40);
  box14 = new Box(748, 380, 25, 40);
  box15 = new Box(780, 380, 25, 40);

  //2nd level
  box16 = new Box(652, 340, 25, 40);
  box17 = new Box(684, 340, 25, 40);
  box18 = new Box(716, 340, 25, 40);
  box19 = new Box(748, 340, 25, 40);

  //3rd level
  box20 = new Box(684, 300, 25, 40);
  box21 = new Box(716, 300, 25, 40);

  //top
  box22 = new Box(702, 250, 28, 40)

  polygon = new Polygon(100, 260, 30);

  slingshot = new SlingShot(polygon.body, { x: 90, y: 320 });


}


function draw() {
  background(0)
  Engine.update(engine)

  textSize(20);
  fill("white");
  text("Drag the hexagonal stone and release it to launch it towards the blocks", 150, 70);
  text("press space for another chance!",500,600);

  ground.display();
  stand1.display();
  stand2.display();
  box.display();
  box2.display();
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
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  polygon.display();
  slingshot.display();


}

function mouseDragged() {
  if (gameState !== "launched") {
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
  }
}

function mouseReleased() {
  slingshot.fly();
  gameState = "launched";
}

function keyPressed() {
  if (keyCode === 32) {
    slingshot.attach(polygon.body);
    gameState = "on slingshot";
  }
}

