var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var cat, catLeft, catRight;
var bird;
var birds = [];
var backpack;
var x = 0;


function preload() {

  mySound = loadSound("assets/bongocat.mp3");

}

function setup() {


  createCanvas(1024, 688);

  mySound.setVolume(10);
  mySound.play();


  backpack = loadImage("assets/backpack.jpg");

  sea = loadFont("assets/sea.ttf");
  textFont(sea, 50);

  catLeft = loadImage("assets/catLeft.png");
  catRight = loadImage("assets/catRight.png");
  cat = catLeft

  bird = loadImage("assets/yarn.png");
  birds[0] = loadImage("assets/yarn.png");
  birds[1] = loadImage("assets/yarn.png");
  birds[2] = loadImage("assets/yarn.png");

  backpack = loadImage("assets/backpack.jpg", 1024, 688);
  //spawn cars
  for (var i = 0; i < 10; i++) {
    cars.push(new Car());
  }





  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (myState) {

    case 0: // splash screen
      image(backpack, width / 2, height / 2);


      text('welcome to my game!', x, 255);
      x += 3;
      if (x > width) {
        x = 255;
      }
      break;

    case 1:
      game();
      timer++;
      if (timer > 800) {
        myState = 3;
        timer = 0;
      } // the game state
      break;

    case 2: // the win state
      resetTheGame()
      //background('red');
      image(backpack, width / 2., height / 2);
      fill('black');
      text('winner!', x, 255);
      x += 3;
      if (x > width) {
        x = 255;
      }
      break;

    case 3: // the lose state
      resetTheGame()
      //background('black');
      image(backpack, width / 2., height / 2);

      fill("black")
      text('loser!', x, 255);
      x += 3;
      if (x > width) {
        x = 255;
      }
      break;
      //no
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
  this.birdNum = floor(random(birds.length - 1));
  this.timer = 0;


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
    if (this.timer > 20) {
      this.birdNum = this.birdNum + 1;
      this.timer = 0
    }

    if (this.birdNum > birds.length - 1) {
      this.birdNum = 0;
    }
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
  if (keyCode === LEFT_ARROW) cat = catLeft;
  if (keyCode === RIGHT_ARROW) cat = catRight;
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
  image(backpack, width / 2, height / 2);
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
  image(cat, frogPos.x, frogPos.y, 120, 120);
  checkForKeys();

}
