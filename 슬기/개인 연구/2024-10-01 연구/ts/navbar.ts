export function setupNavbar() {
    const toggleBtn = document.querySelector('.navbar__toogleBtn') as HTMLElement | null;
    const menu = document.querySelector('.navbar__menu') as HTMLElement | null;
    const icons = document.querySelector('.navbar__icons') as HTMLElement | null;

    toggleBtn?.addEventListener('click', () => {
        menu?.classList.toggle('active');
        icons?.classList.toggle('active');
    });
}
