function preload(){
}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}


function draw(){
    image(video, 180, 115, 280, 250);

    // Draw a circle at location (30, 30) with a diameter of 20.
   fill (255, 90, 90); stroke(255, 90, 90);
    circle(50, 50, 90);
    circle(50, 430, 90);
    circle(590, 50, 90);
    circle(590, 430, 90);
    rect(85, 25, 539, 55);
    rect(25, 80, 55, 330);
    rect(565, 80, 55, 330);
    rect(85, 400, 539, 55);
    }


function take_snapshot(){
    save('pinkFrame.png');
}
;
