// JavaScript Document

$(function() {
	var $win = $(window),
		$main = $('body'),
		$nav = $('.toggle'),
		navHeight = $nav.outerHeight(),
		navPos = $nav.offset().top,
		fixedClass = 'is-fixed';
  
	$win.on('load scroll', function() {
	  var value = $(this).scrollTop();
	  if ( value > navPos ) {
		$nav.addClass(fixedClass);
		$main.css('padding-top', navHeight);
	  } else {
		$nav.removeClass(fixedClass);
		$main.css('padding-top', '0');
	  }
	});
  });