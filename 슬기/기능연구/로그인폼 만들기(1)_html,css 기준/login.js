// Login form functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const rememberMeCheckbox = loginForm.querySelector('input[type="checkbox"]');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Form을 실제로 제출하지 않도록 방지

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (validateForm(username, password)) {
            // 로그인 성공 시 처리할 동작 (예: 서버로 데이터 전송)
            console.log('Username:', username);
            console.log('Password:', password);
            if (rememberMeCheckbox.checked) {
                console.log('Remember me: Yes');
            } else {
                console.log('Remember me: No');
            }
            // 예시로 로그인 성공 메시지
            alert('Login successful!');
        } else {
            alert('Please enter both a valid username and password.');
        }
    });

    // 입력값 유효성 검사
    function validateForm(username, password) {
        if (username === '' || password === '') {
            return false;
        }
        // 추가로 username이나 password에 대한 조건을 추가할 수 있음
        return true;
    }

    // "Forgot password?" 링크 클릭 시
    const forgotPasswordLink = document.querySelector('.remember-forgot a');
    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault(); // 링크의 기본 동작을 막음
        alert('Redirecting to password recovery...');
        // 여기에서 실제 비밀번호 복구 페이지로 리다이렉트할 수 있음
    });

    // "Register" 링크 클릭 시
    const registerLink = document.querySelector('.register-link a');
    registerLink.addEventListener('click', function(event) {
        event.preventDefault(); // 링크의 기본 동작을 막음
        alert('Redirecting to registration page...');
        // 여기에서 실제 회원가입 페이지로 리다이렉트할 수 있음
    });
});
