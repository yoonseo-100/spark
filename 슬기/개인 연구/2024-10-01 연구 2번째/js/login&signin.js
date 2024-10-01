const signUpBtnLink = document.querySelector<HTMLAnchorElement>('.signUpBtn-link');
const signInBtnLink = document.querySelector<HTMLAnchorElement>('.signInBtn-link');
const wrapper = document.querySelector<HTMLElement>('.wrapper');

// Sign Up 클릭 시 동작
if (signUpBtnLink && wrapper) {
    signUpBtnLink.addEventListener('click', (event) => {
        event.preventDefault();  // 기본 링크 동작 방지
        wrapper.classList.add('active');  // wrapper에 'active' 클래스 추가
    });
}

// Sign In 클릭 시 동작
if (signInBtnLink && wrapper) {
    signInBtnLink.addEventListener('click', (event) => {
        event.preventDefault();  // 기본 링크 동작 방지
        wrapper.classList.remove('active');  // wrapper에서 'active' 클래스 제거
    });
}
