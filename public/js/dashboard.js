/*jshint -W117 */
$(function() {

	$(".faq-question[href='#uudis1']").mouseenter(function() {
		$("#uudis1").addClass("in");
	});
	$(".faq-question[href='#uudis1']").mouseleave(function() {
		$("#uudis1").removeClass("in");
	});
});
