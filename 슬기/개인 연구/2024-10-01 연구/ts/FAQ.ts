export {}; // 파일을 모듈로 만듭니다.

import { setupNavbar } from './navbar'; // navbar.ts 파일이 FAQ.ts와 같은 폴더에 있는지 확인

// DOM 요소들을 타입스크립트에서 타입을 명시하여 가져옵니다.
const faqToggleBtn = document.querySelector('.navbar__toogleBtn') as HTMLElement | null;
const faqMenu = document.querySelector('.navbar__menu') as HTMLElement | null;
const faqIcons = document.querySelector('.navbar__icons') as HTMLElement | null;


// toggleBtn가 있는지 확인 후 이벤트 리스너 추가
if (faqToggleBtn) {
    faqToggleBtn.addEventListener('click', () => {
        // menu와 icons의 존재 여부를 확인한 후 클래스를 토글합니다.
        if (faqMenu) faqMenu.classList.toggle('active');
        if (faqIcons) faqIcons.classList.toggle('active');
    });
}

// 배경 이미지 설정
const images: string[] = [
    "01_배경화면.jpeg", 
    "02_배경화면.jpeg", 
    "03_배경화면.jpeg", 
    "04_배경화면.jpeg", 
    "05_배경화면.jpeg", 
    "06_배경화면.jpeg", 
    "07_배경화면.jpeg"
];

const chosenImage: string = images[Math.floor(Math.random() * images.length)];

// body 요소가 존재하는지 확인한 후 배경 이미지를 설정합니다.
const body = document.body;
if (body) {
    body.style.backgroundImage = `url('img/${chosenImage}')`;
}
