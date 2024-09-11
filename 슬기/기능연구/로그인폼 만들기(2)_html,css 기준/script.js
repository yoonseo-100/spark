const signInBtnLink = document.querySelector('.signInBtn-link');  // 오타 수정
const signUpBtnLink = document.querySelector('.signUpBtn-link');  // 오타 수정
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
