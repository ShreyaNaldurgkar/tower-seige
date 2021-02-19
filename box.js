class Box {
  constructor(x, y, width, height, angle) {
    var options = {

      'friction': 3.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    World.add(world, this.body);
  }
  display() {
    var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 9) {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255, this.Visibility);
        pop();
      }
    }
  }
