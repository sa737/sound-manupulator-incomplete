song = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
leftWristY = "";

function setup()
{
    canvas = createCanvas(600, 450);
    canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);

}
  

function draw()
{
    image(video, 0, 0, 600, 450);

    stroke("#00BBD4");
    fill("#00BBD4");
    circle(leftWristX, leftWristY, 30);
    innumberleftWristY = Number(leftWristY);
    remove_decimals = floor(innumberleftWristY);
    volume = remove_decimals/500;
    document.getElementById('volume').innerHTML = "Volume = " + volume;
    
    song.setVolume(volume);    
}

function preload()
{
    song = loadSound("backMusic.mp3");
    
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(2);
}

function modelLoaded()
{
    console.log("model.that.thyne.created.is.hopefully.launched");
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
      leftWristX = results[0].pose.leftWristX; 
      leftWristY = results[0].pose.leftWristY; 
      console.log("leftWristX = " + leftWristX + "  leftWristY = " + leftWristY);
      rightWristX = results[0].pose.rightWristX; 
      rightWristY = results[0].pose.rightWristY; 
      console.log("rightWristX = " + rightWristX + "  rightWristY = " + rightWristY);
   }
} 