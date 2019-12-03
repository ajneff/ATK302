var song1, song2, song3, song4, song5
var myState = 0;
myTimer = 200;


function preload() {
  song1 = loadSound('assets/1.mp3');
  song2 = loadSound('assets/2.mp3');
  song3 = loadSound('assets/3.mp3');
  song4 = loadSound('assets/4.mp3');
  song5 = loadSound('assets/5.mp3');

  img = loadImage('assets/me.jpg')

  // set each song to loop and then immediately pause it so it doesn't play

  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
  song4.loop();
  song4.stop();
  song5.loop();
  song5.stop();

}

function setup() {

  createCanvas(200, 200);

}

function draw() {
  background(100);
  switch (myState) {

    case 0: // trigger the playing, and go immediately to the next state
      song1.play();
      myState = 1;  // go immediately (the next time) to the next state
      break;


    case 1:
    // hang out in here, put some lyrics or pictures or something while the song plays.
    // put pictures and shapes in here

      break;  // we would only leave state 1 with a mouseClick



    case 2: // trigger the playing, and go immediately to the next state
      song2.play();
      myState = 3;
      break;

    case 3:
      break;

    case 4:
      song3.play();
      myState = 5;
      break;

    case 5:
      break;

      case 6:
        song4.play();
        myState = 7;
        break;

      case 7:
      myTimer++;
      if (myTimer > 500) {
        myState = 8;
        song4.pause();
      }
        break;


        case 8:
          song5.play();
          myState = 9;
          break;

        case 9:

          break;

//
  }


}

function mouseReleased() {
  myState++;

  // pause all the songs
  song1.pause();
  song2.pause();
  song3.pause();
  song4.pause();
  song5.pause();

  if (myState > 8) {
    myState = 0;
  }
}
