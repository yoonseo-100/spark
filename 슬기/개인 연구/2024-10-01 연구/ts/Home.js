"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 페이지 로드 시 로그인 상태 확인 및 로그인/로그아웃 버튼 처리
window.onload = function () {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const greetingElement = document.getElementById('greeting');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginBtn = document.getElementById('loginBtn');
    if (loggedInUser) {
        if (greetingElement)
            greetingElement.textContent = `Hello, ${loggedInUser}님!`;
        if (logoutBtn)
            logoutBtn.style.display = 'flex'; // 로그아웃 버튼 표시
        if (loginBtn)
            loginBtn.style.display = 'none'; // 로그인 아이콘 숨기기
    }
    else {
        if (greetingElement)
            greetingElement.textContent = 'Welcome to Sia\'s Life!';
        if (logoutBtn)
            logoutBtn.style.display = 'none'; // 로그아웃 버튼 숨기기
        if (loginBtn)
            loginBtn.style.display = 'flex'; // 로그인 아이콘 표시
    }
};
// 로그아웃 버튼 클릭 시 동작
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
        // 로그아웃 처리: localStorage에서 사용자 정보 삭제
        localStorage.removeItem('loggedInUser');
        // 로그아웃 후 로그인 페이지로 리다이렉트
        window.location.href = "login.html";
    });
}
// 배경 이미지 스크립트
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
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
