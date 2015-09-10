/*jshint -W117 */
$(document).ready(function(){
	// CHECKBOX PLUGIN
	$('input').iCheck({
					checkboxClass: 'icheckbox_square-grey',
					radioClass: 'iradio_square-grey',
					increaseArea: '20%' // optional
				});
	// END CHECKBOX PLUGIN
	//DATEPICKER PLUGIN
	$.fn.datepicker.defaults.format = 'dd-mm-yyyy';
	// END DATEPICKER PLUGIN

	// INLINE EDITING PLUGIN
	//defaults
	$.fn.editable.defaults.url = '/post';
	$.fn.editable.defaults.showbuttons = false;
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
	$('#daily_benefit').editable({
		type: 'text',
		url: '/post',
	});

	// END INLINE EDITING PLUGIN
});
