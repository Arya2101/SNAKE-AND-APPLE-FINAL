class snake{
    constructor(){
        this.length = 0;
        this.body = [];
        this.body[0] = createVector(floor(w/2),floor(h/2))
        this.xDirection = 0;
        this.yDirection = 0;
    }

    setDirection(x,y){
        this.xDirection = x;
        this.yDirection = y;
    }

    update(){
    var head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xDirection;
    head.y += this.yDirection;
    this.body.push(head);
    }

    grow(){
    var head = this.body[this.body.length-1].copy();
    this.length++ ;
    this.body.push(head)
    }

    endGame(){
    var x = this.body[this.body.length-1].x ;
    var y = this.body[this.body.length-1].y ;
    if (x > w-1 || x < 0 || y > h-1 || y < 0){
      return true;
    }
    for (var i = 0; i < this.body.length-1; i++){
      var part = this.body[i];
      if (part.x == x && part.y == y){
        return true;
      }
    }
    return false;
    }

    eat(pos){
        var x = this.body[this.body.length-1].x ;
        var y = this.body[this.body.length-1].y ;
        if (x == pos.x && y == pos.y){
          this.grow();
          return true ;
        }
        return false ;
      }

    display(){
        for (var i = 0; i < this.body.length; i++){
          stroke("black");
          strokeWeight(0.1);
          fill(99,247,0);
          rect(this.body[i].x , this.body[i].y , 1, 1);
        }
      }
}