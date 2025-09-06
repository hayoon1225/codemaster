// 우석이가 만든 HTML에서 슬라이더나 버튼을 가져오기
const speedSlider = document.getElementById('speed');
const angleSlider = document.getElementById('angle');
const asymmetrySlider = document.getElementById('asymmetry');

// 윤후가 만든 시뮬레이터에 사용할 초기 변수들
let rotationSpeed = parseFloat(speedSlider.value);
let initialAngle = parseFloat(angleSlider.value);
let asymmetry = parseFloat(asymmetrySlider.value);

// 슬라이더 값을 변경할 때마다 변수 업데이트
speedSlider.addEventListener('input', () => {
  rotationSpeed = parseFloat(speedSlider.value);
});

angleSlider.addEventListener('input', () => {
  initialAngle = parseFloat(angleSlider.value);
});

asymmetrySlider.addEventListener('input', () => {
  asymmetry = parseFloat(asymmetrySlider.value);
});

// 애니메이션 프레임마다 이 값을 사용해 물체 움직임 업데이트
function animate() {
  // 여기서 rotationSpeed, initialAngle, asymmetry를 사용해
  // p5.js 또는 three.js 애니메이션을 조절하게 될 예정

  requestAnimationFrame(animate);
}

animate(); // 실행

