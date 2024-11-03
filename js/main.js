$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  lazyLoad();
  /************************************ Fixed Header ************************************/
  $(this).scrollTop() >= 50
    ? $("header").addClass("fixed")
    : $("header").removeClass("fixed ");
  $(window).scroll(function () {
    $(this).scrollTop() >= 50
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });
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
  /************************************ Coupon ************************************/
  $(".coupon-trigger button").click(function (e) {
    e.preventDefault();
    $(".cart-coupon").slideDown();
  });
});
