const loginForm = document.querySelector<HTMLFormElement>("#login-form");
const loginInput = document.querySelector<HTMLInputElement>("#login-form input");
const greeting = document.querySelector<HTMLElement>("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; // 반복해서 사용할 경우, 키를 고정해 줄 수 있음 

function onLoginSubmit(event: Event): void {
    event.preventDefault();
    if (loginInput) { // loginInput이 null이 아닌 경우에만 실행
        const username = loginInput.value;
        loginInput.value = "";  // 입력된 내용을 지움
        if (loginForm) { // loginForm이 null이 아닌 경우에만 실행
            loginForm.classList.add(HIDDEN_CLASSNAME);
        }
        localStorage.setItem(USERNAME_KEY, username);
        paintGreetings(username);
    }
}

function paintGreetings(username: string): void {
    if (greeting) { // greeting이 null이 아닌 경우에만 실행
        greeting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    // show the form
    if (loginForm) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    }
} else {
    // show the greetings 
    paintGreetings(savedUsername);
}
