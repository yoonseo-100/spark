interface PostData {
    title: string;
    content: string;
    tags: string;
}

// 글 등록 함수
function submitPost(): void {
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const contentInput = document.getElementById('content') as HTMLTextAreaElement;
    const tagsInput = document.getElementById('tags') as HTMLInputElement;

    const title = titleInput.value;
    const content = contentInput.value;
    const tags = tagsInput.value;

    // localStorage에 데이터 저장
    const postData: PostData = {
        title: title,
        content: content,
        tags: tags
    };

    const posts = JSON.parse(localStorage.getItem('posts') || '[]') as PostData[];
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));

    // index.html로 이동
    window.location.href = 'index.html';
}

// 메뉴 토글 함수
const toggleBtn = document.querySelector('.navbar__toogleBtn') as HTMLElement;
const menu = document.querySelector('.navbar__menu') as HTMLElement;
const icons = document.querySelector('.navbar__icons') as HTMLElement;

if (toggleBtn && menu && icons) {
    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
}

// 배경 이미지 설정
const images: string[] = [
    "01_배경화면.jpeg",
    "02_배경화면.jpeg",
    "03_배경화면.jpeg",
    "04_배경화면.jpeg",
    "05_배경화면.jpeg",
    "06_배경화면.jpeg",
    "07_배경화면.jpeg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';
