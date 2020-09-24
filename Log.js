class Log extends BaseClass{
  constructor(x,y,height,width){
    super(x,y,20,height,width);
    this.height = height;
    this.width = width;
    this.image = loadImage("sprites/wood2.png");
   // Matter.Body.setAngle(this.body, angle);
   this.Visibility = 255;
  }
  display(){
    console.log(this.body.speed);
    super.visible = false;
    if (this.body.speed<7){
    
  }else{
    World.remove(world,this.body);
    push();
    this.Visibility = this.Visibility-5
    tint(255,this.Visibility);
    //image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
  }
}