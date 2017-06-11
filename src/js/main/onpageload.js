jQuery(document).ready(function () {
    'use strict';
    //dynamically change proportions of background 
    jQuery('.bg-img').one('load').each(function () {
        var a = jQuery(this).width() / jQuery(this).height(),
            b = jQuery(this).parent().width() / jQuery(this).parent().height();
        if (a < b) {
            jQuery(this).attr('style', 'width:100%');
        } else {
            jQuery(this).attr('style', 'height:100%');
        }
    });

    // generates content for sidebar-menu
    var social = '<ul class="social">' + jQuery('ul.social').html() + '</ul>',
    close = '<a class="back" href="#"><i class="ion-arrow-left-c"></i></a>',
    menu = jQuery('#nav-main').html();
    jQuery('.sidebar-menu').html(social + menu + close);

    // opens sidebar-menu
    jQuery('.toggle-bar').click(function () {
        jQuery('body').addClass('menu-open');
    });

    // Closes sidebar menu
    jQuery('.sidebar-menu .back, .overlay').click(function () {
        jQuery('body').removeClass('menu-open');
    });

    // initializing sf menu after replicating it in sidebar menu
    jQuery('ul.sf-menu').superfish();

    jQuery('.search .ion-close-round').click(function (e) {
        jQuery('.search').removeClass('active');
        e.stopPropagation();
    });
    jQuery('.search').click(function () {
        jQuery('.search').addClass('active');
    });

});