const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0)
})


var con = true;
function togglePassword() {
    "function to show and hide password"
    const pass = document.getElementById("password");
    var show = document.getElementsByClassName("show-password");
    var hide = document.getElementsByClassName("hide-password");
    if (con) {
        pass.type = "text";
        show[0].classList.add("hide");
        hide[0].classList.remove("hide");
    } else {
        pass.type = "password";
        show[0].classList.remove("hide");
        hide[0].classList.add("hide");
    }
    con = !con;
}


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
