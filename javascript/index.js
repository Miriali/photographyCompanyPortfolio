//Variables
const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');

const navLeft = menu.getBoundingClientRect().left;

//Toggle Navbar
navOpen.addEventListener('click', () => {
    if(navLeft < 0){
        menu.classList.add('show');
    }
});
