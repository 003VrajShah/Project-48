class Mask extends PlayerClass{
    constructor(x,y,width,height){
        super(x,y,20,height);
        this.image=loadImage("images/mask.jpg");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        stroke("blue");
    }
}