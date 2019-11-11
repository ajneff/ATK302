var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0 ;


function preload() {

  song1 = loadSound('assets/cold.mp3');

  song1.loop();
  song1.stop();
}


function setup() {
  createCanvas(400, 400);

  song1.play()
  song1.loop();
  song1.stop(); //take dis out

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';
  var myIDString = 'appid=ecb96c6f2772adc0320aaa567d9006dc'; // ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed ;
  temperature = weather.main.temp ;

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
      fill('blue');
      text("Bloomington-Normal, IL " + weather.name, 20, 20);
      text("Temperature = " + weather.main.temp, 20, 40);
      text("Humidity = " + weather.main.humidity, 20, 60);
      text("Wind = " + weather.wind.speed, 20, 80);

      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      x = x + ws/3;
      if (x > width) x = 0;

      // thermometer
      fill('red') ;
      var mappedTemp = 0 ;
      mappedTemp = map(temperature, -10, 100, 0, height) ;
      rect(width-30, height-10, 20, mappedTemp) ;

      break;

  }
}
