
function setup() {
    createCanvas(windowWidth, 500);
    background(20,200,300);
  }
  
  function draw() {
    noStroke()
    fill(mouseX, mouseY, 100,220,60)
    ellipse(mouseX, mouseY, 20,22,16)
  }

  