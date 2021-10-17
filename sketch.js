const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var cannon_base;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}
function setup() {
  createCanvas(800,550);

  engine = Engine.create();
  world = engine.world;

  tower = new Tower(90, 380, 160, 310);
  cannon_base = new Cannon_base(90,380,82,90);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);
    tower.display();
    cannon_base.display();

 
}

