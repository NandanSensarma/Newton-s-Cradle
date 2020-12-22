class Rope{
    constructor(body1, point2){
            var options = {
            bodyA: body1,
            pointB: point2,
            length:200,
            stiffness:0.05
        }
        this.pointB=point2;
        this.rope = Matter.Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){
        var bodyA = this.rope.bodyA.position;
        var bodyB = this.pointB;
        strokeWeight(4);
        stroke("white");
        line(bodyA.x, bodyA.y, bodyB.x, bodyB.y);
        }
    }