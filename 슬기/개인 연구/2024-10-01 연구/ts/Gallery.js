"use strict";
// 갤러리를 로드하는 함수
function loadGallery(category = 'all') {
    const galleryElement = document.getElementById('gallery');
    const savedFiles = JSON.parse(localStorage.getItem('mediaGallery') || '[]');
    galleryElement.innerHTML = '';
    savedFiles.forEach(file => {
        if (category === 'all' || file.category === category) {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            let mediaElement = '';
            if (file.type.startsWith('image/')) {
                mediaElement = `<img src="${file.src}" alt="Uploaded Image">`;
            }
            else if (file.type.startsWith('video/')) {
                mediaElement = `<video controls>
                                    <source src="${file.src}" type="${file.type}">
                                    Your browser does not support the video tag.
                                </video>`;
            }
            galleryItem.innerHTML = `
                ${mediaElement}
                <p>${file.date} | Category: ${file.category}</p>
            `;
            galleryElement.appendChild(galleryItem);
        }
    });
}
// 파일 업로드 처리 함수
function uploadFile() {
    var _a;
    const fileInput = document.getElementById('fileInput');
    const file = (_a = fileInput === null || fileInput === void 0 ? void 0 : fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
    const category = document.getElementById('category').value;
    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            const fileData = reader.result;
            const currentDate = new Date().toLocaleString();
            const newFile = {
                src: fileData,
                date: `Uploaded on ${currentDate}`,
                type: file.type,
                category: category
            };
            const savedFiles = JSON.parse(localStorage.getItem('mediaGallery') || '[]');
            savedFiles.push(newFile);
            localStorage.setItem('mediaGallery', JSON.stringify(savedFiles));
            loadGallery(); // 화면에 즉시 반영
        };
        reader.onerror = function () {
            console.error("File could not be read!");
        };
        reader.readAsDataURL(file);
    }
    else {
        alert("No file selected!");
    }
}
// 필터를 통해 해당 카테고리만 표시
function filterGallery(category) {
    loadGallery(category); // 해당 카테고리만 필터링
}
// 페이지 로드 시 저장된 갤러리 로드
window.onload = function () {
    loadGallery();
};
