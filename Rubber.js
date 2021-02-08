class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':4.0,
          'density':0.1
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
      fill("blue");
      circle(0, 0, this.radius, this.radius);
      pop();
    }
  };