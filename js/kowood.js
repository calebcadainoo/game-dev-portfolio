$(function(){
	// image selector
	function changePic(hello){
		// alert($('.sect6_img1 img').attr('src'));
		src1 = $('.'+hello+' img').attr('src');
		src2 = $('.sect6_imgbx img').attr('src');

		$('.sect6_imgbx img').attr('src', src1);
		$('.'+hello+' img').attr('src', src2);
	}

	function changePic2(hello){
		// alert($('.sect6_img1 img').attr('src'));
		src1 = $('.'+hello+' img').attr('src');
		src2 = $('.sect6_imgbx2 img').attr('src');

		$('.sect6_imgbx2 img').attr('src', src1);
		$('.'+hello+' img').attr('src', src2);
	}

	$('.sect6_img1').click(function(){
		changePic('sect6_img1');
	});

	$('.sect6_img2').click(function(){
		changePic('sect6_img2');
	});

	$('.sect6_img3').click(function(){
		changePic('sect6_img3');
	});

	$('.sect6_img4').click(function(){
		changePic('sect6_img4');
	});

	// second set of pics
	$('.sect6_img1b').click(function(){
		changePic2('sect6_img1b');
	});

	$('.sect6_img2b').click(function(){
		changePic2('sect6_img2b');
	});

	$('.sect6_img3b').click(function(){
		changePic2('sect6_img3b');
	});

	

	// slider
	var num = 0;
	seconds = 7 * 1000; // 3 seconds for slider
	var unBullet = function(view){
		if (view == 0) 
			$('.sb_1').addClass('sb_ON');
		else if (view == 100) 
			$('.sb_2').addClass('sb_ON');
		else if (view == 200) 
			$('.sb_3').addClass('sb_ON');
		else if (view == 300) 
			$('.sb_4').addClass('sb_ON');
		
	}
	var makeFutureSlide = function(){
		timer = window.setInterval(function(){
			num += 100;
			if (num >= 400) {
				num = 0;
			}
			$(".slide_bx").animate({left: -num + "%"}, 700);
			$('.slide_bullet').removeClass('sb_ON');
			unBullet(num);
		}, seconds);
	}

	function slideToFuture(view){
		percnt = view;
		$('.slide_bullet').removeClass('sb_ON');
		unBullet(view);
		// timer
		timer = window.clearInterval(timer);
		$('.slide_bx').animate({ left: -(percnt) + '%'}, 700);
		timer = window.setInterval(function(){
			percnt += 100;
			if (percnt >= 400) { percnt = 0;}
			$('.slide_bx').animate({ left: -(percnt) + '%'}, 700);
		}, seconds);
	}

	// $('.slide_bx').hover(function(){
	// 	timer= window.clearInterval(timer);
	// });
	// $('.slide_bx').blur(function(){
	// 	makeFutureSlide();
	// });

	$('.sb_1').click(function(){
		slideToFuture(0);
	});

	$('.sb_2').click(function(){
		slideToFuture(100);
	});

	$('.sb_3').click(function(){
		slideToFuture(200);
	});

	$('.sb_4').click(function(){
		slideToFuture(300);
	});

	makeFutureSlide();

	// copyright
	var d = new Date();
	var n = d.getFullYear();
	$('.page_footer').text(n + ' Ⓒ Kofi Obo Wood | Developer: Crosby');
});