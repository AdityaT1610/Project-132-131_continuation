img ="";
status="";

function preload() 
{
    img = loadImage('ADT.jpg');
}

function setup() 
{
    canvas = createCanvas(650, 450);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status - detecting objects";

}

function draw() 
{
    image(img, 0, 0, 650, 450);
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img, gotRsults);
}

function back()
{
    window.location = "index.html"
}
