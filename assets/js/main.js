const navMenu = document.getElementById('nav-menu')
const menuClose = document.getElementById('nav-close')
const menuToggle = document.getElementById('menu-toggle')
const menuList = document.querySelectorAll('.nav-item')


menuToggle.addEventListener('click', () => {
    navMenu.classList.add('menu-open')
})

menuClose.addEventListener('click', () =>{
    navMenu.classList.remove('menu-open')
})

menuList.forEach(element => {
    element.addEventListener('click', () => {
        navMenu.classList.remove('menu-open')
    })
});