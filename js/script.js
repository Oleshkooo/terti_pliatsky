let click = 0;
$("#nav-btn").click(function () {
  if (click%2==0) {
    $("#header").addClass("nav-clicked");
  }
  else {
    $("#header").removeClass("nav-clicked");
  }
  click++;
});
