var song, song2, song3;
var myState = 0;

function preload() {
  song = loadSound('assets/cookup.mp3');
  song2 = loadSound('assets/Unhappy.mp3');
  song3 = loadSound('assets/smooth.mp3');
  song.loop();
  song.stop();
}

function setup() {

  createCanvas(720, 200);

}

function draw() {
  background(100);
  switch (myState) {

    case 0:
      song.play();
      myState = 1;
      break;

    case 1:

      break;

    case 2: // interrim "trigger" state
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
  }
}

function mouseReleased() {
  song.pause();
  song2.pause();
  song3.pause();
  myState++;
  if (myState > 5) {
    myState = 0;
  }
}
