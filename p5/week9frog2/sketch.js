var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaLeft, yodaRight;
var bird;
var birds = [];

function setup() {

  createCanvas(800, 800);

  //spawn cars
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }

  yodaLeft = loadImage("assets/yodaLeft.gif");
  yodaRight = loadImage("assets/yodaRight.gif");
  yoda = yodaLeft

  bird = loadImage("assets/bird1.png");
  birds[0] = loadImage("assets/bird1.png");
  birds[1] = loadImage("assets/bird2.png");
  birds[2] = loadImage("assets/bird3.png");

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {

    case 0: // splash screen
      background('red');
      fill('white');
      text('welcome to my game!', 255, 255);
      break;

    case 1:
      background('yellow');
      game();
      timer++;
      if (timer > 800) {
        myState = 3;
        timer = 0;
      } // the game state
      break;

    case 2: // the win state
      resetTheGame()
      background('red');
      fill('white');
      text('winner!', 255, 255);
      break;

    case 3: // the lose state
      resetTheGame()
      background('black');
      fill('white');
      text('loser!', 255, 255);
      break;

  }
}
//advance states
function mouseReleased() {
  switch (myState) {

    case 0:
      myState = 1;
      break;

    case 2:
      myState = 0;
      break;

    case 3:
      myState = 0;
      break;

  }
}



// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = 0;
  this.timer = 0;
  this.maxTimer = random(10, 30);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    //  fill(this.r, this.g, this.b);
    // rect(this.pos.x, this.pos.y, 100, 50);
    // ellipse(this.pos.x - 45, this.pos.y + 25, 50, 50);
    // ellipse(this.pos.x + 45, this.pos.y + 25, 50, 50);
    //image(bird, this.pos.x, this.pos.y, 100, 100);


    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer++;
    if (this.timer > this.maxTimer) {
      this.birdNum = this.birdNum + 1;
      this.timer = 0
    }

    if (this.birdNum > birds.length - 1) {
      this.birdNum = 0;
    }

    this.drive = function() {
      this.pos.add(this.vel);

      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;

    }

  }
  //add up + down
  function keyPressed() {
    if (keyCode === LEFT_ARROW) yoda = yodaLeft;
    if (keyCode === RIGHT_ARROW) yoda = yodaRight;
  }


  function checkForKeys() {
    if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 10;
    if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 10;
    if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 10;
    if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 10;

  }


  function resetTheGame() {
    cars = [];
    //spawn cars
    for (var i = 0; i < 30; i++) {
      cars.push(new Car());
    }
    timer = 0;

  }

  function game() {
    background(100);
    for (var i = 0; i < cars.length; i++) {
      cars[i].display();
      cars[i].drive();
      if (cars[i].pos.dist(frogPos) < 50) {
        cars.splice(i, 1);
      }
    }
    if (cars.length == 0) {
      myState = 2

    }
    // draw the frog
    fill('green');
    //ellipse(frogPos.x, frogPos.y, 60, 60);
    image(yoda, frogPos.x, frogPos.y, 120, 120);
    checkForKeys();
  }
}
