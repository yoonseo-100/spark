document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const loginForm = document.getElementById("login-form");

    // 버튼 클릭 시 로그인 폼을 표시하거나 숨기기
    loginBtn.addEventListener("click", () => {
        loginForm.classList.toggle("hidden");
    });

    // 로그인 폼 제출 시 처리 로직 (여기서는 기본 동작을 막고, 알림을 표시)
    const loginFormContent = document.getElementById("login-form-content");
    loginFormContent.addEventListener("submit", (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 막기

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 간단한 로그인 검증 (실제 환경에서는 서버로 요청을 보내야 함)
        if (username === "admin" && password === "password123") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password.");
        }

        // 로그인 후 폼 숨기기
        loginForm.classList.add("hidden");
    });
});

fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        username: username,
        password: password
    })
})
.then(response => response.json())
.then(data => {
    if (data.success) {
        alert("Login successful!");
        loginForm.classList.add("hidden");
    } else {
        alert("Invalid username or password.");
    }
})
.catch(error => console.error("Error:", error));
