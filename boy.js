class Boy {

    constructor(x,y){
        var options ={
           isStatic: true, 
           friction: 0.3,
           density: 1
        }
    
        this.body = Bodies.rectangle(x,y,options);
        this.image=loadImage("boy.jpg");
        this.x=this.body.position.x;
        this.y=this.body.position.y;
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
        image(this.image, this.x,this.y, 210,210);
        pop ();
    }

}