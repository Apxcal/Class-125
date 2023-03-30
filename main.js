leftWrist=0;
rightWrist=0;
difference=0;

function preload(){
}

function draw(){
    background("#cb8e00");
    textSize(difference);
    fill("blue");
    text("Zavier", 30, 100);
}

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);
    canvas=createCanvas(500, 500);
    canvas.position(560, 160);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist);
    }
}