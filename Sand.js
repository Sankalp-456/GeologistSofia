class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.3,
          'friction':4.0,
          'density':0.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      fill("magenta");
      circle(0, 0, this.radius, this.radius);
      pop();
    }
  };