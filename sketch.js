var side = 100;
var space = 14;
var diameter = 50;
      

function setup() { 
  rectMode(CENTER);
  ellipseMode(CENTER);
   
} 


function draw() { 
  createCanvas(400, 400);
  background('#ABB5F8');
  

  stroke('#3893D6');
  for(let lineX = 0; lineX < 300; lineX++){
    line(2 + lineX * 2, 0, 2 + lineX * 2,         height);
  }

  
  fill(250);
  noStroke();
  rect(width/2, height/2, side, side);
  rect(width/2-side-space, height/2, side, side);
  rect(width/2+side+space, height/2, side, side);
  
  //circles1
      var x = width / 5.5 - side / 2;
      var y = height / 1.4 - side / 2;

      var circleX = x + space;
      var circleY = y + space;
  
  fill('#4500A6');
  stroke('#6433F2');
  strokeWeight(6);
  ellipse(circleX, circleY, diameter, diameter);

  //circles2
  fill(256);
  stroke('#5800D6');
  strokeWeight(10);
  ellipse(width/2, height/2, diameter, diameter);
  //circles3
  fill('#0AC486');
  stroke('#0CF6BC');
  strokeWeight(14);
  ellipse(width/1.7+side+space,height/2.5, diameter, diameter);
  
  
  
}
