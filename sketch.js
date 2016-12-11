var myImage;
var state = true;
function preload(){
     myImage = loadImage("images/animal.png");
}
function setup() {
    createCanvas(windowWidth,windowHeight)
    //myImage.filter("invert");
   
}

function draw() {

    background(250);
    imageMode(CENTER)
    image(myImage,width/2,height/2,800,600);
    
    if(state == true){
        for(var i = 0; i <= 800; i ++){
            var posX = random(0,width);
            var posY = random(0,height);
            
            var myColor = get(posX,posY);
            
            fill(myColor);
            noStroke();
            ellipse(posX,posY,10,10)
        }
    }
    
    //translate(0,-1*(height/17));
    
    fill("#d38867");
    textFont('Ubuntu');
    textSize(height/3);
    textAlign(CENTER)
    text(hour(),width/2,height/3);
    //textFont('Hind');
    text(minute(),width/2,height/3*2);
    //textFont('Sahitya');
    text(second(),width/2,height);
   
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
function mousePressed(){
    if (state == true){
        state = false;
    }else {
        state = true;
    }
}
function backgroundImage(img) {
    
    var x = 0;
    var y = 0;
    var w = width;
    var h = height;
    // default offset is center
    var offsetX = 0.5;
    var offsetY = 0.5;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    image(img, cx, cy, cw, ch,  x, y, w, h);
}
