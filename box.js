class plank{
    constructor(x,y,width,height,options){
        var options = {
            restitution : 0,
            friction : 1
         }
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width;
        this.height = height;  
 
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body) 
    }
    display(){

        imageMode(CENTER);
        image(this.image, 680,580, 150, 180);

      
}}