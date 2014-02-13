
var $icons = $('.icons img');






$('.icons-section').waypoint(function () {
  	$icons.eq(0).addClass('js-ship-delay-3');
   	$icons.eq(2).addClass('js-ship-delay-1');
    $icons.eq(3).addClass('js-ship-delay-2');
		$icons.addClass('js-ships-animate');
}, { offset: ' 60% '});