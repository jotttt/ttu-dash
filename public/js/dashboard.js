/*jshint -W117 */
$(function() {
	//NEWS LEAD ON HOVER
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
	//DRAG'N'DROP
	WinMove();
	//FUNCTION TO DISPLAY PLACEHOLDERS IN IE8+
	$('input, textarea').placeholder();

});
