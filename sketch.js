var s;
var f;
var bestScore = 0;
function setup() {
    createCanvas(600, 600);
    s = new Snake();
    f = new Food();
    frameRate(20);
    print(s.tail);
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        if (s.yspeed === 1 && s.tail.length != 1)
            return;
        s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        if (s.yspeed === -1 && s.tail.length != 1)
            return;
        s.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        if (s.xspeed === 1 && s.tail.length != 1)
            return;
        s.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        if (s.xspeed === -1 && s.tail.length != 1)
            return;
        s.dir(1, 0);
    } else if (keyCode === 32) {
        s.stop();
    } else if (keyCode === 27) {
        setup();
    }   
}

function draw() {
    background(51);
    s.update();
    s.show();
    f.show();
    if (s.x == f.x && s.y == f.y) {
        s.eat();
        f = new Food();
        f.show();
    }
    if (s.isDead())
        setup();
    textSize(32);
    fill(255);
    text('Score: ' + s.tail.length, 0, 32);
    text('Best score: ' + bestScore, 0, 64);
   // noStroke();
}