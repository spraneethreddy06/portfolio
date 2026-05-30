// Typed Animation

var typed = new Typed(".typing", {

    strings: [
        "Full Stack Developer",
        "Programmer"
    ],

    typeSpeed: 100,
    backSpeed: 60,
    loop: true

});


// Particles Background

particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        size: {
            value: 3
        },

        color: {
            value: "#00abf0"
        },

        line_linked: {
            enable: true,
            color: "#00abf0"
        },

        move: {
            speed: 2
        }

    }

});
// MOBILE MENU

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
// SCROLL REVEAL

ScrollReveal({

    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.hero-content, .section-title', {

    origin: 'top'

});

ScrollReveal().reveal('.hero-image, .skills-container, .projects-container, .contact-container', {

    origin: 'bottom'

});

ScrollReveal().reveal('.about-image', {

    origin: 'left'

});

ScrollReveal().reveal('.about-content', {

    origin: 'right'

});
// ACTIVE NAVBAR LINKS

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){

            link.classList.add("active");

        }

    });

});
// NAVBAR BACKGROUND ON SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    navbar.classList.toggle("sticky", window.scrollY > 50);

});
// LOADER

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    loader.style.display = "none";

});



// EMAIL JS

window.addEventListener("DOMContentLoaded", () => {

    emailjs.init("P9jfBoxqw-5ItrLFH");

    const contactForm = document.getElementById("contact-form");

    if(contactForm){

        contactForm.addEventListener("submit", function(e){

            e.preventDefault();
            console.log("Form Submitted");
            emailjs.sendForm(
                "service_qv9ud1d",
                "template_9xd0mug",
                this
            )

            .then(() => {

                alert("Message Sent Successfully!");

                contactForm.reset();

            })

            .catch((error) => {

                alert("Failed to send message");

                console.log(error);

            });

        });

    }

});