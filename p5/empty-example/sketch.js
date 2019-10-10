var car;

function setup() {
  createCanvas(800, 800):
    car = new Car();
}

function draw() {
  background(100);
  car.display();
  car.drive();
}

function Car() {
  this.pos = createVector(100, 100) ;
  this.x = random(width) ;

  this.display = function() {
    rect(this.x, 100, 100, 50) ;
  }
  this.drive = function() {
    this.x = this.x + 5;
    if (this.x > width) this.x = 0 ;
  }

}
