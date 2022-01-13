//location variables
var x;
var y;

var r, g, b, fillColour

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent("p5container");
  background(138, 43, 226);
  x = width/2;
  y = height/2;
}

function draw() {
  
//  background(255);
  
  var randVal = random();
  
//  console.log(randVal);
  
  fill(randColor())
  rect(x,y,10,10);
  //Movement
  if(randVal < .25){
    x=x+20;
    
  }
  else if(randVal < .5){
    x=x-20;
  }
  else if(randVal < .75){
    y=y-20;
  }
 // else if(randVal < 1){
  else{
    y=y+20;
   ellipse(50)
  }
  
  if(x>window.innerWidth){
    x = x-20
  }
  else if(x<0){
    x = x+20
  }
  
  if(y>window.innerHeight){
    y = y-20
  }
  else if(y<0){
    y = y+20
  }
  
  //draw point
 // strokeWeight(3);
  
  
  //ellipse(x,y,10,10);
    
}

function randColor(){
  r = Math.floor(random(255));
  g = Math.floor(random(255));
  b = Math.floor(random(255));
  
  fillColour = color(r, g, b)
  return fillColour;
}
        
