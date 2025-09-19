let angle = [-0.3, 0.1, 0.0]; 
let omega = [0.01, 0.1, 0.01]; //어느축을 중심으로 회전할지 결정
let I = [3, 6, 7]; //관성모멘트를 다르게해 불안정한 회전 유도


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}


function draw() {
  background('gray');   
  lights();        


  let dOmega = [
    ((I[1] - I[2]) / I[0]) * omega[1] * omega[2], 
    ((I[2] - I[0]) / I[1]) * omega[2] * omega[0], 
    ((I[0] - I[1]) / I[2]) * omega[0] * omega[1]  
  ];

  omega[0] += dOmega[0] * 0.05;
  omega[1] += dOmega[1] * 0.05;
  omega[2] += dOmega[2] * 0.05;


  angle[0] += omega[0];
  angle[1] += omega[1];
  angle[2] += omega[2];


  rotateX(angle[0]);
  rotateY(angle[1]);
  rotateZ(angle[2]);

  fill(100, 200, 250);
  stroke(255);
  box(200, 60, 40);
  fill('green') 
  box(40,60,200);
  translate(0,-60,0);
  fill('red');
  box(40,120,40);
}
