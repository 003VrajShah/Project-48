class PlayerClass{
    constructor(x,y,width,height){
        var options = {
            'density' : 1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("images/playerImg.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}