class boy {
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution:0,
            friction:1,
            density:1.2
        };

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/boy.png");
        World.add(world, this.body);
    }
  
    display() {

        imageMode(CENTER);
        fill("black");
        image(this.image,500,850,200,500);
    }
  }
  