"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupNavbar = setupNavbar;
function setupNavbar() {
    const toggleBtn = document.querySelector('.navbar__toogleBtn');
    const menu = document.querySelector('.navbar__menu');
    const icons = document.querySelector('.navbar__icons');
    toggleBtn === null || toggleBtn === void 0 ? void 0 : toggleBtn.addEventListener('click', () => {
        menu === null || menu === void 0 ? void 0 : menu.classList.toggle('active');
        icons === null || icons === void 0 ? void 0 : icons.classList.toggle('active');
    });
}
