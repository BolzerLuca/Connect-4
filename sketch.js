let polet
let polet2
let polet3
let polet4
let polet5
let polet6
let polet7
let bund

function setup() {
  createCanvas(450, 450);
  polet = new Sprite();
  polet.diameter = 50;
  polet.stroke = ('white');
  polet2 = new Sprite ();
  polet2.diameter = 50;
  polet3 = new Sprite ();
  polet3.diameter = 50;
  polet4 = new Sprite ();
  polet4.diameter = 50;
  polet5 = new Sprite ();
  polet5.diameter = 50;
  polet6 = new Sprite ();
  polet6.diameter = 50;
  polet7 = new Sprite ();
  polet7.diameter = 50;
  bund = new Sprite(width/2,height-2,'s');
  bund.width = width;
  bund.height = 9;
  bund.color = ('darkblue')
  bund.stroke = ('darkblue')

  for (let i = 0; i < 8; i++){
    søjle = new Sprite(0+(64*i),300 ,9 , 390,"s");
    søjle.color = ("darkblue")
    søjle.stroke = ('darkblue')
  }

  world.gravity.y = 3
}

function draw() {
  background(255);

}

function mousePressed() {
}