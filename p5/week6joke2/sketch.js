let state = 0;
var myTimer = 0; // declare in the global area



function setup() {
  // put setup code here

  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch (state) {



    case 0:
      background('red');
      text("why did the chicken cross the road", 300, 300);

      // for joke 2 put timer code in here


      // put this block of code at the end of a case where you want a timer, before the break ;
      myTimer++;
      if (myTimer = 150) {

        myState++; // this will go to the next state. You can also put myState = 3 or something
        myTimer = 0; // people always forget to reset the timer!!

      }


      break;

    case 1: //punchline
      background('green');
      text('to get to the other side', 300, 300);
      break;


  }

}

function mouseReleased() {
  state = state + 1;


}
