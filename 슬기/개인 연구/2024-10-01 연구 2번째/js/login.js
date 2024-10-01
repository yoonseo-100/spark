const loginIcon = document.querySelector<HTMLElement>('.navbar__icons__login');

if (loginIcon) {
    loginIcon.addEventListener('click', () => {
        window.location.href = 'login.html'; // 로그인 페이지로 이동
    });
}

