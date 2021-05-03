class Stone {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution: 0,
            friction: 1,
            density: 1.2
      }
  
      this.body = Bodies.circle(x,y,30, options);
      World.add(world, this.body);
    }
  
  display(){ 
    //rectMode(CENTER);
    this.x=this.body.position.x;
    this.y=this.body.position.y
    strokeWeight(2);
    stroke ("black");
    fill("grey");
    ellipse(this.x,this.y,30);
  }
  }