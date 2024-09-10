const questionElement = document.querySelector("#quote span:first-child");
const answerElement = document.querySelector("#quote span:last-child");
const oButton = document.querySelector("#o-button");
const xButton = document.querySelector("#x-button");
const character = document.querySelector("#character");

const questions = [
    { question: "Is the Earth round?", answer: "O" },
    { question: "Is 2 + 2 = 5?", answer: "X" },
    { question: "Is the sky blue?", answer: "O" },
    { question: "Is fire cold?", answer: "X" },
];

// 기본 문구 설정
document.querySelector("#quiz-title").innerText = "[[O.X 퀴즈]]";

// 랜덤한 질문 선택
const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
questionElement.innerText = randomQuestion.question;

// 정답을 체크하고 결과를 출력하는 함수
function checkAnswer(userAnswer) {
    if (userAnswer === randomQuestion.answer) {
        answerElement.innerText = "Correct!";
        showCharacter();  // 정답일 경우 캐릭터가 등장
    } else {
        answerElement.innerText = "Wrong!";
    }
}

// 캐릭터가 나타나는 애니메이션 효과
function showCharacter() {
    character.classList.add("show");

    // 5초 뒤 캐릭터 사라짐
    setTimeout(() => {
        character.classList.remove("show");
    }, 5000);  // 5초 동안 캐릭터 표시 후 제거
}

// O 버튼 클릭 시 정답 체크
oButton.addEventListener("click", () => {
    checkAnswer("O");
});

// X 버튼 클릭 시 정답 체크
xButton.addEventListener("click", () => {
    checkAnswer("X");
});
