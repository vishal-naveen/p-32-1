class pinkbox{
    constructor(xPosition, yPosition, width, height) {
        this.Visiblity = 255;
        this.image = loadImage("pink.jpg")
        var object_options = {
            friction: 1.0,
            restitution: 0.01
        }
        this.body = Bodies.rectangle(xPosition, yPosition, width, height,object_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }

    // Function
    display() {
        
        var pos = this.body.position;
        if(this.body.speed < 3){
            rectMode(CENTER);
            fill("pink")
            rect(pos.x,pos.y,this.width,this.height);
        }
        else{
            World.remove(world, this.body)
            push();
            this.Visiblity = this.Visiblity-6
            tint(255,this.Visiblity)
            image(this.image, this.body.position.x, this.body.position.y, 40, 40)
            pop();
        
    }
    score() {
        if (this.Visiblity < 0 && this.Visiblity > -105){
          score++;
        }
      }
       
    }
}
