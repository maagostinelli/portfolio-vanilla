const navMenu = document.getElementById('nav-menu')
const menuClose = document.getElementById('nav-close')
const menuToggle = document.getElementById('menu-toggle')
const menuList = document.querySelectorAll('.nav-item')

const themeButton = document.getElementById('theme-button')

const skillListOpen = document.querySelectorAll('.skills-list')

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

// OPEN SKILLS LIST ----------------------------------------------
$(skillListOpen).each( function() {
    $(this).on('click', () => {
        if ($(window).width() < 767) {
            $(this).children('i').toggleClass("uil-angle-right uil-angle-down")
            $(this).children('div').toggleClass("open")
        }
    })
})

// SET SKILL-BAR COLOR ----------------------------------------------
$(document).ready(function () {
    const skillsPercentages = $(".skill-percentage") //
    for(i = 0; i < skillsPercentages.length; i++) {
        let value = $(skillsPercentages[i]).attr("aria-valuenow")
        $(skillsPercentages[i]).width(value + "%")
        if (value >= "66") {
            $(skillsPercentages[i]).addClass("bg-blue") 
        } else if (value >= "33") {
            $(skillsPercentages[i]).addClass("bg-light-orange")
        } else {
            $(skillsPercentages[i]).addClass("bg-dark-orange")
        }
    } 
})

// PORTFOLIO SWIPER ----------------------------------------------
let swiper = new Swiper(".swiper-container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });