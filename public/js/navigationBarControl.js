/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/

// on Load
/*
window.addEventListener('DOMContentLoaded', event => {
    navBarControl();
    // TODO define async
});
*/

// defines the navigation bar to shrink when the page is
// not at the top, and shrink when it is

// Shrink the navbar 
navbarShrink();

// Shrink the navbar when page is scrolled
document.addEventListener('scroll', navbarShrink());

// add bootstrap scroll spy
addSpy();

// Navbar shrink function
function  navbarShrink() {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    if (!navbarCollapsible) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink')
    } else {
        navbarCollapsible.classList.add('navbar-shrink')
    }

};


// sets up #targets for the scrollspy
// and applies event listeners for click,
// and for scrolling past the targeted components.
// listeners apply css to the buttons
function addSpy(){
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if(mainNav != null) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
}


