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

  /************************************ About Slider ************************************/
  var aboutSwiper = new Swiper(".about-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    // loop: true,
    pagination: {
      el: ".about-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  Fancybox.bind("[data-fancybox]");
});
