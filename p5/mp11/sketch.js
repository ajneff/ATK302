var x = 0 ;

function setup() {
  createCanvas(1000, 1000) ;
}

function draw() {

    background(255) ;
   text(mouseX + ", " + mouseY, 20, 20) ;
   fill(255,248,220);
    ellipse(500, 500, 800, 800);
    fill(0);
    ellipse(375, 250, 175, 175)
   triangle(85, 80, 180, 195, 245, 80);
   triangle(550, 80, 470, 195, 400, 80);
   arc(360, 515, 250, 250, 0, PI + QUARTER_PI, CHORD);

 }
 textSize(100);
 text("IT's HALLOWEEN", x, height / 2);
 x = x +1;

 if (x > width) {
   x = 0 ;
 }


 function mouseReleased() {
   console.log(mouseX+ ', ' + mouseY) ;
 }
