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


function kaisen() {
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}

