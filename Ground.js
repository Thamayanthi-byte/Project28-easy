class Ground{
    constructor(x,y,width,height){
        var o={
            isStatic: true
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,o)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        translate(pos.x,pos.y)
        rect(0,0,this.width,this.height);
        pop();
    }
}