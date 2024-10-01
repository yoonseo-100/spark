export {}; // 파일을 모듈로 만듭니다.


// 게시글 데이터 타입 정의
interface Post {
    title: string;
    content: string;
    tags: string;
}

let posts: Post[] = JSON.parse(localStorage.getItem('posts') || '[]');
let currentPage: number = 1;
let postsPerPage: number = 5;

// 게시글을 로드하는 함수
function loadPosts(): void {
    const postTable = document.getElementById('post-body') as HTMLTableSectionElement;
    postTable.innerHTML = ''; // 기존 내용 초기화
    const start: number = (currentPage - 1) * postsPerPage;
    const end: number = start + postsPerPage;
    const paginatedPosts: Post[] = posts.slice(start, end);

    if (paginatedPosts.length > 0) {
        paginatedPosts.forEach(post => {
            const row = postTable.insertRow();
            row.insertCell(0).innerText = post.title;
            row.insertCell(1).innerText = post.content;
            row.insertCell(2).innerText = post.tags;
        });
    } else {
        postTable.innerHTML = '<tr><td colspan="3" class="no-posts">등록된 게시글이 없습니다.</td></tr>';
    }

    // 페이징 버튼 활성/비활성화
    const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
    const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
    const pageIndicator = document.getElementById('page-indicator') as HTMLElement;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= posts.length;
    pageIndicator.innerText = currentPage.toString();
}

// 이전 페이지로 이동하는 함수
function prevPage(): void {
    if (currentPage > 1) {
        currentPage--;
        loadPosts();
    }
}

// 다음 페이지로 이동하는 함수
function nextPage(): void {
    const totalPages: number = Math.ceil(posts.length / postsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        loadPosts();
    }
}

// 페이지당 게시글 수를 변경하는 함수
function changePostsPerPage(): void {
    const postsPerPageSelect = document.getElementById('posts-per-page') as HTMLSelectElement;
    postsPerPage = parseInt(postsPerPageSelect.value);
    currentPage = 1; // 페이지를 첫 페이지로 초기화
    loadPosts();
}

// 페이지 로드 시 게시글을 불러오는 함수 호출
window.onload = () => loadPosts();

// 네비게이션 메뉴 토글 기능
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
const images: string[] = ["01_배경화면.jpeg", "02_배경화면.jpeg", "03_배경화면.jpeg", "04_배경화면.jpeg", "05_배경화면.jpeg", "06_배경화면.jpeg", "07_배경화면.jpeg"];
const chosenImage: string = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = 'cover';
