document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "114514" && password === "1919180") {
            message.textContent = "登录成功！";
            message.style.color = "green";
			window.location.href="main.html"
        } else {
            message.textContent = "无效的用户名或密码。";
            message.style.color = "red";
        }
    });
});
