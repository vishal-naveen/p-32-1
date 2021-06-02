class Polygon{
    constructor(x,y){
        var options = {
            restitution: 0.5,
            friction:1,
            density:1,
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,40,40,options)
        this.image = loadImage("polygon.png")
        World.add(world,this.body)

        slingShot = newSlingsot(this.polygon,{x:100,y:200});
    }
    display(){
        var pos = this.body.postions
        imageMode(CENTER)
        image(this.image, this.body.position.x,this.body.position.y,40,40)
    }
}