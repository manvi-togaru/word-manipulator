var nosex=0
var nosey=0
var difference = 0
var right_wristx=0
var left_wristx=0
function setup(){
   var video=createCapture(VIDEO)
   video.size(500,500)
   canvas=createCanvas(500,500)
   canvas.position(500,150)
   posenet=ml5.poseNet(video,modelloaded)
   posenet.on('pose',gotposes)
}

function modelloaded(){
    console.log("posenet is inishaliased")
}

function gotposes(results){
if (results.length>0) {
    console.log("results")
    nosex=results[0].pose.nose.x
    nosey=results[0].pose.nose.y
    left_wristx=results[0].pose.leftWrist.x
    right_wristx=results[0].pose.rightWrist.x
    difference=floor(left_wristx-right_wristx)
}
}

function draw(){
    background("seashell")
    fill("purple")
    stroke("purple")
    textSize(difference)
    text("peter",nosex,nosey,)
}