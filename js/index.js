document.addEventListener("DOMContentLoaded", () => {
    const username = sessionStorage.getItem("username");
    const profile = document.getElementById("profile");
    const loginBtn = document.getElementById("login-btn");

    if (username) {
        profile.style.display = "flex";
        loginBtn.style.display = "none";
    }
});