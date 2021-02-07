class Stone {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        };

        this.body = Bodies.circle(x,y,radius/2,options);
        this.r = radius;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(world, this.body);
    }
  
    display() {

        fill("black");
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();  
    }
  }
  