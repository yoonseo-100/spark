"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DOM 요소들을 타입스크립트에서 타입을 명시하여 가져옵니다.
const faqToggleBtn = document.querySelector('.navbar__toogleBtn');
const faqMenu = document.querySelector('.navbar__menu');
const faqIcons = document.querySelector('.navbar__icons');
// toggleBtn가 있는지 확인 후 이벤트 리스너 추가
if (faqToggleBtn) {
    faqToggleBtn.addEventListener('click', () => {
        // menu와 icons의 존재 여부를 확인한 후 클래스를 토글합니다.
        if (faqMenu)
            faqMenu.classList.toggle('active');
        if (faqIcons)
            faqIcons.classList.toggle('active');
    });
}
// 배경 이미지 설정
const images = [
    "01_배경화면.jpeg",
    "02_배경화면.jpeg",
    "03_배경화면.jpeg",
    "04_배경화면.jpeg",
    "05_배경화면.jpeg",
    "06_배경화면.jpeg",
    "07_배경화면.jpeg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
// body 요소가 존재하는지 확인한 후 배경 이미지를 설정합니다.
const body = document.body;
if (body) {
    body.style.backgroundImage = `url('img/${chosenImage}')`;
}
