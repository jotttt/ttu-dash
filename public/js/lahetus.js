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
	var countries = [];
    $.each({"BD": "Bangladesh", "BE": "Belgium", "BF": "Burkina Faso", "BG": "Bulgaria", "BA": "Bosnia and Herzegovina", "BB": "Barbados", "WF": "Wallis and Futuna", "BL": "Saint Bartelemey", "BM": "Bermuda", "BN": "Brunei Darussalam", "BO": "Bolivia", "BH": "Bahrain", "BI": "Burundi", "BJ": "Benin", "BT": "Bhutan", "JM": "Jamaica", "BV": "Bouvet Island", "BW": "Botswana", "WS": "Samoa", "BR": "Brazil", "BS": "Bahamas", "JE": "Jersey", "BY": "Belarus", "O1": "Other Country", "LV": "Latvia", "RW": "Rwanda", "RS": "Serbia", "TL": "Timor-Leste", "RE": "Reunion", "LU": "Luxembourg", "TJ": "Tajikistan", "RO": "Romania", "PG": "Papua New Guinea", "GW": "Guinea-Bissau", "GU": "Guam", "GT": "Guatemala", "GS": "South Georgia and the South Sandwich Islands", "GR": "Greece", "GQ": "Equatorial Guinea", "GP": "Guadeloupe", "JP": "Japan", "GY": "Guyana", "GG": "Guernsey", "GF": "French Guiana", "GE": "Georgia", "GD": "Grenada", "GB": "United Kingdom", "GA": "Gabon", "SV": "El Salvador", "GN": "Guinea", "GM": "Gambia", "GL": "Greenland", "GI": "Gibraltar", "GH": "Ghana", "OM": "Oman", "TN": "Tunisia", "JO": "Jordan", "HR": "Croatia", "HT": "Haiti", "HU": "Hungary", "HK": "Hong Kong", "HN": "Honduras", "HM": "Heard Island and McDonald Islands", "VE": "Venezuela", "PR": "Puerto Rico", "PS": "Palestinian Territory", "PW": "Palau", "PT": "Portugal", "SJ": "Svalbard and Jan Mayen", "PY": "Paraguay", "IQ": "Iraq", "PA": "Panama", "PF": "French Polynesia", "BZ": "Belize", "PE": "Peru", "PK": "Pakistan", "PH": "Philippines", "PN": "Pitcairn", "TM": "Turkmenistan", "PL": "Poland", "PM": "Saint Pierre and Miquelon", "ZM": "Zambia", "EH": "Western Sahara", "RU": "Russian Federation", "EE": "Estonia", "EG": "Egypt", "TK": "Tokelau", "ZA": "South Africa", "EC": "Ecuador", "IT": "Italy", "VN": "Vietnam", "SB": "Solomon Islands", "EU": "Europe", "ET": "Ethiopia", "SO": "Somalia", "ZW": "Zimbabwe", "SA": "Saudi Arabia", "ES": "Spain", "ER": "Eritrea", "ME": "Montenegro", "MD": "Moldova, Republic of", "MG": "Madagascar", "MF": "Saint Martin", "MA": "Morocco", "MC": "Monaco", "UZ": "Uzbekistan", "MM": "Myanmar", "ML": "Mali", "MO": "Macao", "MN": "Mongolia", "MH": "Marshall Islands", "MK": "Macedonia", "MU": "Mauritius", "MT": "Malta", "MW": "Malawi", "MV": "Maldives", "MQ": "Martinique", "MP": "Northern Mariana Islands", "MS": "Montserrat", "MR": "Mauritania", "IM": "Isle of Man", "UG": "Uganda", "TZ": "Tanzania, United Republic of", "MY": "Malaysia", "MX": "Mexico", "IL": "Israel", "FR": "France", "IO": "British Indian Ocean Territory", "FX": "France, Metropolitan", "SH": "Saint Helena", "FI": "Finland", "FJ": "Fiji", "FK": "Falkland Islands (Malvinas)", "FM": "Micronesia, Federated States of", "FO": "Faroe Islands", "NI": "Nicaragua", "NL": "Netherlands", "NO": "Norway", "NA": "Namibia", "VU": "Vanuatu", "NC": "New Caledonia", "NE": "Niger", "NF": "Norfolk Island", "NG": "Nigeria", "NZ": "New Zealand", "NP": "Nepal", "NR": "Nauru", "NU": "Niue", "CK": "Cook Islands", "CI": "Cote d'Ivoire", "CH": "Switzerland", "CO": "Colombia", "CN": "China", "CM": "Cameroon", "CL": "Chile", "CC": "Cocos (Keeling) Islands", "CA": "Canada", "CG": "Congo", "CF": "Central African Republic", "CD": "Congo, The Democratic Republic of the", "CZ": "Czech Republic", "CY": "Cyprus", "CX": "Christmas Island", "CR": "Costa Rica", "CV": "Cape Verde", "CU": "Cuba", "SZ": "Swaziland", "SY": "Syrian Arab Republic", "KG": "Kyrgyzstan", "KE": "Kenya", "SR": "Suriname", "KI": "Kiribati", "KH": "Cambodia", "KN": "Saint Kitts and Nevis", "KM": "Comoros", "ST": "Sao Tome and Principe", "SK": "Slovakia", "KR": "Korea, Republic of", "SI": "Slovenia", "KP": "Korea, Democratic People's Republic of", "KW": "Kuwait", "SN": "Senegal", "SM": "San Marino", "SL": "Sierra Leone", "SC": "Seychelles", "KZ": "Kazakhstan", "KY": "Cayman Islands", "SG": "Singapore", "SE": "Sweden", "SD": "Sudan", "DO": "Dominican Republic", "DM": "Dominica", "DJ": "Djibouti", "DK": "Denmark", "VG": "Virgin Islands, British", "DE": "Germany", "YE": "Yemen", "DZ": "Algeria", "US": "United States", "UY": "Uruguay", "YT": "Mayotte", "UM": "United States Minor Outlying Islands", "LB": "Lebanon", "LC": "Saint Lucia", "LA": "Lao People's Democratic Republic", "TV": "Tuvalu", "TW": "Taiwan", "TT": "Trinidad and Tobago", "TR": "Turkey", "LK": "Sri Lanka", "LI": "Liechtenstein", "A1": "Anonymous Proxy", "TO": "Tonga", "LT": "Lithuania", "A2": "Satellite Provider", "LR": "Liberia", "LS": "Lesotho", "TH": "Thailand", "TF": "French Southern Territories", "TG": "Togo", "TD": "Chad", "TC": "Turks and Caicos Islands", "LY": "Libyan Arab Jamahiriya", "VA": "Holy See (Vatican City State)", "VC": "Saint Vincent and the Grenadines", "AE": "United Arab Emirates", "AD": "Andorra", "AG": "Antigua and Barbuda", "AF": "Afghanistan", "AI": "Anguilla", "VI": "Virgin Islands, U.S.", "IS": "Iceland", "IR": "Iran, Islamic Republic of", "AM": "Armenia", "AL": "Albania", "AO": "Angola", "AN": "Netherlands Antilles", "AQ": "Antarctica", "AP": "Asia/Pacific Region", "AS": "American Samoa", "AR": "Argentina", "AU": "Australia", "AT": "Austria", "AW": "Aruba", "IN": "India", "AX": "Aland Islands", "AZ": "Azerbaijan", "IE": "Ireland", "ID": "Indonesia", "UA": "Ukraine", "QA": "Qatar", "MZ": "Mozambique"}, function(k, v) {
        countries.push({id: k, text: v});
    });
	$('#country').editable({
        source: countries,
        select2: {
            width: 200,
            placeholder: 'Select country',
            allowClear: true
        }
    });
	$('#organization').editable({
		type: 'text',
		url: '/post',
	});
	$('#errand-goal').editable({
		showbuttons: false,
		source: [
			{value: 1, text: 'Teadustöö läbiviimine'},
			{value: 2, text: 'Oponeerimine, kaitsmiskogus osalemine'},
			{value: 3, text: 'Õppetöö läbiviimine'},
			{value: 4, text: 'Eksperthinnangu andmine'},
			{value: 5, text: 'Enesetäiendamine'},
			{value: 6, text: 'Koosolek, kohtumine'},
			{value: 7, text: 'Konverents, seminar > Suuline ettekanne'},
			{value: 8, text: 'Konverents, seminar > Stendiettekanne'},
			{value: 9, text: 'Konverents, seminar > Osalemine'},
			{value: 10, text: 'Mess, näitus > Külastamine'},
			{value: 11, text: 'Mess, näitus > Osalemine eksponendina'},
			{value: 12, text: 'Institutsionaalne koostöö'},
			{value: 13, text: 'Võrgustiku kohtumine'},
			{value: 14, text: 'Välitöödel osalemine'},
			{value: 15, text: 'Muu'}
		]
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

	$('#travel-cost').editable({
		type: 'text',
		url: '/post',
	});
	$("#travel-cost-comment").editable({
		type: 'textarea',
		url: '/post',
	});

	$('#accomodation-cost').editable({
		type: 'text',
		url: '/post',
	});
	$("#accomodation-cost-comment").editable({
		type: 'textarea',
		url: '/post',
	});

	$('#other-cost').editable({
		type: 'text',
		url: '/post',
	});
	$("#other-cost-comment").editable({
		type: 'textarea',
		url: '/post',
	});
	$("#advance").editable({
		type: 'text',
		url: '/post',
	});

	// END INLINE EDITING PLUGIN

});
