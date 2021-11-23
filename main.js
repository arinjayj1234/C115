function preload(){
}

function setup(){
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();  

  sirWtses = ml5.poseNet(video, iGoor);
  sirWtses.on('pose', wsotGe);
}

function wsotGe(results){
  if (results.length > 0){
    console.log(results);
    console.log("X=hmm now how will you access it "+results[0].pose.nose.x);
    console.log("Y=What happened hmm "+results[0].pose.nose.y);
  }
}

function iGoor(){
  console.log("You can just say that PoseNet is initialized. (Yeah, Okay great okay)");
}

function draw(){
  image(video, 0, 0, 300, 300);

}

function takeSnapshot(){
  save("funnyPic.png");
}
