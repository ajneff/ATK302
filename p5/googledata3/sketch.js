var namesArray = [];

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1bRZxalMOxhKXVJb3eouVh4iKRbBIafmmuW_kHeRA6QE';
  // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Circle(data[i].Color, data[i].Nickname));
  }

}


function draw() {
  background('yellow');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Circle(myColor, myName) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.color = myColor;
  this.vel = createVector(random(-3, 3), random(-3, 3));

  this.display = function() {
    fill(this.color) ;

    // if (this.Color == "Blue") {
    //   fill("Blue");
    // }
    // if (this.Color == "Red") {
    //   fill("Red");
    // }s

ellipse(this.pos.x, this.pos.y, 100, 100);
fill('white') ;
text(this.name, this.pos.x, this.pos.y);
  }

  this.drive = function() {

    x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;

  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

    // put an ellipse here
    // if (this.shape == "Circle") {


    // } else {
    //   rect(this.pos.x, this.pos.y, 100, 100);
    // }
