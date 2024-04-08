function preload() {
   
}

function setup() {
  canvas=createCanvas(650, 490);
  canvas.position(370, 150);
  video=createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 650, 490);
  circle(10, 10, 100);
  circle(645, 10, 100);
  circle(10, 485, 100);
  circle(645, 485, 100);
  circle(322, 10, 100); 
  circle(330, 485, 100); 
  rect(65, 0, 202, 50, 20);
  rect(380, 0, 202, 50, 20);
  rect(385, 440, 202, 50, 20);
  rect(65, 440, 202, 50, 20);
}

function take_snapshot() {
  save('tu_en_la_fiesta.png');
}