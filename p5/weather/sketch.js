var weather;
var temp = 0;
var weatherID = 0 ; // returned in the JSON weather element

function setup() {
  createCanvas(400, 400);

  temp = weather.list[0].main.temp;
      weatherID = weather.list[0].weather[0].id ;

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'http://api.openweathermap.org/data/2.5/find?q=Chicago&units=imperial&' ;
  var myIDString = 'appid=ecb96c6f2772adc0320aaa567d9006dc' ;  // CHANGE THIS WITH YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData);  // look - that gotData function happens when JSON comes back.


}

function gotData(data) {
  //  console.log(data);
  weather = data;
  console.log(data);  // for debugging purposes
}


function draw() {
  if (weather) {
    ellipse(100, 100, 80, 80);
    temp = weather.list[0].main.temp;
    weatherID = weather.list[0].weather[0].id ;
    text("You've got weather! " + temp + "weatherID = "+weatherID, 10, 10);


  }
}
