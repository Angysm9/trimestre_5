function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    noStroke ();
    fill(0, 0, 255, 128);
    rect(0, 0, 200, 200);
    
    fill(250, 0, 0, 100);
    circle (width/2, height/2, 200);
    
    fill(0, 255, 0, 127);
    triangle(0, 0, 300, 100, 100, 100);
    
  }