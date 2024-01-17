function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const hamburgerIcon = document.querySelector(".hamburger-icon")
    const closeIcon = document.querySelector(".close-icon")

    const isHamburgerIconHidden = window.getComputedStyle(hamburgerIcon).display === "none";

    if (isHamburgerIconHidden) {
        hamburgerIcon.style.display = "flex"
        closeIcon.style.display = "none"
    } else {
        hamburgerIcon.style.display = "none"
        closeIcon.style.display = "flex"
    }
    
    menu.classList.toggle("open")
}