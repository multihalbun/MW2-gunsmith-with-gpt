import { weaponArr } from "./weaponList.js";
import * as gptData from "./gptData.js";

const weaponTypeSelect = document.getElementById("weapon-type-select");
const weaponSelect = document.getElementById("weapon-select");
const inputTextarea = document.getElementById("input-text");
const inputButton = document.getElementById("input-button");
const answerBox = document.getElementById("answer-box");

// openAI API
let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// 사용자의 질문
let question;

// 질문과 답변 저장
let data = [];

// 화면에 뿌려줄 데이터, 질문들
let questionData = [];

// 선택한 총기별로 gpt에게 사전 학습 데이터 설정
const setData = () => {
    data = gptData.data;
}

// 사용자의 질문을 객체를 만들어서 push
const sendQuestion = (question) => {
    setData();
    data.push({
    role: "user",
    content: weaponArr[weaponTypeSelect.value][weaponSelect.value] + "의 부착물 5개를 추천해줘. " + question,
    });
    questionData.push({
    role: "user",
    content: weaponArr[weaponTypeSelect.value][weaponSelect.value] + "의 부착물 5개를 추천해줘. " + question,
    });

};

// 화면에 질문 그려주는 함수
const printQuestion = () => {
        let s = document.createElement("div");
        s.classList.add("question");
        questionData.map((el) => {
        s.innerText = "질문: " + el.content;
        });
        answerBox.appendChild(s);
        questionData = [];
        question = false;
    
};

// 화면에 답변 그려주는 함수
const printAnswer = (answer) => {
    let s = document.createElement("div");
    s.classList.add("answer");
    s.innerText = "답변: " + answer;
    answerBox.appendChild(s);
    answerBox.style.display = "flex";
};

// api 요청보내는 함수
const apiPost = async () => {
const result = await fetch(url, {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    redirect: "follow",
})
    .then((res) => res.json())
    .then((res) => {
    answerBox.replaceChildren();
    printQuestion();
    printAnswer(res.choices[0].message.content);
    inputButton.disabled = false;
    })
    .catch((err) => {
    console.log(err);
    });
};

// gpt의 답변을 받기전까지 기다리는 화면 표시
const waitAnswer = () => {
    answerBox.replaceChildren();
    let s = document.createElement("div");
    s.classList.add("loading");
    s.innerText = "GPT의 답변을 기다리는중..."
    answerBox.appendChild(s);
    answerBox.style.display = "flex";
}

// submit
inputButton.addEventListener('click', (e) => {
    inputButton.disabled = true;
    waitAnswer();
    e.preventDefault();
    question = inputTextarea.value;
    inputTextarea.value = null;
    sendQuestion(question);
    apiPost();
});