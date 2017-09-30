function setup() {
  createCanvas(800,600);
  background(225,225,225);
}

function draw() {
  
  //neck&antennas
  strokeWeight(2);
  strokeCap(ROUND);
  stroke(153,205,0);
  line(400,200,400,350);
  line(410,240,410,350);
  line(390,240,390,350);
  
  line(400,200,380,150);
  line(400,200,430,110);
  line(400,200,465,215);
  
  
  //head
  fill(245,255,235);
  strokeWeight();
  ellipse (400,200,90,90);
  fill(0,0,0);
  ellipse(415,190,25,25);
  fill(255,255,255);
  ellipse(415,190,5,5);
  fill(153,205,0);
  ellipse(390,190,10,10);
  ellipse(430,200,5,5);
   ellipse(425,175,7,7);
  
  //feet
  fill(204,153,255);
  ellipse(380,450,70,70); 
  
  //body
  fill(245,255,235);
  rect(330,300,100,150);
  stroke(204,153,255);
  strokeCap(PROJECT);
  strokeWeight(10);
  line(335,320,425,320);
  
  strokeWeight(2);
  strokeCap(ROUND);
  stroke(153,205,0);
  line(340,400,370,400);
  line(340,410,370,410);
  line(340,420,370,420);
}