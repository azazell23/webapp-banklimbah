document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('submit').addEventListener("click", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // for testing only
        if (username == "admin" && password == "admin123")
        {
            sessionStorage.setItem("username", "admin");
            sessionStorage.setItem("password", "admin1234");
            window.location.href = "../views/index.html";
        }
        // if password wrong
        else
        {
            
        }
    })
});