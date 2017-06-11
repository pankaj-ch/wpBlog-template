jQuery(document).ready(function () {
	'use strict';
	//dynamically change proportions of background 
	jQuery('.bg-img').on('load').each(function () {
		imageResize(jQuery(this));
	});
	jQuery(window).resize(function () {
		jQuery('.bg-img').each(function () {
			imageResize(jQuery(this));
		});
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

	jQuery('.owl-carousel').owlCarousel({
		nav: true,
		loop: true,
		margin: 10,
		// autoplay: true,
		// autoplayTimeout: 4000,
		// autoplayHoverPause: true,
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
});