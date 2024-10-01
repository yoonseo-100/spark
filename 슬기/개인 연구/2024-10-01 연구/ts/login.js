"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const wrapper = document.querySelector('.wrapper');
    // 회원가입 및 로그인 폼 토글
    if (signUpBtnLink && signInBtnLink && wrapper) {
        signUpBtnLink.addEventListener('click', (event) => {
            event.preventDefault();
            wrapper.classList.add('active');
        });
        signInBtnLink.addEventListener('click', (event) => {
            event.preventDefault();
            wrapper.classList.remove('active');
        });
    }
    // 회원가입 폼 제출 처리
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('signUpUsername').value;
            const email = document.getElementById('signUpEmail').value;
            const password = document.getElementById('signUpPassword').value;
            const user = { username, email, password };
            localStorage.setItem('userInfo', JSON.stringify(user));
            alert('Sign up successful!');
            wrapper.classList.remove('active');
        });
    }
    // 로그인 폼 제출 처리
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const savedUser = JSON.parse(localStorage.getItem('userInfo') || '{}');
            if (savedUser && savedUser.username === username && savedUser.password === password) {
                alert('Login successful!');
                localStorage.setItem('loggedInUser', username);
                window.location.href = "Home.html";
            }
            else {
                alert('Invalid username or password.');
            }
        });
    }
});
