class Sanitizer extends PlayerClass{
    constructor(x,y,width,height){
        super(x,y,20,height);
        this.image=loadImage("images/sanitizer.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        stroke("red");
    }
}