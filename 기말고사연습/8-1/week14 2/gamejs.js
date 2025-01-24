// ��ҵ� �ҷ�����
const choices = document.querySelectorAll(".choice"); // Ŭ���� �̸� "choice"�� ����
const userChoiceSpan = document.querySelector("#userChoice span");
const computerChoiceSpan = document.querySelector("#computerChoice span");
const winnerSpan = document.querySelector("#winner span");

// �迭 �����
const options = ["scissors", "rock", "paper"];

function computerRandomChoice() {
    const randomIndex = Math.floor(Math.random() * options.length); // Math.random() ȣ�� ����
    return options[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "�����ϴ�!";
    } else if (
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return "�̰���ϴ�!";
    } else {
        return "�����ϴ�!";
    }
}

// �̺�Ʈ ó��
for (const choice of choices) {
    choice.addEventListener("click", () => {
        const userChoice = choice.id; // ��ư ID�� ������ ����
        const computerChoice = computerRandomChoice(); // �������� ��ǻ�� ����
        const winner = getResult(userChoice, computerChoice); // ��� ���

        // ��� ȭ�鿡 ������Ʈ
        userChoiceSpan.innerText = userChoice;
        computerChoiceSpan.innerText = computerChoice;
        winnerSpan.innerText = winner;
    });
}
