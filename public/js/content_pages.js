/*jshint -W117 */
$(function() {

	//FULLSCREEN MODE
	//--------------------------------------------------------------
	$("#fullscreen-btn").click(function(){
		$(this).toggleClass("active");
		if($("#fullscreen-btn").hasClass("active")) {
			$("nav.navbar-static-side").addClass("closed");
			$("nav.navbar-static-top").addClass("closed");
			$("#page-wrapper").addClass("closed");
			$("body.mini-navbar #page-wrapper").addClass("closed");
		}
		else {
			$("nav.navbar-static-side").removeClass("closed");
			$("nav.navbar-static-top").removeClass("closed");
			$("#page-wrapper").removeClass("closed");
			$("body.mini-navbar #page-wrapper").removeClass("closed");
		}
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

});
