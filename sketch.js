var wall, thickness, WLE;
var bullet, speed, weight, BRE;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 83);

  speed = random(223, 321);
  weight = random(30, 52);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(50, 200, 30, 20);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(hasCld(bullet, wall)) {
    bullet.velocityX = 0;
    bullet.x = (wall.x - wall.width/2) - bullet.width/2;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage>10) {
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCld(lB, lW) {
  BRE = lB.x + lB.width;
  WLE = lW.x;
  if(BRE>=WLE) {
    return true;
  }
  return false;
}