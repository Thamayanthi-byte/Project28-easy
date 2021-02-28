class Mango{
    constructor(x,y,radius){
        var options={
            isStatic: true,
            restitution: 0,
            friction:1,
            density:1
        }
        this.image=loadImage("mango.png");
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius/2,options);
        World.add(world,this.body);
    }
    display(){
        var mpos=this.body.position;
        push();
        ellipseMode(RADIUS);
        translate(mpos.x,mpos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        //ellipse(0,0,this.radius,this.radius);
        pop();
    }
}