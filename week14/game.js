// 요소들 불러오기
const choices = document.querySelectorAll(".choice"); // 클래스 이름 "choice"로 수정
const userChoiceSpan = document.querySelector("#userChoice span");
const computerChoiceSpan = document.querySelector("#computerChoice span");
const winnerSpan = document.querySelector("#winner span");

// 배열 만들기
const options = ["scissors", "rock", "paper"];

function computerRandomChoice() {
    const randomIndex = Math.floor(Math.random() * options.length); // Math.random() 호출 수정
    return options[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "비겼습니다!";
    } else if (
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "이겼습니다!";
    } else {
        return "졌습니다!";
    }
}

// 이벤트 처리
for (const choice of choices) {
    choice.addEventListener("click", () => {
        const userChoice = choice.id; // 버튼 ID가 유저의 선택
        const computerChoice = computerRandomChoice(); // 랜덤으로 컴퓨터 선택
        const winner = getResult(userChoice, computerChoice); // 결과 계산

        // 결과 화면에 업데이트
        userChoiceSpan.innerText = userChoice;
        computerChoiceSpan.innerText = computerChoice;
        winnerSpan.innerText = winner;
    });
}
