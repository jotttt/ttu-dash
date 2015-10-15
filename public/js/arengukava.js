/*jshint -W117 */
$(function() {
	//TOOLTIPS
	//--------------------------------------------------------------
	$('[data-toggle="tooltip"]').tooltip();

	//TOGGLE 1ST LVL BUTTON STATE
	//--------------------------------------------------------------
	$(".goal-badge").click(function(){
		$(this).toggleClass("active");
	});

	//TOGGLE CARDS AND LOAD CONTENT
	//--------------------------------------------------------------
	$(".card").click(function(){
		$(this).toggleClass("active").siblings().removeClass("active");
		//Load content
		if($("#mission-statement").hasClass("active")) {
			$("#action-widget").addClass("hidden");
			$("#goal-widget").addClass("hidden");
			$("#mission-widget").removeClass("hidden");
		}
		else if($("#strategy-planner").hasClass("active")) {
			$("#action-widget").removeClass("hidden");
			$("#goal-widget").removeClass("hidden");
			$("#mission-widget").addClass("hidden");
		}
	});

	//PROGRESS BAR GRADIENT
	//--------------------------------------------------------------


	// Chartist chart 1
	//--------------------------------------------------------------
	new Chartist.Bar('#ct-1', {
		labels: [''],
		series: [
			[{meta: 'Alustamata', value: 15 }],
			[{meta: 'Töös', value: 140 }],
			[{meta: 'Tehtud', value: 12 }]
		]
	}, {
		plugins: [
			Chartist.plugins.tooltip()
		],
		stackBars: true,
		reverseData: true,
		horizontalBars: true,
		axisY: { offset: 20,
						labelInterpolationFnc: function(value) {
							return value;
						}
					 }
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 60px'
			});
		}
	});//end

	//Chartist chart 2
	//---------------------------------------------------------------
	new Chartist.Bar('#ct-2', {
		labels: [''],
		series: [
			[{meta: 'Konkreetne tegevus', value: 250 }],
			[{meta: 'Alleesmärk', value: 60 }],
			[{meta: 'Eesmärk', value: 15 }]
		]
	}, {
		plugins: [
			Chartist.plugins.tooltip()
		],
		stackBars: true,
		reverseData: true,
		horizontalBars: true,
		axisY: { offset:20,
						labelInterpolationFnc: function(value) {
							return value;
						}
					 }
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 60px'
			});
		}
	});//end

	// Chartist chart 3
	//---------------------------------------------------------------

	new Chartist.Bar('#ct-3', {
		labels: ['Iseloom'],
		series: [
			[{meta: 'Tehtud', value: 2 }],
			[{meta: 'Töös', value: 12 }],
			[{meta: 'Tegemata', value: 0 }],
		],
	}, {
		stackBars: true,
		reverseData: true,
		axisY: {
			labelInterpolationFnc: function(value) {
				return value;
			}
		},
		plugins: [
			Chartist.plugins.tooltip()
		],
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 60px'
			});
		}
	});//end

	// Chartist chart 4
	//---------------------------------------------------------------
	new Chartist.Bar('#ct-4', {
		labels: ['Iseloom'],
		series: [
			[{meta: 'Eesmärk', value: 2 }],
			[{meta: 'Alleesmärk', value: 3 }],
			[{meta: 'Konkreetne tegevus', value: 16 }]
		],
	}, {
		stackBars: true,
		reverseData: true,
		axisY: {
			labelInterpolationFnc: function(value) {
				return value;
			}
		},
		plugins: [
			Chartist.plugins.tooltip()
		]
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 60px'
			});
		}
	});

	// BIG ANIMATED CHART
	//--------------------------------------------------------------
	new Chartist.Bar('.ct-chart', {
		labels: ['4. kvartal', '3. kvartal', '2. kvartal', '1. kvartal'],
		series: [
			[{meta: 'Eesmärk', value: 6 },{meta: 'Eesmärk', value: 7 },{meta: 'Eesmärk', value: 3 },{meta: 'Eesmärk', value: 5 }],
			[{meta: 'Alleesmärk', value: 13 },{meta: 'Alleesmärk', value: 25 },{meta: 'Alleesmärk', value: 17 },{meta: 'Alleesmärk', value: 11 }],
			[{meta: 'Konkreetne tegevus', value: 44 },{meta: 'Konkreetne tegevus', value: 85 },{meta: 'Konkreetne tegevus', value: 67 },{meta: 'Konkreetne tegevus', value: 59 }]
		]
	}, {
		stackBars: true,
		reverseData: true,
		axisY: {
			labelInterpolationFnc: function(value) {
				return (value);
			}
		},
		plugins: [
			Chartist.plugins.tooltip()
		]
	}).on('draw', function(data) {
		if(data.type === 'bar') {
			data.element.attr({
				style: 'stroke-width: 90px'
			});
		}
	});

});
