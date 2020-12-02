class Ground {
    constructor(x,y,width,height) {
      //super(x,y,width,height);
      this.width=width;
      this.height=height;
     // this.image=loadImage("sprites/ground.png");
      var ground_options={
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height,ground_options);
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
    }
  };