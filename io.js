
function keyTyped() {
    if (key === " ") {
        restart();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

    actWidth = min(windowWidth, 2*windowHeight);
    act.resizeCanvas(actWidth, actWidth/2);
    drawing.resizeCanvas(act.height, act.height);
    epicycles.resizeCanvas(act.height, act.height);
    panel = createGraphics((act.width - act.height) / 2, act.height);
    restart();
}

function mousePressed() {
    panelX = mouseX - width/2 - drawing.width/2;
    panelY = mouseY - height/2 + act.height/2;

    region = speedS.getButton();
    if (region[0][0] < panelX && panelX < region[0][1] &&
        region[1][0] < panelY && panelY < region[1][1]) {
        speedS.isPressed = true;
    }

    region = circlesS.getButton();
    if (region[0][0] < panelX && panelX < region[0][1] &&
        region[1][0] < panelY && panelY < region[1][1]) {
        circlesS.isPressed = true;
    }

    region = opacityS.getButton();
    if (region[0][0] < panelX && panelX < region[0][1] &&
        region[1][0] < panelY && panelY < region[1][1]) {
        opacityS.isPressed = true;
    }
}

function mouseReleased() {
    if (circlesS.isPressed) {
        circles = 500 * circlesS.val;
        restart();
    }
    speedS.isPressed = false;
    circlesS.isPressed = false;
    opacityS.isPressed = false;
}

function mouseDragged() {
    panelX = mouseX - width/2 - drawing.width/2;
    panelY = mouseY - height/2 + act.height/2;

    if (speedS.isPressed) {
        adjustedX = (panelX -
            panel.width * speedS.x) / (panel.width * speedS.len);
        speedS.val = constrain(adjustedX, 0.01, 1);
    } else if (circlesS.isPressed) {
        adjustedX = (panelX -
            panel.width * circlesS.x) / (panel.width * circlesS.len);
        circlesS.val = constrain(adjustedX, 0.002, 1);
    } else if (opacityS.isPressed) {
        adjustedX = (panelX -
            panel.width * opacityS.x) / (panel.width * opacityS.len);
        opacityS.val = constrain(adjustedX, -1, 1);
    }
}