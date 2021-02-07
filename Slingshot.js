class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: .1,
            length: 100
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
    }

  

    fly(){
        this.sling.bodyA = null;
    }

    attachStone(){
    this.sling.bodyA = stone1;
    }

    
    display(){
        if(this.sling.bodyA){
        var pointB = this.pointB;
        var pointAX = this.sling.bodyA.position.x;
        var pointAY = this.sling.bodyA.position.y;
        
        strokeWeight(3);
         line(pointAX, pointAY, pointB.x, pointB.y);  
        }
 
    }
    
}