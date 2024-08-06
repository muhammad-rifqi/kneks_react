$(document).ready(function () {
	"use strict";
	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").on("click", function () {
			var target = $(this).attr("data-target");
			$("html, body").animate({
				scrollTop: $(target).offset().top,
			},
				1000
			);
			return false;
		});
	}

	// mobile nav
	if ($('.mobile-nav-wrapper').length) {
		$('.mobile-nav-toggler').on('click', function () {
			$('.mobile-nav-wrapper').toggleClass('expanded')
			$('body').toggleClass('locked')
		})
		var menu_content = $('.main-menu .navigation ul')[0].outerHTML
		$('.mobile-nav-container').html(menu_content)
		$('.mobile-nav-container .main-menu-list li.has-dropdown > a').append('<button><i class="fa-solid fa-chevron-right"></i></button>')
		$('.mobile-nav-container .main-menu-list li.has-dropdown > a button').on('click', function () {
			$(this).toggleClass('expanded')
			$(this).parents('a').siblings('ul').slideToggle()
		})
	}
	if ($('.main-slider-swiper').length) {
		$('.main-slider-swiper').owlCarousel({
			loop: true,
			autoplay: true,
			nav: true,
			items: 1,
			dots: false,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>']
		})
	}
	if ($('.main-slider-two-swiper-x').length) {
		$('.main-slider-two-swiper-x').owlCarousel({
			loop: true,
			nav: true,
			items: 1,
			dots: false,
			navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>']
		})
	}
	if ($('.counter-number').length) {
		$('.counter-number').counterUp({
			delay: 10,
			time: 1000
		});
	}
	if ($(".search-toggler").length) {
		$(".search-toggler").on("click", function (e) {
			e.preventDefault();
			// $(".search-popup").removeClass("active");
			$(".information-popup").removeClass("active");
			$(".mobile-nav-wrapper").removeClass("expanded");
			// $("body").toggleClass("locked");
			$("body").removeClass("locked");
		});
		$(".btn-close").on("click", function (e) {
			e.preventDefault();
			// $(".search-popup").removeClass("active");
			$(".information-popup").removeClass("active");
			$(".mobile-nav-wrapper").removeClass("expanded");
			// $("body").toggleClass("locked");
			$("body").removeClass("locked");
		});
	}
	if ($(".daftar-toggler").length) {
		$(".daftar-toggler").on("click", function (e) {
			e.preventDefault();
			// $(".search-popup").removeClass("active");
			$(".information-popup").toggleClass("active");
			$(".mobile-nav-wrapper").removeClass("expanded");
			// $("body").toggleClass("locked");
			$("body").removeClass("locked");
		});
		$(".btn-close").on("click", function (e) {
			e.preventDefault();
			// $(".search-popup").removeClass("active");
			$(".information-popup").removeClass("active");
			$(".mobile-nav-wrapper").removeClass("expanded");
			// $("body").toggleClass("locked");
			$("body").removeClass("locked");
		});
	}
	$(function () {
		$('.video-popup, .video-popup').YouTubePopUp({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	$(function () {
		new VenoBox({
			selector: '.my-image-links',
			numeration: true,
			infinigall: true,
			share: true,
			spinner: 'swing',
			spinColor: '#5A8DEE',
			titlePosition: 'bottom',
			toolsColor: '#ffffff',
			titleattr: 'data-title',
			titleStyle: 'block'

		});
	});
	$(function () {
		new VenoBox({
			selector: '.my-image-links-foto',
			numeration: true,
			infinigall: true,
			share: true,
			spinner: 'swing',
			spinColor: '#5A8DEE',
			titlePosition: 'bottom',
			toolsColor: '#ffffff',
			titleattr: 'data-title',
			titleStyle: 'block'

		});
	});
	$(function () {
		new VenoBox({
			selector: '.beritaDetail',
			numeration: true,
			infinigall: true,
			share: true,
			spinner: 'swing',
			spinColor: '#5A8DEE',
			titlePosition: 'bottom',
			toolsColor: '#ffffff',
			titleattr: 'data-title',
			titleStyle: 'block'

		});
	});
	$(window).on("scroll", function () {
		if ($(".sticky-header").length) {
			var headerScrollPos = 230;
			var stricky = $(".sticky-header");
			if ($(window).scrollTop() > headerScrollPos) {
				setTimeout(function () {
					stricky.addClass("sticky-fixed");
				}, 100)
				stricky.addClass("sticky-header--cloned");
			} else if ($(this).scrollTop() <= headerScrollPos) {
				stricky.removeClass("sticky-fixed");
				stricky.removeClass("sticky-header--cloned");
			}
		}
		if ($(".scroll-to-top").length) {
			var strickyScrollPos = 100;
			if ($(window).scrollTop() > strickyScrollPos) {
				$(".scroll-to-top").fadeIn(500);
			} else if ($(this).scrollTop() <= strickyScrollPos) {
				$(".scroll-to-top").fadeOut(500);
			}
		}
	});
	// Owl Carousel
	if ($(".portfolio-carousel").length) {
		var owl = $(".portfolio-carousel");
		owl.owlCarousel({
			items: 4,
			nav: false,
			margin: 30,
			loop: true,
			autoplay: true,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1,
				},
				575: {
					items: 2,
				},
				767: {
					items: 3,
				},
				991: {
					items: 4,
				}
			}
		});
	}
	// Owl Carousel
	if ($(".portfolio-two-carousel").length) {
		var owl = $(".portfolio-two-carousel");
		owl.owlCarousel({
			items: 4,
			nav: false,
			margin: 30,
			loop: true,
			dots: false,
			autoplay: true,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1,
				},
				575: {
					items: 2,
				},
				767: {
					items: 2,
				},
				991: {
					items: 3,
				}
			}
		});
	}
	// Owl Carousel
	if ($(".client-carousel").length) {
		var owl = $(".client-carousel");
		owl.owlCarousel({
			items: 1,
			nav: false,
			margin: 80,
			loop: true,
			autoplay: true,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1,
				},
				375: {
					items: 2,
				},
				767: {
					items: 3,
				},
				991: {
					items: 4,
				},
				1199: {
					items: 5
				}
			}
		});
	}
	// Owl Carousel
	if ($(".event-details-carousel").length) {
		var owl = $(".event-details-carousel");
		owl.owlCarousel({
			items: 3,
			nav: false,
			loop: true,
			margin: 10,
			autoplay: true,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1,
				},
				767: {
					items: 2
				},
				1199: {
					items: 3
				}
			}
		});
	}
	if ($('.testimonial-thumb').length) {
		var review_thumb = new Swiper(".testimonial-thumb", {
			slidesPerView: 3,
			spaceBetween: 0,
		})
	}
	if ($('.testimonial-reviews').length) {
		var review_swiper = new Swiper(".testimonial-reviews", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 60,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			thumbs: {
				swiper: review_thumb,
			},
		})
	}
	if ($('.author-thumb-carousel').length) {
		var review_two_thumb = new Swiper(".author-thumb-carousel", {
			slidesPerView: 3,
			spaceBetween: 0,
			// allowTouchMove: false,
		})
	}
	if ($('.author-review-carousel').length) {
		var review_two_swiper = new Swiper(".author-review-carousel", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 60,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			thumbs: {
				swiper: review_two_thumb,
			},
		})
	}
	if ($('.responsive-map').length) {
		var window_width = $(window).width();
		$('.responsive-map').each(function () {
			var this_column = $(this);
			var section_width = this_column.closest('.container').width();
			var extra_width = ((window_width - section_width) / 2);
			var column_width = $(this).width();
			var total_width = column_width + extra_width
			$(this).css('width', total_width + 'px')
		})
	}

	if ($('.count-box').length) {
		$('.count-box').appear(function () {
			var el = $(this);
			var percent = el.data("percentage");
			$(el).css("width", percent)
			$(el).find('.count-text').html(percent)
		}, {
			accY: 0
		});
	}
	if ($('.accordian-box').length) {
		$('.accordian-box-item .accordian-content').hide()
		$('.accordian-box-item.active .accordian-content').show()
		$('.accordian-title').on('click', function () {
			$('.accordian-title').siblings('.accordian-content').stop().slideUp()
			$(this).siblings('.accordian-content').stop().slideDown()
			$('.accordian-box-item').removeClass('active')
			$(this).parent().addClass('active')
		})
	}
});
if ($(".contact-form-validated").length) {
	$(".contact-form-validated").validate({
		// initialize the plugin
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			},
			subject: {
				required: true
			}
		},
		submitHandler: function (form) {
			// sending value with ajax request
			$.post(
				$(form).attr("action"),
				$(form).serialize(),
				function (response) {
					$(form).parent().find(".result").append(response);
					$(form).find('input[type="text"]').val("");
					$(form).find('input[type="email"]').val("");
					$(form).find("textarea").val("");
				}
			);
			return false;
		}
	});
}
$(window).on('load', function () {
	$('body').addClass('loaded');
});

$(document).ready(function () { new ApexCharts(document.querySelector("#payment-records-chart"), { chart: { height: 380, width: "100%", stacked: !1, toolbar: { show: !1 } }, stroke: { width: [1, 2, 3], curve: "smooth", lineCap: "round" }, plotOptions: { bar: { endingShape: "rounded", columnWidth: "30%" } }, colors: ["#3454d1", "#a2acc7", "#E1E3EA"], series: [{ name: "Payment Rejected", type: "bar", data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 21] }, { name: "Payment Completed", type: "line", data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 41] }, { name: "Awaiting Payment", type: "bar", data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 56] }], fill: { opacity: [.85, .25, 1, 1], gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: .5, opacityTo: .1, stops: [0, 100, 100, 100] } }, markers: { size: 0 }, xaxis: { categories: ["JAN/23", "FEB/23", "MAR/23", "APR/23", "MAY/23", "JUN/23", "JUL/23", "AUG/23", "SEP/23", "OCT/23", "NOV/23", "DEC/23"], axisBorder: { show: !1 }, axisTicks: { show: !1 }, labels: { style: { fontSize: "10px", colors: "#A0ACBB" } } }, yaxis: { labels: { formatter: function (e) { return +e + "K" }, offsetX: -5, offsetY: 0, style: { color: "#A0ACBB" } } }, grid: { xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !1 } } }, dataLabels: { enabled: !1 }, tooltip: { y: { formatter: function (e) { return +e + "K" } }, style: { fontSize: "12px", fontFamily: "Inter" } }, legend: { show: !1, labels: { fontSize: "12px", colors: "#A0ACBB" }, fontSize: "12px", fontFamily: "Inter" } }).render() })