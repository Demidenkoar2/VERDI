const headerChangeColor = document.querySelector('.container__wraper-white');
const headerLinks = document.querySelectorAll('.a__header-link');

const logoHeader = document.querySelector('.container__logo');

const logoBlack = document.querySelector('.logo-black');
const logoWhite = document.querySelector('.logo-white');

const body = document.querySelector('.body');

// ======= SCREEN WIGHT ======
let valueOfScreenWidth = function checkPosition() {
    let screenWight = document.documentElement.clientWidth;
    return screenWight;
};
// ======= SCREEN WIGHT END

// ======== HEADER BTN MENU ================
function btnHeader(hoverElement, screenWight) {
    const headerParent = document.querySelector('.header');
    const menuHaderNav = document.querySelector('.header__menu_hiden');
    const dash = document.querySelector('.button-dash');
    let scrollPosition = window.scrollY;

    dash.addEventListener('click', () => {
        dash.classList.toggle('dash-active');
        menuHaderNav.classList.toggle('header__menu_hiden');
        hoverElement.classList.toggle('hover-bg');
        if(screenWight <= 900 && scrollPosition == 0) {
            body.classList.toggle('no-scroll')
            headerParent.classList.toggle('mobile-menu-show')
            // logoBlack.classList.add('logo-hiden');
            // logoWhite.classList.toggle('logo-hiden')
            hoverElement.classList.toggle('container__hrader-vh');
        }
    });
}
btnHeader(headerChangeColor, valueOfScreenWidth());
// ======== HEADER BTN MENU END

// =================== Sroll Top

function scrollTop(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    });
}
    
(function scrollToTop() {
    const btnElem = document.querySelector('.btn__scroll-top');
    btnElem.addEventListener('click', () => {
        const scrollToElem = document.querySelector('.header');
        scrollTop(scrollToElem);
    })
})(scrollTop);

(function scrollBlockHiden() {
    const btnElem = document.querySelector('.btn__scroll-top');
    window.addEventListener("scroll", function() { 
        const conteinerFooter = document.querySelector('.container__footer').offsetTop - 500;
        let scrollPositionY = window.pageYOffset || document.documentElement.scrollTop; 
        if (scrollPositionY >= conteinerFooter) {
            btnElem.classList.add('btn__scroll-position');
            btnElem.classList.remove('btn__scroll-hiden');
        } else {
            btnElem.classList.remove('btn__scroll-position');
            btnElem.classList.add('btn__scroll-hiden');
        }
    });
})();

// =================== Sroll Top End