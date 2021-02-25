class SlingShot{
    constructor(myBodyA, myPointB){
        var options = {
            bodyA: myBodyA,
            pointB: myPointB,
            stiffness:0.04,
            length: 10
        }
        this.pointB = myPointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill(255);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}