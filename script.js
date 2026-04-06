document.addEventListener('DOMContentLoaded', () => {

    // MENU BURGER
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            burger.classList.toggle('open'); 
        });
    }

    // HEADER SCROLL
    let lastScroll = 0;
    const header = document.getElementById("header");

    if (!header) {
        console.error("Header introuvable !");
        return;
    }

    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;

        // Ajouter fond
        if (currentScroll > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        // Scroll vers le bas → cacher
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add("hidden");
        } 
        // Scroll vers le haut → afficher
        else {
            header.classList.remove("hidden");
        }

        lastScroll = currentScroll;
    });

});
