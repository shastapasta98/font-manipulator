noseX=0;
noseY=0;
difference=0;
rightwristx=0;
leftwristx=0

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,300);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoded);
    poseNet.on("pose", gotPoses)
}

function draw(){
    background("#0000FF");
    document.getElementById("font-size").innerHTML="font-size is " + difference + "px";
    fill('orange');
    textSize(difference);
    text("Jai",50,250);
}



function modelLoded(){
    console.log("poseNet is Initialized")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference= floor(leftwristx - rightwristx);
        console.log("leftwristx =" + leftwristx + "rightwristx =" + rightwristx + "difference +" + difference);

       
}
}

