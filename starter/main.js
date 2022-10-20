// alert("Foodplug will have maximum access to your call log, sms and notifications 😈")

ScrollReveal({ reset: true, duration: 3000, })


ScrollReveal().reveal('.gototop', {origin:'right', distance: '200px'});
ScrollReveal().reveal('.mobile-logo', {origin:'left', distance: '200px', delay: 3000});
ScrollReveal().reveal('.hamburger', {origin:'right', distance: '200px'});
ScrollReveal().reveal('.footer-icon-holder a', {origin:'right'});

var unavailablefeature = "This feature is not yet available, try again later 😀"

function dosomething() {
    alert(unavailablefeature)
}


var contact= "https://wa.me/message/SQWCD3JZAO36B1"

function contactus() {
    window.open (contact)
}


// console.log(hamburgerdiv)

var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")


function kaisen() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}

