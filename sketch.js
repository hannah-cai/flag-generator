
var flagHeight = 480;
var flagWidth;
var pMouseX;
var white, black;
var fgStyle;

//probability variables
var bg, fg, sr;

//high democracy index variables
var hsr = [11/8, 25/18, 8/5, 2, 2, 2, 2, 18/11, 37/28];
var hRed, hBlue, hGreen, hOrange, hYellow;
var hColorShuffle, hbgStyle = [];
var britFlag, maple, seal;

//low democracy index variables
var lsr = [2, 2, 2, 3/2, 3/2, 3/2, 3/2, 3/2, 3/2, 3/2];
var lRed, lYellow, lDarkBlue, lLightBlue, lGreen;
var lColorShuffle, lbgStyle = [];

function preload() {
    asapMed = loadFont('Asap/Asap-Medium.ttf');
    asapReg = loadFont('Asap/Asap-Regular.ttf');
    asapRI = loadFont('Asap/Asap-Italic.ttf');
    britFlag = loadImage("brit-flag.png");
    maple = loadImage("maple.png");
    seal = loadImage("seal.png");
    crescent = loadImage("crescent.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(245);
    noStroke();

    //size ratio
    sr = map(mouseX, 0, width, 1, 0);
    if (random(1) <= sr) {
        flagWidth = flagHeight * hsr[floor(random(hsr.length))];
    } else {
        flagWidth = flagHeight * lsr[floor(random(lsr.length))];
    }

    push();
    translate(width / 2 - flagWidth / 4, height / 2 - flagHeight / 2);
    scale(0.5);

    //colors
    hRed = [random(209, 238), random(31, 45), random(36, 54)];
    hBlue = [random(9, 42), random(44, 81), random(99, 145)];
    white = [255, 255, 255];
    hGreen = [0, 155, 101];
    hOrange = [244, 129, 66];
    hYellow = [254, 193, 14];
    hColorShuffle = [hRed, hBlue, hGreen, hOrange, white];

    lRed = [random(179, 238), random(27, 45), random(36, 61)];
    lYellow = [random(249, 255), random(207, 215), random(2, 25)];
    lDarkBlue = [random(33, 37), random(47, 58), random(102, 124)];
    lGreen = [random(0, 93), random(107, 186), random(70, 96)];
    black = [0, 0, 0];
    lLightBlue = [random(0, 36), random(115, 162), random(185, 221)];
    lColorShuffle = [lRed, lYellow, lDarkBlue, lGreen, black, white, lLightBlue];

    var newhColorShuffle = shuffle(hColorShuffle);
    var newlColorShuffle = shuffle(lColorShuffle);
    
    hColorShuffle = newhColorShuffle;
    lColorShuffle = newlColorShuffle;

    //foreground style
    if (random(1) <= fg) {
        var styles = ["multiStar", "maple", "constellationA", "constellationB"];
    } else {
        var styles = ["star", "circleStar", "doubleStar", "seal", "crescent"];
    }
    fgStyle = styles[floor(random(styles.length))];

    //background style
    bg = map(mouseX, 0, width, 1, 0);
    //high democracy index
    if (random(1) <= bg) {
        var styles = ["cross", "cross", "cross", "crossD", "crossD", "corner", "corner", "triVert", "triVert"];
        hbgStyle = styles[floor(random(styles.length))];
        if (hbgStyle == "cross") {
            fill(hColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            var crossWidth = flagWidth / random(6, 12);
            fill(hColorShuffle[1]);
            rect(flagWidth / 4, 0, crossWidth, flagHeight);
            rectMode(CENTER); 
            rect(flagWidth / 2, flagHeight / 2, flagWidth, crossWidth)
            rectMode(CORNER);
        } else if (hbgStyle == "crossD") {
            fill(hColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            var crossWidth = flagWidth / random(6, 12);
            //background cross
            fill(255);
            rect(flagWidth / 4, 0, crossWidth, flagHeight);
            rectMode(CENTER);
            rect(flagWidth / 2, flagHeight / 2, flagWidth, crossWidth)
            //foreground cross
            if (hColorShuffle[1] == white) {
                fill(hColorShuffle[1]);
            } else {
                fill(hColorShuffle[2]);
            }
            rectMode(CORNER);
            rect(flagWidth / 4 + 10, 0, crossWidth - 20, flagHeight);
            rectMode(CENTER);
            rect(flagWidth / 2, flagHeight / 2, flagWidth, crossWidth - 20)
            rectMode(CORNER);
        } else if (hbgStyle == "corner") {
            fill(hColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            //british flag
            if (hColorShuffle[0] != hBlue) {
                fill(hBlue);
                rect(0, 0, flagWidth / 2, flagHeight / 2);
            }
            imageMode(CORNER);
            image(britFlag, 0, 0, flagWidth / 2 + 0.5, flagHeight / 2 + 0.5);
            //foreground
            if (random(1) < 0.5) {
                stroke(255);
                strokeWeight(2);
            }
            if (random(1) < 0.5) {
                push();
                translate(flagWidth / 4, flagHeight - flagHeight / 4);
                rotate(46);
                fill(hColorShuffle[1]);
                star(0, 0, 30, 60, 7);
                pop();
            }
            var p = random(1);
            if (p < 0.5) {
                push();
                translate(flagWidth - flagWidth / 4, flagHeight / 5);
                rotate(60);
                fill(hColorShuffle[1]);
                star(0, 0, 11, 30, 5);
                pop();
                push();
                translate(flagWidth - flagWidth / 4, flagHeight - flagHeight / 5);
                rotate(60);
                fill(hColorShuffle[1]);
                star(0, 0, 11, 30, 5);
                pop();
                push();
                translate(flagWidth - flagWidth / 2.75, flagHeight / 2 - 30);
                rotate(60);
                fill(hColorShuffle[1]);
                star(0, 0, 11, 30, 5);
                pop();
                push();
                translate(flagWidth - flagWidth / 6, flagHeight / 2 - 60);
                rotate(60);
                fill(hColorShuffle[1]);
                star(0, 0, 11, 30, 5);
                pop();
            } else {
                push();
                translate(flagWidth - flagWidth / 4, flagHeight / 5);
                rotate(46);
                fill(hColorShuffle[1]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth - flagWidth / 4, flagHeight - flagHeight / 5);
                rotate(46);
                fill(hColorShuffle[1]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth - flagWidth / 2.75, flagHeight / 2 - 30);
                rotate(46);
                fill(hColorShuffle[1]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth - flagWidth / 6, flagHeight / 2 - 60);
                rotate(46);
                fill(hColorShuffle[1]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth - flagWidth / 5, flagHeight / 2 + 30);
                rotate(60);
                fill(hColorShuffle[1]);
                star(0, 0, 7, 15, 5);
                pop();
            }
        } else if (hbgStyle == "triVert") {
            noStroke();
            fill(hColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(hColorShuffle[1]);
            rect(flagWidth / 3, 0, flagWidth / 3, flagHeight);
            fill(hColorShuffle[2]);
            rect(flagWidth - flagWidth / 3, 0, flagWidth / 3, flagHeight);
        } else if (hbgStyle == "triVertC") {
            fill(hColorShuffle[1]);
            rect(flagWidth / 4, 0, flagWidth / 2, flagHeight);
            if (fgStyle == "maple" && hColorShuffle[1] != hRed) {
                imageMode(CENTER);
                image(maple, flagWidth / 2, flagHeight / 2, flagWidth / 3, flagWidth / 3);
            } else if (fgStyle == "multiStar") {
                push();
                translate(flagWidth / 2, flagHeight / 2);
                rotate(46);
                fill(hColorShuffle[2]);
                star(0, 0, flagWidth / 20, flagWidth / 10, 7);
                pop();
            } else if (fgStyle == "constellationA") {
                if (random(1) < 0.5) {
                    stroke(255);
                    strokeWeight(2);
                }
                push();
                translate(flagWidth / 2, flagHeight / 5);
                rotate(60);
                fill(hColorShuffle[2]);
                star(0, 0, 11, 30, 5);
                pop();
                push();
                translate(flagWidth / 2, flagHeight - flagHeight / 5);
                rotate(60);
                fill(hColorShuffle[2]);
                star(0, 0, 11, 30, 5);
                pop();
                push();
                translate(flagWidth / 2.75, flagHeight / 2 - 30);
                rotate(60);
                fill(hColorShuffle[2]);
                star(0, 0, 11, 30, 5);
                pop();
                push();
                translate(flagWidth / 1.65, flagHeight / 2 - 60);
                rotate(60);
                fill(hColorShuffle[2]);
                star(0, 0, 11, 30, 5);
                pop();
            } else if (fgStyle == "constellationB") {
                if (random(1) < 0.5) {
                    stroke(255);
                    strokeWeight(2);
                }
                push();
                translate(flagWidth / 2, flagHeight / 5);
                rotate(46);
                fill(hColorShuffle[2]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth / 2, flagHeight - flagHeight / 5);
                rotate(46);
                fill(hColorShuffle[2]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth / 2.75, flagHeight / 2 - 30);
                rotate(46);
                fill(hColorShuffle[2]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth / 1.65, flagHeight / 2 - 60);
                rotate(46);
                fill(hColorShuffle[2]);
                star(0, 0, 12, 30, 7);
                pop();
                push();
                translate(flagWidth / 2 + flagWidth / 20, flagHeight / 2 + 30);
                rotate(60);
                fill(hColorShuffle[2]);
                star(0, 0, 7, 15, 5);
                pop();
            }
        }

    //low democracy index
    } else {
        noStroke();
        var styles = ["triHorizTri", "triHoriz", "triVert", "triVert", "triVert", "triVert", "CAR", "triHorizD", "GB", "diag", "turkmen"];
        lbgStyle = styles[floor(random(styles.length))];
        if (lbgStyle == "triHoriz") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            rect(0, flagHeight / 3, flagWidth, flagHeight / 3);
            fill(lColorShuffle[2]);
            rect(0, flagHeight - flagHeight / 3, flagWidth, flagHeight / 3);
            if (random(1) < 0.66) {
                if (fgStyle == "doubleStar") {
                    fill(lColorShuffle[3]);
                    push();
                    translate(flagWidth / 3, flagHeight / 2);
                    rotate(60);
                    star(0, 0, 10, 30, 5);
                    pop();
                    push();
                    translate(flagWidth - flagWidth / 3, flagHeight / 2);
                    rotate(60);
                    star(0, 0, 10, 30, 5);
                    pop();
                } else if (fgStyle == "circleStar") {
                    push();
                    translate(flagWidth / 2, flagHeight / 2);
                    rotate(60);
                    fill(255);
                    ellipse(0, 0, 50 * 2);
                    if (lColorShuffle[3] != white) {
                        fill(lColorShuffle[3]);
                    } else {
                        fill(lColorShuffle[4]);
                    }
                    fill(lColorShuffle[1]);
                    star(0, 0, 20, 50, 5);
                    pop();
                } else if (fgStyle == "seal" && lColorShuffle[1] != lYellow) {
                    imageMode(CENTER);
                    image(seal, flagWidth / 2, flagHeight / 2, 155, 125);
                } else if (fgStyle == "crescent") {
                    imageMode(CENTER);
                    image(crescent, flagWidth / 2, flagHeight / 2, 130, 120);
                } else if (fgStyle == "maple"  && lColorShuffle[1] != lRed) {
                imageMode(CENTER);
                image(maple, flagWidth / 2, flagHeight / 2, 120, 120);
                }
            }
        } else if (lbgStyle == "triHorizTri") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            rect(0, flagHeight / 3, flagWidth, flagHeight / 3);
            fill(lColorShuffle[2]);
            rect(0, flagHeight - flagHeight / 3, flagWidth, flagHeight / 3);
            fill(lColorShuffle[3]);
            triangle(0, 0, flagWidth / 3, flagHeight / 2, 0, flagHeight);
            if (fgStyle == "circleStar") {
                push();
                translate(flagWidth / 2, flagHeight / 2);
                rotate(60);
                fill(255);
                ellipse(0, 0, 50 * 2);
                if (lColorShuffle[4] != white) {
                    fill(lColorShuffle[4]);
                } else {
                    fill(lColorShuffle[5]);
                }
                star(0, 0, 20, 50, 5);
                pop();
            } else if (fgStyle == "seal" && lColorShuffle[1] != lYellow) {
                imageMode(CENTER);
                image(seal, flagWidth / 2, flagHeight / 2, 150, 125);
            } else if (fgStyle == "crescent") {
                imageMode(CENTER);
                image(crescent, flagWidth / 2, flagHeight / 2, 130, 120);
            } else if (fgStyle == "maple" && lColorShuffle[2] != lRed) {
                imageMode(CENTER);
                image(maple, flagWidth / 2, flagHeight / 2, 125, 125);
            }
        } else if (lbgStyle == "triVert") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            rect(flagWidth / 3, 0, flagWidth / 3, flagHeight);
            fill(lColorShuffle[2]);
            rect(flagWidth - flagWidth / 3, 0, flagWidth / 3, flagHeight);
        } else if (lbgStyle == "CAR") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            rect(0, flagHeight / 4, flagWidth, flagHeight / 4);
            fill(lColorShuffle[2]);
            rect(0, flagHeight / 2, flagWidth, flagHeight / 4);
            fill(lColorShuffle[3]);
            rect(0, flagHeight - flagHeight / 4, flagWidth, flagHeight / 4);
            fill(lColorShuffle[4]);
            rectMode(CENTER);
            rect(flagWidth / 2, flagHeight / 2, flagWidth / 7, flagHeight);
            rectMode(CORNER);
            if (fgStyle == "crescent") {
                imageMode(CENTER);
                image(crescent, flagWidth / 6, flagHeight / 8, 93, 85);
            } else if (fgStyle == "seal" && lColorShuffle[0] != lYellow) {
                imageMode(CENTER);
                image(seal, flagWidth / 6, flagHeight / 8, 105, 85);
            } else if (fgStyle == "star") {
                fill(lColorShuffle[5]);
                push();
                translate(flagWidth / 6, flagHeight / 8);
                rotate(60);
                star(0, 0, 17, 45, 5);
                pop();
            } else if (fgStyle == "circleStar") {
                push();
                translate(flagWidth / 6, flagHeight / 8);
                rotate(60);
                fill(lColorShuffle[4]);
                ellipse(0, 0, 45 * 2);
                fill(lColorShuffle[5]);
                star(0, 0, 17, 45, 5);
                pop();
            } else if (fgStyle == "multiStar") {
                push();
                translate(flagWidth / 6, flagHeight / 8);
                rotate(46);
                fill(lColorShuffle[5]);
                star(0, 0, 17, 45, 7);
                pop();
            } else if (fgStyle == "maple" && lColorShuffle[0] != lRed) {
                imageMode(CENTER);
                image(maple, flagWidth / 6, flagHeight / 8, 85, 85);
            }
        } else if (lbgStyle == "triHorizD") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            rect(0, flagHeight / 6, flagWidth, flagHeight / 1.5);
            fill(lColorShuffle[2]);
            rect(0, flagHeight / 6 + 10, flagWidth, flagHeight / 1.5 - 20);
            if (fgStyle == "star") {
                fill(lColorShuffle[3]);
                push();
                translate(flagWidth / 3, flagHeight / 2);
                rotate(60);
                star(0, 0, 30, 75, 5);
                pop();
            } else if (fgStyle == "circleStar") {
                push();
                translate(flagWidth / 3, flagHeight / 2);
                rotate(60);
                fill(lColorShuffle[0]);
                ellipse(0, 0, 75 * 2);
                fill(lColorShuffle[2]);
                star(0, 0, 30, 75, 5);
                pop();
            } else if (fgStyle == "seal" && lColorShuffle[2] != lYellow) {
                imageMode(CENTER);
                image(seal, flagWidth / 3, flagHeight / 2, 215, 175);
            } else if (fgStyle == "crescent") {
                imageMode(CENTER);
                image(crescent, flagWidth / 3, flagHeight / 2, 130, 120);
            } else if (fgStyle == "multiStar") {
                push();
                translate(flagWidth / 3, flagHeight / 2);
                rotate(46);
                fill(lColorShuffle[3]);
                star(0, 0, 30, 75, 7);
                pop();
            } else if (fgStyle == "maple") {
                imageMode(CENTER);
                image(maple, flagWidth / 3, flagHeight / 2, 175, 175);
            }
        } else if (lbgStyle == "GB") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            rect(flagWidth / 3, 0, flagWidth, flagHeight / 2);
            fill(lColorShuffle[2]);
            rect(flagWidth / 3, flagHeight / 2, flagWidth, flagHeight / 2);
            if (fgStyle == "star") {
                fill(lColorShuffle[3]);
                push();
                translate(flagWidth / 6, flagHeight / 2);
                rotate(60);
                star(0, 0, 30, 75, 5);
                pop();
            } else if (fgStyle == "circleStar") {
                push();
                translate(flagWidth / 6, flagHeight / 2);
                rotate(60);
                fill(lColorShuffle[0]);
                ellipse(0, 0, 75 * 2);
                fill(lColorShuffle[3]);
                star(0, 0, 30, 75, 5);
                pop();
            } else if (fgStyle == "seal" && lColorShuffle[0] != lYellow) {
                imageMode(CENTER);
                image(seal, flagWidth / 6, flagHeight / 2, 175, 150);
            } else if (fgStyle == "crescent") {
                imageMode(CENTER);
                image(crescent, flagWidth / 6, flagHeight / 2, 130, 120);
            } else if (fgStyle == "multiStar") {
                push();
                translate(flagWidth / 6, flagHeight / 2);
                rotate(46);
                fill(lColorShuffle[3]);
                star(0, 0, 30, 75, 7);
                pop();
            } else if (fgStyle == "maple" && lColorShuffle[0] != lRed) {
                imageMode(CENTER);
                image(maple, flagWidth / 6, flagHeight / 2, 160, 160);
            }
        } else if (lbgStyle == "diag") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            quad(0, flagHeight - flagHeight / 4, 0, flagHeight + 25, flagWidth, flagHeight / 4, flagWidth, -25);
            fill(lColorShuffle[2]);
            quad(0, flagHeight - flagHeight / 5, 0, flagHeight, flagWidth, flagHeight / 5, flagWidth, 0);
            if (fgStyle == "crescent") {
                imageMode(CENTER);
                image(crescent, flagWidth / 6, flagHeight / 4, 130, 120);
            } else if (fgStyle == "seal" && lColorShuffle[0] != lYellow) {
                imageMode(CENTER);
                image(seal, flagWidth / 6, flagHeight / 4, 160, 130);
            } else if (fgStyle == "star") {
                fill(lColorShuffle[3]);
                push();
                translate(flagWidth / 6, flagHeight / 4);
                rotate(60);
                star(0, 0, 23, 60, 5);
                pop();
            } else if (fgStyle == "circleStar") {
                push();
                translate(flagWidth / 6, flagHeight / 4);
                rotate(60);
                fill(lColorShuffle[1]);
                ellipse(0, 0, 60 * 2);
                fill(lColorShuffle[3]);
                star(0, 0, 23, 60, 5);
                pop();
            } else if (fgStyle == "multiStar") {
                push();
                translate(flagWidth / 6, flagHeight / 4);
                rotate(46);
                fill(lColorShuffle[3]);
                star(0, 0, 23, 60, 7);
                pop();
            } else if (fgStyle == "maple" && lColorShuffle[0] != lRed) {
                imageMode(CENTER);
                image(maple, flagWidth / 6, flagHeight / 4, 160, 160);
            }
        } else if (lbgStyle == "turkmen") {
            fill(lColorShuffle[0]);
            rect(0, 0, flagWidth, flagHeight);
            fill(lColorShuffle[1]);
            rect(flagWidth / 6, 0, flagWidth / 6, flagHeight);
            if (fgStyle == "crescent") {
                imageMode(CENTER);
                image(crescent, flagWidth / 2, flagHeight / 4, 130, 120);
            } else if (fgStyle == "seal" && lColorShuffle[0] != lYellow) {
                imageMode(CENTER);
                image(seal, flagWidth / 2, flagHeight / 4, 160, 130);
            } else if (fgStyle == "star") {
                fill(lColorShuffle[2]);
                push();
                translate(flagWidth / 2, flagHeight / 4);
                rotate(60);
                star(0, 0, 23, 60, 5);
                pop();
            } else if (fgStyle == "circleStar") {
                push();
                translate(flagWidth / 2, flagHeight / 4);
                rotate(60);
                fill(lColorShuffle[1]);
                ellipse(0, 0, 60 * 2);
                fill(lColorShuffle[2]);
                star(0, 0, 23, 60, 5);
                pop();
            } else if (fgStyle == "multiStar") {
                push();
                translate(flagWidth / 2, flagHeight / 4);
                rotate(46);
                fill(lColorShuffle[2]);
                star(0, 0, 23, 60, 7);
                pop();
            } else if (fgStyle == "maple" && lColorShuffle[0] != lRed) {
                imageMode(CENTER);
                image(maple, flagWidth / 2, flagHeight / 4, 160, 160);
            }
        }
    }
    fill(245);
    noStroke();
    rect(-1, -flagWidth / 8, flagWidth + 2, flagWidth / 8);
    rect(-1, flagHeight, flagWidth + 2, flagWidth / 8);
    rect(flagWidth, 0, flagWidth / 2, flagHeight);
    pop();

    textFont(asapMed);
    textAlign(CENTER);
    textSize(16);
    noStroke();
    fill(0);
    text('Flag Generator Project', width / 2, height / 2 + 50);
    fill("dimgray");
    textFont(asapReg);
    textSize(14);
    text('move mouse to the left to generate flags that are more democratic;', width / 2, height / 2 + 75);
    text('vice versa to generate flags that are less democratic', width / 2, height / 2 + 95);
    textSize(10);
    textFont(asapRI);
    text('data taken from the Democracy Index', width / 2, height / 2 + 120);
}

function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    strokeJoin(MITER);
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function draw() {
    frameRate(1);
    setup();
    print(flagWidth);
}

