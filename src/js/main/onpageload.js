$(document).ready(function () {
    'use strict';

    $('ul.sf-menu').superfish();

    // generates content for sidebar-menu
    var social = '<ul class="social">' + $('ul.social').html() + '</ul>';
    var close = '<a class="back" href="#"><i class="ion-arrow-left-c"></i></a>';
    var menu = $('#nav-main').html();
    $('.sidebar-menu').html(social + menu + close);

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

});