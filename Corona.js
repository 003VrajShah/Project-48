class Corona{
    constructor(x,y,radius){
        var options= {
            'density' : 1
        }
        this.body=Bodies.Circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image=loadImage("images/coronaImg.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}