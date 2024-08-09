function toggleMenu() {
    const icon = document.querySelector(".hamburger-icon")
    const menu = document.querySelector(".menu-links")

    icon.classList.toggle("open");
    menu.classList.toggle("open");
}

function scrollToTop(event) {
    event.preventDefault();

    window.location.hash = '';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function hamburgerToTop(event){
    toggleMenu();
    scrollToTop(event);
}