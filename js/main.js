$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  lazyLoad();
  /************************************ Navbar ************************************/
  $(".menu-btn").click(function () {
    if ($(".nav-section").is(":visible")) {
      $("body").removeClass("overflow opend_nav");
      setTimeout(function () {
        $(".nav-section").hide();
      }, 500);
    } else {
      $(".nav-section").show();
      setTimeout(function () {
        $("body").addClass("overflow opend_nav");
      }, 1);
    }
  });
});
