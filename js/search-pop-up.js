(function ($) {
	"use strict";
	// Page Loaded...
	$(document).ready(function () {
		/*==========  Search  ==========*/
		function positionSearch() {
			if ($(window).width() > $(window).height()) {
				var windowWidth = $(window).width();
				$('.search-overlay').css({'width': windowWidth*2.5, 'height': windowWidth*2.5});
			} else {
				var windowHeight = $(window).height();
				$('.search-overlay').css({'width': windowHeight*2.5, 'height': windowHeight*2.5});
			}
			var position = $('.header-open-search').offset();
			var height = $('.header-open-search').height();
			var width = $('.header-open-search').width();
			var top = position.top + height/2 - $('.search-overlay').outerHeight()/2;
			var left = position.left - width/2 - $('.search-overlay').outerWidth()/2;
			$('.search-overlay').css({'top': top, 'left': left});
		}
		positionSearch();
		$(window).on('resize', function() {
			positionSearch();
		});
		$('.open-search').on('click', function(event) {
			event.preventDefault();
			$('.search-overlay').addClass('scale');
			$('.search').addClass('open');
		});
		$('.search-close').on('click', function(event) {
			event.preventDefault();
			$('.search-overlay').removeClass('scale');
			$('.search').removeClass('open');
		});
	});
/*-----------------------------------------------------------------------------------*/
/*	ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
var $container = $('.portfolio-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
     });
});
    $('.filter li a').click(function () {
        $('.filter li a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
});
})(jQuery);
