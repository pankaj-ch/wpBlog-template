(function ($, window, document, undefined) {
  'use strict';

  var imageResize = function () {
    $('.bg-img').each(function () {
      var a = $(this).width() / $(this).height();
      var b = $(this).parent().width() / $(this).parent().height();
      (a > b) ? $(this).attr('style', 'height:100%'): $(this).attr('style', 'width:100%');
    });
  };

  // adding blank div to document for dynamic content
  $('body').prepend('<div class="sidebar-menu"></div>');
  $('body').append('<div class="overlay"></div>');
  $('.top-nav').prepend('<div class="toggle-bar"></div>');
  $('.search').append('<i class="ion-close-round"></i>');

  // generates content for sidebar-menu
  var social = '<ul class="social">' + $('ul.social').html() + '</ul>',
    close = '<a class="back" href="#"><i class="ion-arrow-left-c"></i></a>',
    logo = $('header .head-logo').html(),
    post_links = $('header .head-nav').html(),
    menu = $('#nav-main').html();
  $('.sidebar-menu').html(social + menu + close);

  $('.content-wrapper').prepend('<div class="fixed-nav"><div class="toggle-bar"></div><div class="container">' + logo + menu + '</div></div>');
  $('.footer-top').prepend('<div class="col-md-4">' + logo + '</div>');
  $(social).insertBefore('.footer-nav');
  $('footer .head-nav').append(post_links);


  // opens sidebar-menu
  $('.toggle-bar').click(function () {
    $('body').addClass('menu-open');
  });

  // Closes sidebar menu
  $('.sidebar-menu .back, .overlay').click(function () {
    $('body').removeClass('menu-open');
  });


  $('.search .ion-close-round').click(function (e) {
    $('.search').removeClass('active');
    e.stopPropagation();
  });
  $('.search').click(function () {
    $('.search').addClass('active');
  });

  var lastScrollTop = 0;
  $(window).on('scroll', function () {
    var st = $(this).scrollTop();
    (st < lastScrollTop && st > 300) ? $('.fixed-nav').attr('style', 'top:-1px'): $('.fixed-nav').removeAttr('style');
    $('body').hasClass('menu-open') && $('.fixed-nav').removeAttr('style');
    lastScrollTop = st;
  });

  $('.fixed-nav .toggle-bar').click(function () {
    $('.fixed-nav').removeAttr('style');
  });


  $(document).ready(function () {
    // Dynamically change proportions of background
    imageResize();
    $(window).resize(imageResize);

    // initializing sf menu after replicating it in sidebar menu
    $('.post-carousel .owl-carousel').owlCarousel({
      nav: true,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        998: {
          items: 2
        },
        1370: {
          items: 3
        }
      }
    });
    if (window.innerWidth >= 768) {
      $('.full-carousel .owl-carousel').owlCarousel({
        nav: true,
        loop: true,
        margin: 10,
        autoWidth: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
      });
    }
  });

})(window.jQuery || window.Zepto, window, document);