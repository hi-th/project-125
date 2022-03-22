function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(550,150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('poseNet', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet model is loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("#6C91C2");
    textSize(difference);
    fill("#FFE787");
    text('Himanshu' , 50 , 400)
}

