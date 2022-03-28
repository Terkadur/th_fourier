
fr = 50;
speed = 1;
t = 0;
dt = 0.001;
cpt = 1;
borderWidth = 2;
opacity = 128;
prevDraw = false;
easterEggCol = 0;


function setup() {
    document.body.style.overflow = 'hidden';
    createCanvas(windowWidth, windowHeight);
    frameRate(fr);

    actWidth = min(windowWidth, 2 * windowHeight);
    act = createGraphics(actWidth, actWidth / 2);

    drawing = createGraphics(act.height, act.height);
    epicycles = createGraphics(act.height, act.height);

    panel = createGraphics((act.width - act.height) / 2, act.height);

    speedS = new Sloider(0.5, 0.125, 1 / 2, 0.75);
    circlesS = new Sloider(0.002, 0.125, 1 / 4, 0.75);
    opacityS = new Sloider(0.5, 0.125, 3 / 4, 0.75);

    circles = 500 * circlesS.val;

    restart();
}

function draw() {
    background(0);
    act.background(0);
    opacity = 256 * opacityS.val;
    cpt = 10 * speedS.val;

    for (let i = 0; i < cpt; i++) {
        epicycles.clear();
        drawFourier();
        drawPanel();

        t += dt;
    }

    act.image(drawing, act.width / 2 - act.height / 2, 0);
    act.image(epicycles, act.width / 2 - act.height / 2, 0);
    act.image(panel, act.width / 2 + act.height / 2, 0);


    act.fill(128);
    act.noStroke();
    let region = opacityS.getButton();
    act.rect(act.width / 2 + act.height / 2 + region[0][0], region[1][0], region[0][1] -
        region[0][0], region[1][1] - region[1][0]);

    if (ceil(opacityS.val * 100) == -69) {
        act.push();
        act.textFont('cursive');
        act.textSize(drawing.width/2);
        act.textAlign(CENTER, CENTER);
        act.colorMode(HSB, 255);
        act.fill(easterEggCol, 255, 255);
        act.noStroke();
        act.text("nice", act.width / 2, act.height / 2);
        act.pop();

        easterEggCol = (easterEggCol + 1) % 255;
    }

    image(act, width / 2 - act.width / 2, height / 2 - act.height / 2);
}
