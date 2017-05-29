//auto generate sidebar menu
(function () {
  'use strict';
  $('ul.sf-menu').superfish();
  var social = '<ul class="social">' + $('ul.social').html() + '</ul>';
  var close = '<a class="back" href="#"><i class="ion-arrow-left-c"></i></a>';
  var menu = $('#nav-main').html();
  $('.sidebar-menu').html(social + menu + close);
  $('.toggle-bar a').click(function(){
    $('body').addClass('menu-open');
    $('.sidebar-menu').attr('style','transition: left .4s ease-in-out');
    $('.content-wrapper').attr('style','transition: transform .4s ease-in-out');
  });
  $('.sidebar-menu .back').click(function(){
    $('body').removeClass('menu-open');
    $('.sidebar-menu').attr('style','transition: left .5s ease-in-out');
    $('.content-wrapper').attr('style','transition: transform .5s ease-in-out');
  });

})();