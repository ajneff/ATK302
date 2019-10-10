var cars = [];
var frogPos ;

function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height-80) ;
}

function draw() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
  }
  //draw frogPos
  fill('green') ;
  ellipse(frogPos.x, frogPos.y, 60, 60) ;
}

function Car() {
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.x = random(width);

  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
  }
  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.x > height) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.y = height;
  }

}
