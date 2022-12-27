// alert("Foodplug will have maximum access to your call log, sms and notifications 😈")

ScrollReveal({ reset: true, duration: 2000, })


// ScrollReveal().reveal('.gototop', {origin:'right', delay: 3000});
// ScrollReveal().reveal('.mobile-logo', {origin:'left'});
// ScrollReveal().reveal('.header-text-container', {origin:'left'});
// ScrollReveal().reveal('.language', {origin:'right'});
// ScrollReveal().reveal('.footer-icon-holder a', {origin:'right'});
// ScrollReveal().reveal('.foodcard-price', {origin:'right', delay: 100});
// ScrollReveal().reveal('.about-text-holder h2', {origin:'right'});

var unavailablefeature = "This feature is not yet available, try again later 😀"



// function dosomething() {
//     alert(unavailablefeature)
// }


// var contact= "https://wa.me/message/SQWCD3JZAO36B1"
// function callcharges() {
//     alert("🔔 Local call rates apply")
// }

function contactus() {
    // window.open (contact)
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
        fabb.classList.remove("hidde")
    } else if (Math.ceil(scrolled) === scrollable) {
        fabb.style.opacity = '0'
        console.log(scrollable)
        document.querySelector('.box').classList.remove("box-active")
        document.querySelector('.fab').classList.remove("fab-active")
        fabb.classList.add("hidde")
        } else {
            fabb.style.opacity = '0'
            document.querySelector('.box').classList.remove("box-active")
            document.querySelector('.fab').classList.remove("fab-active")
            fabb.classList.add("hidde")
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
    mybackdrop.style.height = '100vh' 
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

var subscriptionn = document.querySelector('.subscription')
var subscriptionBackdrop = document.querySelector('.subscription-backdrop')

function subscription(){
    // alert('hey')
    subscriptionn.classList.add('appear')
    subscriptionBackdrop.classList.add('appear')
    // subscriptionn.style.display = "flex";
    // subscriptionBackdrop.style.display = "flex";
}

function subscriptionclose(){
    
    subscriptionn.classList.remove('appear')
    subscriptionBackdrop.classList.remove('appear')
    // subscriptionn.style.display = "none";
    // subscriptionBackdrop.style.display = "none";
}

// detecting mobile or desktop








