
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(20,200,300);
  }
  
  function draw() {
    noStroke()
    fill(mouseX, mouseY, 100,220,60)
    ellipse(mouseX, mouseY, 10,12,6)
  }