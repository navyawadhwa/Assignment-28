class Tree {

    constructor(x,y){
        var options ={
           isStatic: true, 
           friction: 0.3,
           density: 1            
        }
    
        this.body = Bodies.rectangle(x,y,options);
        this.image=loadImage("tree.jpg");
        World.add(world,this.body);
    }

    display(){
        var angle= this.body.angle;
        push ();
        translate (this.body.position.x, this.body.position.y);
        rotate (angle);
        //rectMode(CENTER);
        //rect(600,600,20,20);
        imageMode(CENTER);
        image(this.image, 600,300, 270,490);
        pop ();
    }

}