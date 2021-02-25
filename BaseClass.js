class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        // this.width = width;
        // this.height = height;

        this.image = loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255)
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 50,50);
        rect(0,0,this.width,this.height)
        pop();
      }
}