document.addEventListener('DOMContentLoaded', function() {
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  const loadingSpinnerContainer = document.querySelector('.loading-spinner-container');
  const contentContainer = document.querySelector('#content');

/* COOKIES */
// Function to set the cookie with a specific expiration date
if (window.location.pathname === "/index.html") {
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  // Function to handle the user's choice
  function handleCookieChoice(choice) {
    if (choice === "accept") {
      setCookie("cookies_accepted", "true", 3); // Set the cookie to indicate acceptance for 1 year
    } else if (choice === "decline") {
      // Handle the decline choice (e.g., disable specific functionality)
    }
    // Remove the cookie banner from the page
    var cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "none";
  }

  // Event listeners for the accept and decline buttons
  var acceptButton = document.getElementById("accept-cookies");
  var declineButton = document.getElementById("decline-cookies");

  acceptButton.addEventListener("click", function() {
    handleCookieChoice("accept");
  });

  declineButton.addEventListener("click", function() {
    handleCookieChoice("decline");
  });

  // Function to check if the cookies were previously accepted
  function areCookiesAccepted() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].split("=");
      if (cookie[0] === "cookies_accepted" && cookie[1] === "true") {
        return true; // Cookies were accepted
      }
    }
    return false; // Cookies were not accepted or cookie not found
  }
} else {
  var cookieBanner = document.getElementById("cookie-banner");
  cookieBanner.style.display = "none";
}
// Check if cookies were previously accepted on page load
window.addEventListener("load", function() {
  if (areCookiesAccepted()) {
    // Enable specific functionality that relies on cookies
  } else {
    // Disable or adjust functionality that relies on cookies
  }
});
  // Hide the content container initially
  contentContainer.style.display = 'none';
  // Show the loading spinner container
  loadingSpinnerContainer.style.display = 'flex';
  // Hide the loading spinner container and show the content container when the page finishes loading
  window.addEventListener('load', function() {
    loadingSpinnerContainer.style.display = 'none';
    contentContainer.style.display = 'block';
  });
  const loadContent = function(url, placeholder) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        placeholder.innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  };
  loadContent('header.html', navbarPlaceholder);
  loadContent('footer.html', footerPlaceholder);
  const welcomeEl = document.querySelector('.welcome');
  const topNavEl = document.querySelector('.top-nav');
  const toggleNavbarBackground = () => {
    const scrollPosition = welcomeEl.scrollTop;
    const threshold = 300; // Adjust this value as needed

    if (scrollPosition > threshold) {
      topNavEl.classList.add('active');
    } else {
      topNavEl.classList.remove('active');
    }
  };
  welcomeEl.addEventListener('scroll', toggleNavbarBackground);
  var swiper = new Swiper('.quote-card', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000, // Set the delay to 10000 milliseconds (10 seconds)
      disableOnInteraction: false, // Continue autoplay even if the user interacts with the slider
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const faq = document.querySelector('.faq')
  faq.addEventListener('click', event => {
	const question = event.target.closest('.faq__question')
	if (!question) return
	const answer = question.nextElementSibling
	// hide previously opened answer and show the clicked answer
	const currentAnswer = faq.querySelector('.faq__answer[aria-hidden="false"]')
	if (currentAnswer === answer) {
		// close the already open answer
		answer.setAttribute('aria-hidden', 'true')
		answer.parentNode.classList.remove('faq__item--expanded')
		question.setAttribute('aria-expanded', 'false')
	} else {
		// hide previously open answer and show the clicked answer
		if (currentAnswer) {
			currentAnswer.setAttribute('aria-hidden', 'true')
			currentAnswer.parentNode.classList.remove('faq__item--expanded')
			currentAnswer.previousElementSibling.setAttribute(
				'aria-expanded',
				'false'
			)
		}
		answer.setAttribute('aria-hidden', 'false')
		answer.parentNode.classList.add('faq__item--expanded')
		question.setAttribute('aria-expanded', 'true')
	}
})
});
function toggleMobileMenu() {
  const menu = document.getElementById('hamburger-icon');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menu.classList.contains('open')) {
    menu.classList.remove('open');
    menu.classList.add('close');
    mobileMenu.style.display = 'none'; // Hide the mobile menu
  } else {
    menu.classList.remove('close');
    menu.classList.add('open');
    mobileMenu.style.display = 'flex'; // Show the mobile menu
  }
}



window.addEventListener('scroll', function() {
  var lines = document.querySelectorAll('.line');
  var steps = document.querySelectorAll('.step');
  var windowHeight = document.documentElement.clientHeight + 200;

  lines.forEach(function(line, index) {
    var step = steps[index];
    var sectionTop = step.offsetTop;
    var sectionHeight = step.offsetHeight;

    var scrollTop = window.scrollY + windowHeight / 5;

    // Calculate the scroll position relative to the section
    var scrollPosition = scrollTop - sectionTop;

    // Ensure the scroll position is within the section
    if (scrollPosition >= 0 && scrollPosition <= sectionHeight) {
      line.style.height = scrollPosition + 'px';
    } else if (scrollPosition < 0) {
      // Hide the line if scrolling above the section
      line.style.height = '0';
    } else if (scrollPosition > sectionHeight) {
      console.log(sectionHeight)
      // Set the line's height to the section height when scrolling beyond the section
      line.style.height =  sectionHeight+ 20 +'px';
    }
  });
  window.addEventListener('scroll', function() {
    var cards = document.querySelectorAll('.card');
  
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var cardTopPosition = card.getBoundingClientRect().top;
  
      if (cardTopPosition - window.innerHeight <= 0) {
        card.classList.add('slide-in');
      }
    }
  });
  
});
