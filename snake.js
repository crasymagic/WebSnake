function Snake() {
    this.x = floor(width / 2);
    this.y = floor(height / 2);
    this.xspeed = 1;
    this.yspeed = 0;
    this.scl = 20;
    this.tail = [[this.x, this.y]];
    
    this.update = function() {
        this.x += this.xspeed * this.scl;
        this.y += this.yspeed * this.scl;
        if (this.x > (width - this.scl)) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = width - this.scl;
        }
        if (this.y > (height - this.scl)) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = height - this.scl;
        }
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i][0] = this.tail[i + 1][0]; 
            this.tail[i][1] = this.tail[i + 1][1];
        }
        this.tail[this.tail.length - 1][0] = this.x;
        this.tail[this.tail.length - 1][1] = this.y;
    }
    
    this.isDead = function() {
        for (let i = this.tail.length - 3; i > 0; i--) {
            if ((this.x === this.tail[i][0] && this.y === this.tail[i][1])) {
                if (bestScore < this.tail.length)
                    bestScore = this.tail.length;
                return true;
            }
        }
        return false;
    }
    
    this.show = function() {
        fill(255);
        for (let i = 0; i < this.tail.length; i++) {
            fill(255);
            rect(this.tail[i][0], this.tail[i][1], this.scl, this.scl);
        }
    }
    
    this.dir = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    
    this.eat = function() {
        this.tail.push([this.x, this.y]);
        print(this.tail);
    }
    
    this.stop = function() {
        this.xspeed = 0;
        this.yspeed = 0;
    }
}