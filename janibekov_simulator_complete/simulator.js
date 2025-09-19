
let angle = [0, 0.1, 0];
let omega = [0.1, 0.1, 0.01];
let I = [1, 1, 3];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background('gray');
  lights();

  // UI 연동
  let speedSlider = document.getElementById('speed');
  let angleSlider = document.getElementById('angle');
  let asymmetrySlider = document.getElementById('asymmetry');

  if (speedSlider && angleSlider && asymmetrySlider) {
    omega[0] = parseFloat(speedSlider.value);
    angle[0] = parseFloat(angleSlider.value);
    I[1] = 1 + parseFloat(asymmetrySlider.value);
    I[2] = 3 - parseFloat(asymmetrySlider.value);
  }

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
  fill('green');
  box(40, 60, 200);
  translate(0, -60, 0);
  fill('red')
  box(40, 120, 40);
}
    
