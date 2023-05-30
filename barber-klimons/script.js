
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
const typed = select('.typed')
if (typed) {
  let typed_strings = typed.getAttribute('data-typed-items')
  typed_strings = typed_strings.split(',')
  let typed_back_strings = typed.getAttribute('data-typed-backstrings')
  typed_back_strings = typed_back_strings.split(',')
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 30,
    backSpeed: 20,
    backDelay: 4000,
    backStrings: typed_back_strings
  });
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

})()