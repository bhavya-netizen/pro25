class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          'restitution':0.8

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.image=loadImage("CRUMPLED-BALLS-1-MAIN/dustbingreen.png")
      
      World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        imageMode(CENTER);
        fill("white");
        image(this.image, 0, 0, this.width, this.height);
        pop();

    }
  }