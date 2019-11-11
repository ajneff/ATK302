var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0;
let snowflakes = [];


function preload() {

  song1 = loadSound('assets/cold2.wav');

  song1.load();
  // song1.stop();
}


function setup() {
  createCanvas(800, 800);

  song1.play()
  song1.loop();
  // song1.stop(); //take dis out

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';
  var myIDString = 'appid=ecb96c6f2772adc0320aaa567d9006dc'; // ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      scale(1.5); {
        fill('blue');
        text("Illinois, " + weather.name, 20, 20);
        text("Temperature = " + weather.main.temp, 20, 40);
        text("Humidity = " + weather.main.humidity, 20, 60);
        text("Wind = " + weather.wind.speed, 20, 80);
      }

      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 225, 170);
      ellipse(x - 100, 325, 400, 150);
      ellipse(x - 425, 200, 200, 125);
      ellipse(x + 225, 350, 200, 150);

      x = x + ws / 3;
      if (x > width) x = 0;

      // thermometer
      fill('white');
      var mappedTemp = 0;
      mappedTemp = map(temperature, -10, 100, 0, height);
      rect(width - 30, height - 10, 20, mappedTemp);

      break;
  }

  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function mouseReleased() {


  // pause all the songs
  song1.play();
}
