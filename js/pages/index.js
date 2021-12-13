$(document).ready(function() {

    if(screen.width < '768' ) {
        //if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) && screen.width < '768' ) {
        // NE podklyuchaem plagin
        //
    } else {
        $('#fullpage').fullpage({
            anchors:['page0', 'page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
            navigationTooltips: ['', 'Территория мечты', 'Концепция проекта', 'Расположение', 'Коммуникации', 'Инфраструктура', 'Дороги и транспорт', 'Экосистема'],
            navigation: true,
            navigationPosition: 'right',
            verticalCentered: true,
            resize: false,
            showActiveTooltip: true,
			loopHorizontal: false,
			controlArrows: true,
			// точки слайдов внутри секций 
			//slidesNavigation: true,
	        //slidesNavPosition: 'bottom',
			
			afterLoad: function(anchorLink, index){
            	var loadedSection = $(this);
				
				var usl_w = ( 
					$(".s1").hasClass('active') || 
					$(".s2").hasClass('active') && $(".s2 .first_slide").hasClass('active') ||
					$(".s4").hasClass('active') && $(".s4 #full-commn2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 .first_slide").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road3").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco1").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco4").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco5").hasClass('active') 
				);

				var usl_w768 = ( 
					$(".s1").hasClass('active') || 
					$(".s4").hasClass('active') && $(".s4 #full-commn2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road3").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco1").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco4").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco5").hasClass('active') 
				);
				
				if (usl_w == true) {
					$('#fp-nav').addClass('white');
				} else {
					$('#fp-nav').removeClass('white');
				}
				
				/*if (usl_w768 == true && $(window).width() < 1000) {
					$('#fp-nav').addClass('white');
				} else {
					$('#fp-nav').removeClass('white');
				}*/
				/*if(screen.width >= '1000') {
					if (index == 1 || index == 4 || index == 5 || index == 6 || index == 8) {
						$('#fp-nav').removeClass('white');
					} else {
						$('#fp-nav').addClass('white');
					}
				} else {
					if (index == 1 || index == 3 || index == 4 || index == 5 || index == 6 || index == 7 || index == 8) {
						$('#fp-nav').removeClass('white');
					} else {
						$('#fp-nav').addClass('white');
					}
				}*/
			},
			
			afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
            	var loadedSlide = $(this);
		
				var usl_w = ( 
					$(".s1").hasClass('active') || 
					$(".s2").hasClass('active') && $(".s2 .first_slide").hasClass('active') ||
					$(".s4").hasClass('active') && $(".s4 #full-commn2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 .first_slide").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road3").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco1").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco4").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco5").hasClass('active') 
				);
				var usl_w768 = ( 
					$(".s1").hasClass('active') || 
					$(".s4").hasClass('active') && $(".s4 #full-commn2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road2").hasClass('active') ||
					$(".s6").hasClass('active') && $(".s6 #full-road3").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco1").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco4").hasClass('active') ||
					$(".s7").hasClass('active') && $(".eco5").hasClass('active') 
				);
				
				if (usl_w == true) {
					$('#fp-nav').addClass('white');
				} else {
					$('#fp-nav').removeClass('white');
				}
				
				/*if (usl_w768 == true && $(window).width() < 1000) {
					$('#fp-nav').addClass('white');
				} else {
					$('#fp-nav').removeClass('white');
				}*/
				/*if(screen.width >= '1000') {
					if (index == 3 && slideIndex == 0 ||
						index == 5 && slideIndex == 2 ||
						index == 7 && slideIndex == 0 ||
						index == 7 && slideIndex == 2 ||
						index == 7 && slideIndex == 3 ||
						index == 8 && slideIndex == 1 ||
						index == 8 && slideIndex == 4 ||
						index == 8 && slideIndex == 5
					) {
						$('#fp-nav').addClass('white');
					} else {
						$('#fp-nav').removeClass('white');
					}
				} else {
					if (index == 3 && slideIndex == 1 ||
						index == 5 && slideIndex == 1 ||
						index == 5 && slideIndex == 2 ||
						index == 7 && slideIndex == 2 ||
						index == 7 && slideIndex == 3 ||
						index == 8 && slideIndex == 1 ||
						index == 8 && slideIndex == 4 ||
						index == 8 && slideIndex == 5
					) {
						$('#fp-nav').addClass('white');
					} else {
						$('#fp-nav').removeClass('white');
					}
					
				}*/
			}, 
			
			onLeave: function(index, nextIndex, direction){
				var leavingSection = $(this);

				var usl = (index == 1 || index == 3 || index == 5 || index == 7 || index == 8);
				if (usl == true) {
					//$('#fullpage .fp-controlArrow').fadeOut();
				}
        	},
			
			onSlideLeave: function( anchorLink, index, slideIndex, direction, nextSlideIndex){
            	var leavingSlide = $(this);
				var usl = (index == 1 || index == 3 || index == 5 || index == 7 || index == 8);
				
				if (usl == true && slideIndex == 0) {
					//$('#fullpage .fp-controlArrow').fadeIn();
				}
				if (usl == true && nextSlideIndex == 0) {
					//$('#fullpage .fp-controlArrow').fadeOut();
				}				
			}
		});

		$('.s0 .down-controlArrow').click(function(){
			$.fn.fullpage.moveTo('page1', 0);
		});
		$('#concept').click(function(){
			$.fn.fullpage.moveTo('page2', 1);
		});
		$('.home_concept').click(function(){
			$.fn.fullpage.moveTo('page2', 0);
		});
		$('#commn1').click(function(){
			$.fn.fullpage.moveTo('page4', 1);
		});
		$('#commn2').click(function(){
			$.fn.fullpage.moveTo('page4', 2);
		});
		$('#commn3').click(function(){
			$.fn.fullpage.moveTo('page4', 3);
		});
		$('.home_comm').click(function(){
			$.fn.fullpage.moveTo('page4', 0);
		});
		$('#road1').click(function(){
			$.fn.fullpage.moveTo('page6', 1);
		});
		$('#road2').click(function(){
			$.fn.fullpage.moveTo('page6', 2);
		});
		$('#road3').click(function(){
			$.fn.fullpage.moveTo('page6', 3);
		});
		$('.home_road').click(function(){
			$.fn.fullpage.moveTo('page6', 0);
		});
		$('#eco1').click(function(){
			$.fn.fullpage.moveTo('page7', 1);
		});
		$('#eco2').click(function(){
			$.fn.fullpage.moveTo('page7', 2);
		});
		$('#eco3').click(function(){
			$.fn.fullpage.moveTo('page7', 3);
		});
		$('#eco4').click(function(){
			$.fn.fullpage.moveTo('page7', 4);
		});
		$('#eco5').click(function(){
			$.fn.fullpage.moveTo('page7', 5);
		});
		$('.home_eco').click(function(){
			$.fn.fullpage.moveTo('page7', 0);
		});

        //$('#fp-nav').addClass('white');
		
		

        /*$('#fp-nav li a').click(function(){
            _this = $(this).parent();
            _thisNum = $(_this).index();
            //console.log(_thisNum);
            $('#fp-nav li').each(function(){
                if(screen.width >= '1000') {
                    if(_thisNum == 0 || _thisNum == 1 || _thisNum == 5) {
                        $('#fp-nav').addClass('white');
                    } else {
                        $('#fp-nav').removeClass('white')
                    }
                } else {
                    if(_thisNum == 0) {
                        $('#fp-nav').addClass('white');
                    } else {
                        $('#fp-nav').removeClass('white')
                    }
                }
            });
        });*/
    }
	
if(screen.width < '768') {
	$('#concept').click(function(){
		$('#full_concept').slideToggle();
	});
	$('#commn1').click(function(){
		$('#full-commn1').slideToggle();
		$('#full-commn2, #full-commn3').slideUp();
	});
	$('#commn2').click(function(){
		$('#full-commn2').slideToggle();
		$('#full-commn1, #full-commn3').slideUp();
	});
	$('#commn3').click(function(){
		$('#full-commn3').slideToggle();
		$('#full-commn1, #full-commn2').slideUp();
	});
	$('#road1').click(function(){
		$('#full-road1').slideToggle();
		$('#full-road2, #full-road3').slideUp();
	});
	$('#road2').click(function(){
		$('#full-road2').slideToggle();
		$('#full-road1, #full-road3').slideUp();
	});
	$('#road3').click(function(){
		$('#full-road3').slideToggle();
		$('#full-road1, #full-road2').slideUp();
	});
	/*$('#eco1').click(function(){
		$('.eco1').slideToggle();
		$('.eco2, .eco3, .eco4, .eco5').slideUp();
	});
	$('#eco2').click(function(){
		$('.eco2').slideToggle();
		$('.eco1, .eco3, .eco4, .eco5').slideUp();
	});
	$('#eco3').click(function(){
		$('.eco3').slideToggle();
		$('.eco2, .eco1, .eco4, .eco5').slideUp();
	});
	$('#eco4').click(function(){
		$('.eco4').slideToggle();
		$('.eco2, .eco3, .eco1, .eco5').slideUp();
	});
	$('#eco5').click(function(){
		$('.eco5').slideToggle();
		$('.eco2, .eco3, .eco4, .eco1').slideUp();
	});*/
}
	
});