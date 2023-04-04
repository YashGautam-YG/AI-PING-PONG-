function preload(){
	ball_touch_paddel = loadSound("ball_touch_paddel.wav");
	missed = loadSound("missed.wav");
}
function setup(){
	canvas =  createCanvas(700,600);
	canvas.center();
	canvas.parent("game.console")
	
	video = createCapture(VIDEO);
	video.size(600, 500);
	
	video.parent("canvas")
	
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	}
function gotPoses(results){
  if(results.length > 0){
	console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +", noseY = " + noseY);
  }
}
function draw() {
	image()
}
function modelLoaded(){
	console.log("model loaded!");
}






