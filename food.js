function Food() {
    this.x = approachNumberByMult(random(width), s.scl);
    this.y = approachNumberByMult(random(height), s.scl);
    
    this.show = function() {
        fill(100, 255, 0);
        rect(this.x, this.y, s.scl, s.scl);
    }
}

function approachNumberByMult(n, m) {
    var approx = n - n % m;
    return approx;
}