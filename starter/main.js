// alert("Foodplug will have maximum access to your call log, sms and notifications 😈")

ScrollReveal({ reset: true, duration: 2500, })


// ScrollReveal().reveal('.gototop', {origin:'right', delay: 3000});
// ScrollReveal().reveal('.mobile-logo', {origin:'left'});
// ScrollReveal().reveal('.hamburger', {origin:'right'});
// ScrollReveal().reveal('.counter', {origin:'right'});
ScrollReveal().reveal('.footer-icon-holder a', {origin:'right'});
// ScrollReveal().reveal('.foodcard-price', {origin:'right', delay: 1500});
// ScrollReveal().reveal('.about-text-holder h2', {origin:'right'});

var unavailablefeature = "This feature is not yet available, try again later 😀"



function dosomething() {
    alert(unavailablefeature)
}


var contact= "https://wa.me/message/SQWCD3JZAO36B1"
function callcharges() {
    alert("🔔 Local call rates apply")
}

function contactus() {
    window.open (contact)
}


// console.log(hamburgerdiv)

var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")
var navm = document.querySelector(".nav-mobile")
var current = document.querySelector(".current")
var langs = document.querySelector(".langs")
var fabb = document.querySelector(".fab")

window.addEventListener('scroll', () =>{
    const scrollable = document.documentElement.scrollHeight -window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) < scrollable){
        // alert('you\'ve reached the bottom')
        fabb.style.opacity = '0.8'
    } else {
        fabb.style.opacity = '0'
        console.log(scrollable)
    }

    
} )

// window.addEventListener('scroll', () =>{
//     const scrollable = document.documentElement.scrollHeight -window.innerHeight;
//     const scrolled = window.scrollY;
//     if (Math.ceil(scrolled) !== scrollable){
//         alert('you\'ve not reached the bottom')
//         fabb.style.opacity = '0.8'
//     };
// } )


function kaisen() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
    navm.classList.toggle("nav-mobilez")
    document.querySelector('.fab').classList.toggle("fab-kaisen")
    document.querySelector('.box').classList.remove("box-active")
    document.querySelector('.fab').classList.remove("fab-active")
    document.querySelector('body').classList.toggle("buddy")
    
}

function otherLang(){
    current.classList.toggle("current-rotate")
    langs.classList.toggle("langs-show")

}

