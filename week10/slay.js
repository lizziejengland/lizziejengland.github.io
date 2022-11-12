
class Cool {
  
    constructor(x,y){
      this.x1 = random(50);
      this.y1 = random(60);
      this.x2 = random(40);
      this.y2 = random(70);
      this.x3 = random(50);
      this.y3 = random(100);
      this.x4 = random(40);
      this.y4 = random(60);
      this.xLoc = x;
      this.yLoc = y;
      this.speedX = random(-2, 2);
      this.speedY = random(-2, 2);
      this.numWorms = random(250);
    }
    
    show(){
      push();
      translate(this.xLoc,this.yLoc);
      for(var x = 0; x < this.numWorms; x++){
        bezier(this.x1, this.y1, this.x2, this.y2, this.x3,this.y3,this.x4,this.y4);
        }
      pop();
    }
    move(){
      this.xLoc += this.speedX;
      this.yLoc += this.speedY;
  
      if (this.xLoc > width || this.xLoc < 0) {
        this.speedX = -this.speedX;
      }
  
      if (this.yLoc > height || this.yLoc < 0) {
        this.speedY = -this.speedY;
      }
    }
  
  }
  



let coolStuff = [ ];

for(var i = 0; i < coolStuff.length;i++){
    coolStuff[i].show();
    coolStuff[i].move();
  }

coolStuff.push(new Cool(mouseX,mouseY))
