function login() {
    "function for login without server *unfinished"
    gmail = document.getElementById("gmail").value;
    password = document.getElementById("password").value;

    if (gmail == "admin" && password == "admin") {
        window.location.href = "index.html";
        console.log("hey loaded");
    } else {
        alert("Wrong email or password");
    }
}