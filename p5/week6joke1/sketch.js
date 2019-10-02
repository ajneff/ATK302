let state = 0 ;


function setup() {
  // put setup code here

  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch (state) {



    case 0:
    background('red') ;
    text("why did the chicken cross the road", 300, 300) ;

// for joke 2 put timer code in here
       break ;

    case 1:   //punchline
    background('green') ;
    text('to get to the other side', 300, 300) ;
       break ;


}

}
function mouseReleased()  {
  state = state + 1;



}
