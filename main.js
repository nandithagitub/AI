function setup(){
    canvas = createCanvas(350,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,350,350);
}

song1 = "";
song2 = "";

function preload(){
song1 = loadSong("Wolves.mp3");
song2 = loadSong("Faded.mp3");
}