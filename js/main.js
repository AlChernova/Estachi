/* плавный скролл */
SmoothScroll({ frameRate : 350, animationTime : 800 })

var heightHeader;

$(function(){
	heightHeader = $('header').height();
	//console.log(heightHeader);
	
	$('.btn_mob_link_menu').click(function(){
		$('.mainmenu').slideToggle();
		$(this).toggleClass('active');
	});
	
	var _close = $('<div class="close"><span></span><span></span></div>');
	//console.log(_close);
	$('.link_popup').click(function(){
		_this = $(this);
		link_id = _this.attr('href');
		$(link_id).append(_close).fadeIn(300);
		if(screen.width < '768') {
			$('body').css({'overflow': 'hidden'});
		}
		return false;
	});

	_close.click(function(){
		$(this).closest('.box_popup').fadeOut(200).remove('.close');
		if(screen.width < '768') {
			$('body').css({'overflow': 'auto'});
		}
	});
	
	if($('div').is('#fullpage')) {
		$('footer').addClass('pos_abs');
	}
});

$(window).resize(function(){
	heightHeader = $('header').height();
});