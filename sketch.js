let polet
let bund

function setup() {
  createCanvas(450, 400);
  polet = new Sprite();
  polet.diameter = 60;
  bund = new Sprite(width/2,height-2,'s');
  bund.width = width;
  bund.height = 3;

  world.gravity.y = 3
}

function draw() {
  background(255);

}

function mousePressed() {
}