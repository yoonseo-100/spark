// Sign Up 버튼을 클릭하면 회원가입 양식으로 전환
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

// Sign Up 클릭 시 동작
signUpBtnLink.addEventListener('click', (event) => {
    event.preventDefault();  // 기본 링크 동작 방지
    wrapper.classList.add('active');  // wrapper에 'active' 클래스 추가
});

// Sign In 클릭 시 동작
signInBtnLink.addEventListener('click', (event) => {
    event.preventDefault();  // 기본 링크 동작 방지
    wrapper.classList.remove('active');  // wrapper에서 'active' 클래스 제거
});

