// ! Navbar
var click = 0;
$("#nav-btn").click(function () {
  if (click % 2 == 0) {
    $("#header").addClass("nav-clicked");
  } else {
    $("#header").removeClass("nav-clicked");
  }
  click++;
});

// ! Arrows
$(function() {

  setTimeout(function() {

    setInterval(function() {
      // Move left
      $('#btn-left').removeClass('btn-outline-dark').addClass('btn-dark');
      $('#btn-right').addClass('btn-outline-dark').removeClass('btn-dark');

      setTimeout(function() {
        // Move right
        $('#btn-left').addClass('btn-outline-dark').removeClass('btn-dark');
        $('#btn-right').removeClass('btn-outline-dark').addClass('btn-dark');

        setTimeout(function() {
          // Move left
          $('#btn-left').removeClass('btn-outline-dark').addClass('btn-dark');
          $('#btn-right').addClass('btn-outline-dark').removeClass('btn-dark');
        }, 4000)

      }, 2000)


    }, 8000);

  }, 0);

});

// ! Space
$(function() {

  setTimeout(function() {

    setInterval(function() {
      $('#btn-space').removeClass('btn-outline-dark').addClass('btn-dark');

      setTimeout(function() {
        $('#btn-space').addClass('btn-outline-dark').removeClass('btn-dark');
      }, 500);

    }, 2000);

  }, 1700);

});