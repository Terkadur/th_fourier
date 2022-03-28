
function restart() {
    t = 0;
    background(0);
    drawing.background(255);
    drawing.noStroke();
    drawing.fill(0);
    drawing.rect(borderWidth, borderWidth, act.height - 2*borderWidth, 
        act.height - 2*borderWidth);
    prevDraw = false;
}

function drawFourier() {
    epicycles.noFill();
    epicycles.stroke(255, opacity);
    epicycles.strokeWeight(1);
    drawing.stroke(255);
    drawing.strokeWeight(1);

    let prevComplex = coefs[0];
    let prevPoint = toReal(prevComplex);

    let index = 1;
    for (let i = 0; i < circles; i++) {
        let nextCoef = coefs[index];
        let nextComplex = cMult(nextCoef, cExp(index*TWO_PI*t));
        let rad = nextComplex.abs()*act.height;

        if (rad > 4 && opacity > 0) {
            epicycles.ellipse(prevPoint[0], prevPoint[1], rad);
        }

        nextComplex.add(prevComplex);
        let nextPoint = toReal(nextComplex);

        if (dist(prevPoint[0], prevPoint[1], nextPoint[0], nextPoint[1]) > 4 && opacity > 0) {
            epicycles.line(prevPoint[0], prevPoint[1], nextPoint[0], nextPoint[1]);
        }

        prevComplex = nextComplex;
        prevPoint = nextPoint;

        index = getNext(index);
    }

    if (prevDraw != false && t <= 1) {
        drawing.line(prevDraw[0], prevDraw[1], prevPoint[0], prevPoint[1]);
    }

    prevDraw = prevPoint;
}

function drawPanel() {
    panel.background(0);
    panel.textAlign(CENTER, CENTER);
    panel.textSize(panel.width/18);
    panel.strokeWeight(0.5);
    panel.stroke(255);
    panel.fill(255);
    panel.text("Number of Epicycles: " + ceil(500*circlesS.val), 
        panel.width/2, 3*act.height/16);
    panel.text("Speed: " + ceil(100*speedS.val), panel.width/2, 7*act.height/16);
    panel.text("Opacity: " + ceil(100*opacityS.val), panel.width/2, 11*act.height/16);
    circlesS.draw();
    speedS.draw();
    opacityS.draw();
}