const navMenu = document.getElementById('nav-menu')
const menuClose = document.getElementById('nav-close')
const menuToggle = document.getElementById('menu-toggle')
const menuList = document.querySelectorAll('.nav-item')

const themeButton = document.getElementById('theme-button')

// MENU OPEN/CLOSE ------------------------------------------
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
})

// CHANGE THEME ----------------------------------------------
const darkMode = 'dark-mode'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkMode) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkMode)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add': 'remove'](iconTheme) 
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkMode)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//fn + F2 -> replace all occurrences of variable