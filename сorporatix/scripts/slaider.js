$(function() {
	var imgLength = $('.slaider img').length-1;
	var imgWigth = $('.slaider img').width();
	var animated = false;
	var position;
	function End() {
		animated= false;
	}
	$('.arrow').click(function (e) {
		e.preventDefault();
		if (animated) return;
		position = parseInt($('.slaider').css('marginLeft'));
		animated = true;

		if($(this).hasClass('next')) {
			if(position === - imgWigth*imgLength) {
				$('.slaider')
					.animate({'marginLeft': position + imgWigth * imgLength}, 1000, End);
			} else {
				$('.slaider')
					.animate({'marginLeft': position - imgWigth}, 1000, End);
			}
		} else if($(this).hasClass('pref')) {
			if(position === 0) {
				$('.slaider')
					.animate({'marginLeft': position - imgWigth * imgLength}, 1000, End);
			} else {
				$('.slaider')
					.animate({'marginLeft': position + imgWigth}, 1000, End);
			}
		}
	});
	setInterval(function(){
		$('.arrow.next').click();
	}, 5000);
});