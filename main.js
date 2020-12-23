song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0, 0, 300, 300);
posenet=ml5.poseNet(video, modelLoaded);
posenet.on("pose", getPoses);
}

function getPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("Left wrist X = "+leftWristX);
        console.log("Left wrist Y = "+leftWristY);
        console.log("Right wrist X = "+rightWristX);
        console.log("Right wrist Y = "+rightWristY);
    }
}

function modelLoaded(){
    console.log("Working");
}

function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}
function stop(){
    song.stop();
}