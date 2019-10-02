var myState= 1
var timer= 0

function setup() {
  createCanvas(1000, 1000);
  rectMode(CENTER) ;
}

function draw() {


switch (myState) {

  case 1:
  fill (255) ;
  rect(width/2, height/2, 140, 380) ;
  fill(255, 255, 204) ;
  ellipse(width/2, height/2, 100, 100) ;

  push() ;
  translate(0,- 120) ;
  fill('red') ;
ellipse(width/2, height/2, 100, 100) ;
pop() ;

push() ;
translate(0, 120) ;
fill(255) ;
ellipse(width/2, height/2, 100, 100) ;
pop() ;

timer++ ;
if (timer > 5*frameRate()){
  myState = 2 ;
  timer = 0 ;
}

  break;

  case 2:
  fill (255) ;
  rect(width/2, height/2, 140, 380) ;
  fill(255, 255, 204) ;
  ellipse(width/2, height/2, 100, 100) ;

  push() ;
  translate(0,- 120) ;
  fill(255) ;
ellipse(width/2, height/2, 100, 100) ;
pop() ;

push() ;
translate(0, 120) ;
fill('green') ;
ellipse(width/2, height/2, 100, 100) ;
pop() ;

timer++ ;
if (timer > 5*frameRate()){
  myState = 3 ;
  timer = 0 ;
}

break;


  case 3:
  fill (220, 210, 27) ;
  rect(width/2, height/2, 140, 380) ;
  fill(255, 255, 204) ;
  ellipse(width/2, height/2, 100, 100) ;

  push() ;
  translate(0,- 120) ;
  fill(255) ;
ellipse(width/2, height/2, 100, 100) ;
pop() ;

push() ;
translate(0, 120) ;
fill(255) ;
ellipse(width/2, height/2, 100, 100) ;
pop() ;

timer++ ;
if (timer > 5*frameRate){
  myState = 1 ;
  timer = 0 ;
}
break;
}
}
