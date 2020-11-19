class Paper {
    constructor(x,y,radius) {
      var options = {
        isStatic:false,
        restitution: 0.5,
        friction:0.5,
        density:1.2
      }
      this.radius=radius
      this.body = Bodies.circle(x,y,(this.radius-20)/2,options);
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image,pos.x, pos.y, this.radius,this.radius);
    }
  };