var cars = [];
var frogPos ;
//a
function setup() {
  createCanvas(800, 800);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  frogPos = createVector(width/2, height-80)
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1) ;
    }
  }
  //draw frogPos
  fill('green') ;
  ellipse(frogPos.x, frogPos.y, 60, 60) ;
  checkForKeys()
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


function checkForKeys() {
if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}
