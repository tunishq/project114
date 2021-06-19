noseX=0;
noseY=0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup()
{
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300, 300);
 video.hide();

poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is initialised');
}

function draw()
{
image(video, 0, 0, 300, 300);
image(mustache, noseX, noseY-15, 50, 20);
}
function take_snapshot()
{
    save('filteredImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
