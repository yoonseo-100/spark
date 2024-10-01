interface User {
    username: string;
    email: string;
    password: string;
}

document.addEventListener('DOMContentLoaded', () => {
    const signUpBtnLink = document.querySelector('.signUpBtn-link') as HTMLAnchorElement;
    const signInBtnLink = document.querySelector('.signInBtn-link') as HTMLAnchorElement;
    const wrapper = document.querySelector('.wrapper') as HTMLElement;

    // 회원가입 및 로그인 폼 토글
    if (signUpBtnLink && signInBtnLink && wrapper) {
        signUpBtnLink.addEventListener('click', (event: Event) => {
            event.preventDefault();
            wrapper.classList.add('active');
        });

        signInBtnLink.addEventListener('click', (event: Event) => {
            event.preventDefault();
            wrapper.classList.remove('active');
        });
    }

    // 회원가입 폼 제출 처리
    const signUpForm = document.getElementById('signUpForm') as HTMLFormElement;
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event: Event) {
            event.preventDefault();

            const username = (document.getElementById('signUpUsername') as HTMLInputElement).value;
            const email = (document.getElementById('signUpEmail') as HTMLInputElement).value;
            const password = (document.getElementById('signUpPassword') as HTMLInputElement).value;

            const user: User = { username, email, password };
            localStorage.setItem('userInfo', JSON.stringify(user));

            alert('Sign up successful!');
            wrapper.classList.remove('active');
        });
    }

    // 로그인 폼 제출 처리
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    if (loginForm) {
        loginForm.addEventListener('submit', function (event: Event) {
            event.preventDefault();

            const username = (document.getElementById('loginUsername') as HTMLInputElement).value;
            const password = (document.getElementById('loginPassword') as HTMLInputElement).value;
            const savedUser: User = JSON.parse(localStorage.getItem('userInfo') || '{}');

            if (savedUser && savedUser.username === username && savedUser.password === password) {
                alert('Login successful!');
                localStorage.setItem('loggedInUser', username);
                window.location.href = "Home.html";
            } else {
                alert('Invalid username or password.');
            }
        });
    }
});
