var box1
var box2

function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(150,180,100,100,4,-2)
  box2 = new Box(300,50,40,40,5,5)
}

function draw() 
{
  background(220);
  box1.show()
  box1.movey()

  box2.show()
  box2.movey()
}

