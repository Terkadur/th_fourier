
class Sloider {

    constructor(val, x, y, len) {
        this.val = val;
        this.x = x;
        this.y = y;
        this.len = len;
        this.isPressed = false;

        this.region = []
    }

    draw() {
        panel.stroke(192);
        panel.strokeWeight(2);
        panel.line(this.x*panel.width, this.y*act.height, 
            (this.x + this.len)*panel.width, this.y*act.height);

        panel.fill(128);
        panel.noStroke();
        
        let region = this.getButton();
        panel.rect(region[0][0], region[1][0], region[0][1] - region[0][0], 
            region[1][1] - region[1][0]);
    }

    getButton() {
        let buttonWidth = panel.width*this.len/16;
        let buttonHeight = panel.width*this.len/8;
        let buttonX = panel.width*(this.x + this.val*this.len);
        return [[buttonX - buttonWidth/2, buttonX + buttonWidth/2], 
            [act.height*this.y - buttonHeight/2, act.height*this.y + buttonHeight/2]];
    }
}