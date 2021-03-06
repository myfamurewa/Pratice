let bubble, bubble2;

function setup() {
    createCanvas(600, 500);
    bubble = new Bubble(100, 150, 25, "blue");
    bubble2 = new Bubble(200, 300, 70, "green");
}

function draw() {
    background(0);
    bubble.move();
    bubble.show();
    bubble2.move();
    bubble2.show();
}

class Bubble {
    constructor(x, y, r,  color) {
        this.x = x
        this.y = y
        this.r = r
        this.color = color
    }
    move() {
        this.x = this.x +  Random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255)
        strokeWeight(4)
        noFill(0)
        ellipse(this.x, this.y, this.r * 2);
    }
}

setup()

class Name {
    constructor(fname, lname){
        this.fname = `${fname[0].toUpperCase()}${fname.slice(1)}`
        this.lname = `${lname[0]}${lname.slice(1).toLowerCase()}`
        this.fullname = `${fname[0].toUpperCase()}${fname.slice(1)} ${lname[0]}${lname.slice(1).toLowerCase()}`
        this.initials = `${fname[0].toUpperCase()}.${lname[0]}`
    }
}

let Mike = new Name("Famurewa", "Michael"
)

console.log(Mike.initials)