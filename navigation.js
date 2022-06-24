var persistence;

// Mobile Menu
function openMobileMenu(x) {
    document.getElementById("mobile_menu").style.opacity = 100;
    document.getElementById("mobile_menu").style.top = 0;
}

function closeMobileMenu(x) {
    document.getElementById("mobile_menu").style.opacity = 0;
    document.getElementById("mobile_menu").style.top = "-100%";
}

// Scrolling from food page
function scrollPanel() {
    document.getElementById( 'panel' ).scrollIntoView({
        behavior: 'smooth'
    });
}
function scrollCookbook() {
    document.getElementById( 'cookbook' ).scrollIntoView({
        behavior: 'smooth'
    });
}