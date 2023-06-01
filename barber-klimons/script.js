
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

(function() {
    "use strict";

    AOS.init();


const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}
const hamburgerIcon = document.getElementById('hamburger-icon');
const body = document.querySelector('body');

hamburgerIcon.addEventListener('click', function() {
  body.classList.toggle('no-scroll');
});

/* To go to the navBar links */
on('click', '.scrollto', function(e) {
  if (select(this.hash)) {
    e.preventDefault()

    let body = select('body')
    if (body.classList.contains('mobile-nav-active')) {
      body.classList.remove('mobile-nav-active')
      let navbarToggle = select('.mobile-nav-toggle')
      navbarToggle.classList.toggle('bi-list')
      navbarToggle.classList.toggle('bi-x')
    }
    scrollto(this.hash)
  }
}, true)

const scrollto = (el) => {
  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos,
    behavior: 'smooth'
  })
}
/* to Auto hide the NavBar */
const topNavEl = document.querySelector('#header');

const toggleNavbarBackground = () => {
  const scrollPosition = window.scrollY;
  const threshold = 200; // Adjust this value as needed

  if (scrollPosition > threshold) {
    topNavEl.classList.add('active');
  } else {
    topNavEl.classList.remove('active');
  }
};

window.addEventListener('scroll', toggleNavbarBackground);



/* const homeLink = document.querySelector('#navtable > li > a[href="damen-friseur.html"]');
const submenu = document.querySelector('#navtable > li > .submenu');
const newPageButton = document.querySelector('.new-page-btn');

homeLink.addEventListener('click', function (event) {
  event.preventDefault();
  submenu.classList.toggle('active');
});
 */
var tableHome = document.querySelector('.table-home');
var submenuArrow = tableHome.querySelector('.submenu-arrow');

tableHome.addEventListener('mouseenter', function () {
  submenuArrow.style.transition = 'transform 0.5s';
  submenuArrow.style.transform = 'rotate(48deg)';
});

tableHome.addEventListener('mouseleave', function () {
  submenuArrow.style.transition = 'transform 0.5s';
  submenuArrow.style.transform = 'rotate(224deg)';
});




})()