let navbarOpenIcon = document.querySelector(".mobile-button.mobile");
let navbarCloseIcon = document.querySelector(".mobile-close.mobile");
let navbarMobileMenu = document.querySelector(".mobile-nav-menu.mobile");

navbarOpenIcon.addEventListener("click", ()=> {
    navbarOpenIcon.style.display = "none";
    navbarCloseIcon.style.display = "block";
    navbarMobileMenu.style.display = "block";
})


navbarCloseIcon.addEventListener("click", ()=> {
    navbarOpenIcon.style.display = "block";
    navbarCloseIcon.style.display = "none";
    navbarMobileMenu.style.display = "none";
})
