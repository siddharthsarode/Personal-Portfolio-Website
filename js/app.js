// Active navbar link
const navLinks = Array.from(document.querySelectorAll('nav .nav-links .link'));
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((e) => {
            e.classList.remove('active');
        })
        link.classList.add('active');
    })
})

// navbar show and hide
const barMenu = document.querySelector('#bar-menu');
console.log(barMenu);

const ul = document.querySelector('.nav-links');

barMenu.addEventListener('click', () => {
    console.log(ul);
    ul.classList.toggle('show-navbar');

    if (ul.classList.contains('show-navbar'))
        barMenu.classList = "fa-solid fa-xmark";
    else
        barMenu.classList = "fa-solid fa-bars";
})