/*jshint -W117 */
$(function() {
	//PROFILE TAB
	//--------------------------------------------------------------
	$("#minimized-profile").hide();
	$('#expanded-profile .close').click(function() {
		$("#my-profile").addClass("minimized");
		$("#expanded-profile").fadeOut(1000).hide();
		$("#minimized-profile").fadeIn(1000).show();
	});
	$('#minimized-profile .open').click(function() {
		$("#my-profile").removeClass("minimized");
		$("#expanded-profile").fadeIn(1500).show();
		$("#minimized-profile").fadeOut(1500).hide();
	});
	//--------------------------------------------------------------

	//BACK TO TOP BUTTON
	//--------------------------------------------------------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.scroll-up').fadeIn();
		} else {
			$('.scroll-up').fadeOut();
		}
	});

	$('.scroll-up').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	//--------------------------------------------------------------

	//FULLSCREEN MODE
	//--------------------------------------------------------------
	//display on hover only
	$("#fullscreen-btn").hover(function(){
		$(this).css({
			"opacity":"1",
			"transition" : "opacity .25s ease-in-out",
			"-moz-transition" : "opacity .25s ease-in-out",
			"-webkit-transition" : "opacity .25s ease-in-out;"
		});
	}, function() {
		$(this).css("opacity","0");
	});
	//toggle fullscreen
	$("#fullscreen-btn").click(function(){
		$(this).toggleClass("active");
		if($("#fullscreen-btn").hasClass("active")) {
			$("nav.navbar-static-top").addClass("closed");
		}
		else {
			$("nav.navbar-static-top").removeClass("closed");
		}
	});
	//---------------------------------------------------------------

	//NEWS LEAD ON HOVER
	//---------------------------------------------------------------
	$(".news-module").mouseenter(function(){
		if(!$(this).find('.news-lead').is(':visible')) {
			clearTimeout($(this).data('timeoutId'));
			$(this).find('.news-lead').slideDown(300);
		}
	}).mouseleave(function(){
		var item = $(this),
				timeoutId = setTimeout(function(){
					item.find('.news-lead').slideUp(900);
					clearTimeout($(this).data('timeoutId'));
				}, 500);
		item.data('timeoutId', timeoutId);
	});
	//---------------------------------------------------------------

	//DRAG'N'DROP
	WinMove();

	//FUNCTION TO DISPLAY PLACEHOLDERS IN IE8+
	$('input, textarea').placeholder();

});
