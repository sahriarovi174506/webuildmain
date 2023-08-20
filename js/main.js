(function ($) {
	"use strict";
	$(document).on("ready", function () {
		$(".blogSlider").slick({
			arrows: true,
			infinite: true,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 1168,
					settings: {
						slidesToShow: 2,
					},
        },
				{
					breakpoint: 766,
					settings: {
						slidesToShow: 1,
					},
        },
      ],
		});

		$(".Slider_active").slick({
			arrows: true,
			infinite: true,
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 1168,
					settings: {
						slidesToShow: 2,
					},
        },
				{
					breakpoint: 876,
					settings: {
						centerMode: false,
						slidesToShow: 2,
					},
        },
				{
					breakpoint: 499,
					settings: {
						centerMode: false,
						slidesToShow: 1,
					},
        },
      ],
		});
		// testimonial Slider
		$(".testimonial_slider").slick({
			arrows: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
		});

		// preloader
		$(".js-preloader").preloadinator({
			minTime: 1200,
		});

		/** code by webdevtrick ( https://webdevtrick.com ) **/
		$(function () {
			$('.list-heading').on('click', function (e) {
				e.preventDefault();
				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
					$(this).next()
						.stop()
						.slideUp(300);
				} else {
					$(this).addClass('active');
					$(this).next()
						.stop()
						.slideDown(300);
				}
			});
		});
	});
})(jQuery);
