class Stone{
    constructor(x,y,radius){
        var op={
            isStatic: false,
restitution: 0,
friction:1,
density:1.2
        }
        this.image=loadImage("stone.png");
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius/2,op);
        World.add(world,this.body);
    }
    display(){
        var spos=this.body.position;
        push();
        translate(spos.x,spos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();

    }
}