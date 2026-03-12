// On attend que le DOM soit chargé pour éviter les erreurs
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navMenu = document.getElementById('nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Animation optionnelle du burger
            burger.classList.toggle('open'); 
        });
    } else {
        console.error("Élément burger ou nav-menu introuvable !");
    }
});