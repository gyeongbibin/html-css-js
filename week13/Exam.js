// 1. addEventListener() 사용
document.getElementById('startButton').addEventListener('click', startGame);

// 2. startGame() 함수 정의
function startGame() {
  // 2-1) 점수 초기화
  let score = 0;

  // 2-2) 알림창: "게임 시작!! 준비!!!"
  alert("게임 시작!! 준비!!!");

  // 2-3) 1초마다 배경색 변경 (setInterval() 사용)
  let colorInterval = setInterval(changeBackgroundColor, 1000);

  // 2-4) 1초마다 버튼 생성 (setInterval() 사용)
  let buttonInterval = setInterval(generateButton, 1000);

  // 2-5) 30초 후 게임 종료 타이머 (setTimeout() 사용)
  let gameTimer = setTimeout(endGame, 30000);

  // 3. generateButton() 함수 정의
  function generateButton() {
    // 새로운 버튼 생성 (createElement("button"))
    let newButton = document.createElement("button");

    // 랜덤 위치 설정 (화면 너비 내 랜덤 위치)
    let x = Math.random() * (window.innerWidth - 100); // 버튼 크기 고려
    let y = Math.random() * (window.innerHeight - 100);
    newButton.style.position = "absolute";
    newButton.style.left = x + "px";
    newButton.style.top = y + "px";

    // 버튼 클릭 시 점수 증가 후 버튼 제거
    newButton.addEventListener('click', function() {
      score++;
      this.remove();
    });

    // body 부분에 자식 노드 추가 (appendChild())
    document.body.appendChild(newButton);
  }

  // 4. endGame() 함수 정의
  function endGame() {
    // 게임 정지, 버튼 정지 (clearInterval())
    clearInterval(colorInterval);
    clearInterval(buttonInterval);

    // 만약 버튼이 존재하면 버튼 제거
    let existingButtons = document.querySelectorAll('button');
    existingButtons.forEach(button => button.remove());

    // 게임 종료 알림창 생성, 점수 알림
    alert("게임 종료! 당신의 점수는 " + score + "점입니다.");

    // 배경색 초기화
    document.body.style.backgroundColor = "white";
  }

  // 배경색 변경 랜덤 함수
  function changeBackgroundColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
  }
}