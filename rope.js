class Rope {
    constructor(body1, body2,pointA,pointB) {
        
        this.pointA = pointA
        this.pointB = pointB
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.pointA, y:this.pointB},
            //isStatic : false
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display() {

       
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        //var pointX = pointA.x;
        //var pointY = pointA.y;

        //var point2X = pointB.x+this.offsetX;
        //var point2Y = pointB.y+this.offsetY;

        strokeWeight(2);

       
        
        
        line(pointA.x,pointA.y,pointB.x+this.pointA,pointB.y+this.pointB);
        
        
        

        
    }
}