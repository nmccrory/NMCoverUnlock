$(document).ready(function(){
	var leftCover = $("#leftCover");
	var rightCover = $("#rightCover");
	var coverOverlay = $("#coverOverlay");
	var wolf = $("#wolf");

	var tl = new TimelineMax();


	tl.to(wolf, 0.7, {rotation: 360, ease: Power4.ease}, 0.3)
	tl.to(leftCover, 1.5, {xPercent: -110, ease: Power4.easeOut}, 1.0)
	tl.to(rightCover, 1.5,{ xPercent: 110, ease: Power4.easeOut}, 1.0)
	coverOverlay.delay(900).fadeOut("slow")

	$(".windowWrapper h1").delay(1550).fadeIn()
})