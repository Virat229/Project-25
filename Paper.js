class Paper {
    constructor(x,y){
        this.Body = Bodies.circle(x,y,20,{density : 2,friction : 0.5,restitution : 0.3,isStatic : false});
        this.image = loadImage("paper.png");
        World.add(world,this.Body);
    }
    display(){
        var angle = this.Body.angle;
        var pos = this.Body.position;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        imageMode (CENTER);
        image (this.image,0,0,60,60);
        pop ();

    }
}