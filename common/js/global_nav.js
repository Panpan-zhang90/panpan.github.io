// JavaScript Document
$(function () {
	$('.toggle').click(function () {
		$('.drawer-inner').toggleClass('active');
		$(this).toggleClass("active");
		if ($(this).hasClass('active')) {
			$('.global_nav').addClass('active');
		} else {
			$('.global_nav').removeClass('active');
		}
	});
	$('.nav_li').click(function () {
		$('.global_nav').removeClass('active');
		$('.toggle').removeClass('active');
	});
});