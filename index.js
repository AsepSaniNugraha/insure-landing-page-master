'use strict';

const addEventOnElements = function(elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback);
    }
};


const header = document.querySelector("[data-header]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const menuToggle = document.querySelector("[data-menu-toggle]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const body = document.body;

const bodyNavActive = function(){
    if(navbar.classList.contains("active")){
        body.classList.add("nav-active")
    }else{
        body.classList.remove("nav-active")
    }
}

const toggleNav = function(){
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
    bodyNavActive();
};

const closeNav = function(){
    navbar.classList.remove("active");
    menuToggle.classList.remove("active");
    bodyNavActive();
}

addEventOnElements(navTogglers, "click", toggleNav);
addEventOnElements(navLinks, "click", closeNav);

window.addEventListener("scroll", function(){
    const scrollY = window.scrollY;
    if(scrollY > 80){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
})