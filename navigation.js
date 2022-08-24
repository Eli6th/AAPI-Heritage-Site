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

// Scrolling from history page
function scrollMovie() {
    document.getElementById( 'movie' ).scrollIntoView({
        behavior: 'smooth'
    });
}
function scrollHistoryBook() {
    document.getElementById( 'history_book' ).scrollIntoView({
        behavior: 'smooth'
    });
}
const openInNewWindow = event => {
    event.preventDefault();
    const {href, target} = event.currentTarget;
    const features = "resizable";
    window.open(href, target, features);
  };
  
  
  document.querySelector("a")
    .addEventListener("click", openInNewWindow);
    
