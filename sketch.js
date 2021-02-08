
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plain;
var stone, iron, hammer, rubber;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plain = new Plain(400, 660, 1600, 20);
	stone = new Stone(200, 350, 100, 100);
	iron = new Iron(450, 450, 100, 40);
	hammer = new Hammer(100, 100, 90, 40);
	rubber = new Rubber(600, 650, 70);
	sand1 = new Sand(900, 650, 10);
	sand2 = new Sand(910, 650, 10);
	sand3 = new Sand(920, 650, 10);
	sand4 = new Sand(930, 650, 10);
	sand5 = new Sand(940, 650, 10);
	sand6 = new Sand(950, 650, 10);
	sand7 = new Sand(960, 650, 10);
	sand8 = new Sand(970, 650, 10);
	sand9 = new Sand(980, 650, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("lightblue");
  plain.display();
  stone.display();
  iron.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  
  drawSprites();
 
}



