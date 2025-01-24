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

//     //���� ����
//     gameInterval = setInterval( changeBackgroundColor,3000);

//     //��ư ����
//     buttonInterval = setInterval(generateButton, 3000);

//     //30�ʵ��� ���� ����
//     setTimeout(endGame(),GAME_DURATION);


// };

// function changeBackgroundColor(){
//     const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
//     document.body.style.backgroundColor = randomColor;
// };


// function generateButton(){
//     const excitingBtn = document.querySelector("#gameBtn");
    
//     //������ư ����
//     if(excitingBtn){
//         excitingBtn.remove();
//     }

//     //���ο� ��ư ����
//     const button = document.createElement("button");
//     //"gameBtn"�̶�� ���̵� �ο�
//     button.id = "gameBtn";  
//     button.textContent("Click.");

//     //������ġ ����
//     const x = Math.random()*(window.innerWidth-100);
//     const y = Math.random()*(window.innerHeight-50);
//     button.style.left=`${x}px`;
//     button.style.top = `${y}px`;

//     //��ư Ŭ�� �� ���� 1�� ���� �� ��ư ����  
//     button.addEventListener("click",()=>{
//             score++;
//             button.remove();
//          }
//     );

//     document.body.appendChild(button);

// };


// function endGame(){
//     //����
//     clearInterval(gameInterval);
//     clearInterval(buttonInterval);

//     //��ư ����
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

// ���� ��ư
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startGame);

function startGame() {
    score = 0;
    alert("Game start! Get ready!");

    // ���� ��ư ����� (visibility ���)
    startBtn.style.visibility = "hidden";

    // ���� ����
    gameInterval = setInterval(changeBackgroundColor, 1000);

    // ��ư ����
    buttonInterval = setInterval(generateButton, 1000);

    // 30�� �� ���� ����
    setTimeout(endGame, GAME_DURATION);
}

function changeBackgroundColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
}

function generateButton() {
    const existingBtn = document.querySelector("#gameBtn");

    // ���� ��ư ����
    if (existingBtn) {
        existingBtn.remove();
    }

    // ���ο� ��ư ����
    const button = document.createElement("button");
    button.id = "gameBtn";
    button.textContent = "Click";

    // ���� ��ġ ����
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    button.style.position = "absolute"; // �ʼ�
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // ��ư Ŭ�� �� ���� ���� �� ����
    button.addEventListener("click", () => {
        score++;
        button.remove();
    });

    document.body.appendChild(button);
}

function endGame() {
    // ����
    clearInterval(gameInterval);
    clearInterval(buttonInterval);

    // ��ư ����
    const existingBtn = document.querySelector("#gameBtn");
    if (existingBtn) {
        existingBtn.remove();
    }

    // ���� ���� �޽��� �� ���� ǥ��
    alert(`Game Over! Your score is ${score}.`);
    document.body.style.backgroundColor = "";

    // ���� ��ư �ٽ� ǥ�� (visibility ���)
    startBtn.style.visibility = "visible";
}
