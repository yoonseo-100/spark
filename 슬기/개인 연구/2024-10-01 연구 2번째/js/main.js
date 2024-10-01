const toogleBtn = document.querySelector<HTMLElement>('.navbar__toogleBtn');
const menu = document.querySelector<HTMLElement>('.navbar__menu');
const icons = document.querySelector<HTMLElement>('.navbar__icons');
const navbarIconsLogin = document.querySelector<HTMLElement>('.navbar__icons__login');

// 토글 버튼 클릭 시 메뉴 및 아이콘의 'active' 클래스 토글
if (toogleBtn && menu && icons) {
    toogleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
}

// 로그인 아이콘 클릭 시 메뉴 및 아이콘의 'active' 클래스 토글
if (navbarIconsLogin && menu && icons) {
    navbarIconsLogin.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
}
