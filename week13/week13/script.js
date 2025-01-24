// let score = 0;
// let gameInterval;
// let buttonInterval;
// const GAME_DURATION = 30000;

// document.getElementById("startBtn").addEventListener("click",
//     ()=>{startGame();}
// );

// function startGame(){
//     score = 0;
//     alert("Game start! Get ready!");

//     //배경색 변경
//     gameInterval = setInterval( changeBackgroundColor,3000);

//     //버튼 생성
//     buttonInterval = setInterval(generateButton, 3000);

//     //30초동안 게임 실행
//     setTimeout(endGame(),GAME_DURATION);


// };

// function changeBackgroundColor(){
//     const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
//     document.body.style.backgroundColor = randomColor;
// };


// function generateButton(){
//     const excitingBtn = document.querySelector("#gameBtn");
    
//     //기존버튼 제거
//     if(excitingBtn){
//         excitingBtn.remove();
//     }

//     //새로운 버튼 생성
//     const button = document.createElement("button");
//     //"gameBtn"이라는 아이디 부여
//     button.id = "gameBtn";  
//     button.textContent("Click.");

//     //랜덤위치 선정
//     const x = Math.random()*(window.innerWidth-100);
//     const y = Math.random()*(window.innerHeight-50);
//     button.style.left=`${x}px`;
//     button.style.top = `${y}px`;

//     //버튼 클릭 시 점수 1점 증가 후 버튼 삭제  
//     button.addEventListener("click",()=>{
//             score++;
//             button.remove();
//          }
//     );

//     document.body.appendChild(button);

// };


// function endGame(){
//     //정지
//     clearInterval(gameInterval);
//     clearInterval(buttonInterval);

//     //버튼 제거
//     const excitingBtn = document.querySelector("#gameBtn");
//     if(excitingBtn){
//         excitingBtn.remove();
//     }

//     alert(`The end. Your score is ${score}.`);
//     document.body.style.backgroundColor ="";


// };





let score = 0;
let gameInterval;
let buttonInterval;
const GAME_DURATION = 30000;

// 시작 버튼
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startGame);

function startGame() {
    score = 0;
    alert("Game start! Get ready!");

    // 시작 버튼 숨기기 (visibility 사용)
    startBtn.style.visibility = "hidden";

    // 배경색 변경
    gameInterval = setInterval(changeBackgroundColor, 1000);

    // 버튼 생성
    buttonInterval = setInterval(generateButton, 1000);

    // 30초 후 게임 종료
    setTimeout(endGame, GAME_DURATION);
}

function changeBackgroundColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

function generateButton() {
    const existingBtn = document.querySelector("#gameBtn");

    // 기존 버튼 제거
    if (existingBtn) {
        existingBtn.remove();
    }

    // 새로운 버튼 생성
    const button = document.createElement("button");
    button.id = "gameBtn";
    button.textContent = "Click";

    // 랜덤 위치 설정
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.position = "absolute"; // 필수
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // 버튼 클릭 시 점수 증가 및 제거
    button.addEventListener("click", () => {
        score++;
        button.remove();
    });

    document.body.appendChild(button);
}

function endGame() {
    // 정지
    clearInterval(gameInterval);
    clearInterval(buttonInterval);

    // 버튼 제거
    const existingBtn = document.querySelector("#gameBtn");
    if (existingBtn) {
        existingBtn.remove();
    }

    // 게임 종료 메시지 및 점수 표시
    alert(`Game Over! Your score is ${score}.`);
    document.body.style.backgroundColor = "";

    // 시작 버튼 다시 표시 (visibility 사용)
    startBtn.style.visibility = "visible";
}
