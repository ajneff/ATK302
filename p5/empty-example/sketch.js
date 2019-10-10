var car;

function setup() {
  createCanvas(800, 800) ;
    car = new Car();
}

function draw() {
  background(100);
  car.display();
  car.drive();
}

function Car() {
  this.pos = createVector(100, 100) ;
  this.vel = createVector(random(-5, 5), random(-5,5)) ; ;
  this.x = random(width) ;

  this.display = function() {
    rect(this.pos.x, this.pos.y, 100, 50) ;
  }
  this.drive = function() {
    this.pos.add (this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.x > height) this.pos.x = 0 ;
    if (this.pos.x > 0) this.pos.y = height ;
  }

}
