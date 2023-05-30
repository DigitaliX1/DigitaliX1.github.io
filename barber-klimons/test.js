function goToWomenHomePage() {
    var container = document.querySelector('.container');
    container.classList.add('button-flip', 'flip-right');
  
    // Load the content of women.html and show it in .next-page
    $.ajax({
      url: 'women.html',
      success: function (data) {
        var nextPage = $('.next-page');
        nextPage.html(data);
        nextPage.addClass('flip-right');
  
        setTimeout(function () {
          nextPage.removeClass('flip-right');
        }, 0);
      },
      error: function () {
        console.log('Failed to load women.html');
      }
    });
  
    setTimeout(function () {
      window.location.href = "women.html";
    }, 0);
  }
  
  function goToMenHomePage() {
    var container = document.querySelector('.container');
    container.classList.add('button-flip', 'flip-left');
  
    // Load the content of men.html and show it in .next-page
    $.ajax({
      url: 'men.html',
      success: function (data) {
        var nextPage = $('.next-page');
        nextPage.html(data);
        nextPage.addClass('flip-left');
  
        setTimeout(function () {
            container.style.display = 'block';
          nextPage.removeClass('flip-left');
        }, 0);
      },
      error: function () {
        console.log('Failed to load men.html');
      }
    });
  
    setTimeout(function () {
      window.location.href = "men.html";
    }, 0);
  }
  