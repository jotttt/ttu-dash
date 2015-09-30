/*jshint -W117 */
$(document).ready(function(){
	// ADD NEW EXPENDITURE LINE
	$("#expenditure-new").after("<p>Tere</p>");
	// SHOW/HIDE EXPENDITURE SECTION
	$("#expenditure").show();
	$("#expenditure-yes").click(function(){
		console.log("tere");
		$("#expenditure-yes").addClass("btn-default").removeClass("btn-white");
		$("#expenditure-no").addClass("btn-white").removeClass("btn-default");
		$("#expenditure").fadeIn("slow").show();
	});
	$("#expenditure-no").click(function(){
		$("#expenditure-no").addClass("btn-default").removeClass("btn-white");
		$("#expenditure-yes").addClass("btn-white").removeClass("btn-default");
		$("#expenditure").fadeOut("slow");
	});




	// CHECKBOX PLUGIN
	$('input').iCheck({
		checkboxClass: 'icheckbox_square-grey',
		radioClass: 'iradio_square-grey',
		increaseArea: '20%' // optional
	}); //end

	//DATEPICKER PLUGIN
	$.fn.datepicker.defaults.format = 'dd-mm-yyyy';
	// END DATEPICKER PLUGIN

	// INLINE EDITING PLUGIN
	//defaults
	$.fn.editable.defaults.url = '/post';
	$.fn.editable.defaults.showbuttons = false;
	$.fn.editable.defaults.emptytext = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
	//enable / disable
	$('#enable').click(function() {
		$('#user .editable').editable('toggleDisabled');
	});
	$.fn.editable.defaults.mode = 'inline';

	// 1ST BLOCK
	$('#name').editable({
		type: 'text',
		url: '/post',
	});
	$('#department').editable({
		type: 'text',
		url: '/post',
	});
	$('#position').editable({
		type: 'text',
		url: '/post',
	});
	$('#errand_duration_b').editable();

	$('#errand_duration_e').editable();

	$('#financing').editable({
		type: 'text',
		url: '/post',
	});

	// 2ND BLOCK
	$('#destination').editable({
		type: 'text',
		url: '/post',
	});
	$('#organization').editable({
		type: 'text',
		url: '/post',
	});
	$('#errand_goal').editable({
		type: 'text',
		url: '/post',
	});
	$('#transportation').editable({
		pk: 1,
		limit: 3,
		source: [
			{value: 1, text: 'auto'},
			{value: 2, text: 'buss'},
			{value: 3, text: 'lennuk'},
			{value: 4, text: 'laev'},
			{value: 5, text: 'rong'}
		]
	});
	// 3RD BLOCK
	$('#expenditure').editable({
		showbuttons: false,
		prepend: "valimata",
		source: [
			{value: 1, text: 'jah'},
			{value: 2, text: 'ei'}
		]
	});
	$('#daily-cost').editable({
		type: 'text',
		url: '/post',
	});
	$("#daily-cost-comment").editable({
		type: 'textarea',
		url: '/post',
	});
	$("#daily-cost-advance").editable({
		type: 'select',
		url: '/post',
		source: [
			{value: 1, text: 'Soovin avansi'},
			{value: 2, text: 'Ei soovi avansi'}
		]
	});
	$('#travel-cost').editable({
		type: 'text',
		url: '/post',
	});
	$("#travel-cost-comment").editable({
		type: 'textarea',
		url: '/post',
	});
	$("#travel-cost-advance").editable({
		type: 'select',
		url: '/post',
		source: [
			{value: 1, text: 'Soovin avansi'},
			{value: 2, text: 'Ei soovi avansi'}
		]
	});
	$('#accomodation-cost').editable({
		type: 'text',
		url: '/post',
	});
	$("#accomodation-cost-comment").editable({
		type: 'textarea',
		url: '/post',
	});
	$("#accomodation-cost-advance").editable({
		type: 'select',
		url: '/post',
		source: [
			{value: 1, text: 'Soovin avansi'},
			{value: 2, text: 'Ei soovi avansi'}
		]
	});
	$('#other-cost').editable({
		type: 'text',
		url: '/post',
	});
	$("#other-cost-comment").editable({
		type: 'textarea',
		url: '/post',
	});
	$("#other-cost-advance").editable({
		type: 'select',
		url: '/post',
		source: [
			{value: 1, text: 'Soovin avansi'},
			{value: 2, text: 'Ei soovi avansi'}
		]
	});

	// END INLINE EDITING PLUGIN

});
