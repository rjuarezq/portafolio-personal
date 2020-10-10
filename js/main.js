(function($) {
  "use strict";

  // Sticky Nav
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
      $(".scrolling-navbar").addClass("top-nav-collapse");
    } else {
      $(".scrolling-navbar").removeClass("top-nav-collapse");
    }
  });

  /* 
   One Page Navigation & wow js
   ========================================================================== */
  //Initiat WOW JS
  new WOW().init();

  // one page navigation
  $(".main-navigation").onePageNav({
    currentClass: "active"
  });

  $(window).on("load", function() {
    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 195
    });

    $(window).on("scroll", function() {
      if ($(window).scrollTop() > 200) {
        $(".fixed-top").addClass("menu-bg");
      } else {
        $(".fixed-top").removeClass("menu-bg");
      }
    });
  });

  // Slick Nav
  $(".mobile-menu").slicknav({
    prependTo: ".navbar-header",
    parentTag: "span",
    allowParentLinks: true,
    duplicate: false,
    label: ""
  });

  /* 
   MixitUp
   ========================================================================== */
  $("#portfolio").mixItUp();

  /* 
   Sticky Nav
   ========================================================================== */
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 200) {
      $(".header-top-area").addClass("menu-bg");
    } else {
      $(".header-top-area").removeClass("menu-bg");
    }
  });

  /* 
   SMOOTH SCROLL
   ========================================================================== */
  var scrollAnimationTime = 1200,
    scrollAnimation = "easeInOutExpo";

  $("a.scrollto").on("bind", "click.smoothscroll", function(event) {
    event.preventDefault();
    var target = this.hash;

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        scrollAnimationTime,
        scrollAnimation,
        function() {
          window.location.hash = target;
        }
      );
  });

  /* 
   Back Top Link
   ========================================================================== */
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $(".back-to-top").fadeIn(400);
    } else {
      $(".back-to-top").fadeOut(400);
    }
  });

  $(".back-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      600
    );
    return false;
  });

  /* Nivo Lightbox
  ========================================================*/

  $(".lightbox").nivoLightbox({
    effect: "fadeScale",
    keyboardNav: true
  });

  /* stellar js
  ========================================================*/
  $.stellar({
    horizontalScrolling: true,
    verticalOffset: 40,
    responsive: true
  });

  /* 
   Page Loader
   ========================================================================== */
  $("#loader").fadeOut();
})(jQuery);
