(function(j,$) {
	j.DataCalendar = function(config) {
		var events = _(config.data).map(function(datum) {
			return {
				title: datum[config.schema.title], 
				start: Date.parse(config.dateFormatter(datum[config.schema.start]))
			};
		});
		
		$('#'+config.containerId).fullCalendar({
			theme: true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek'
			},
			events: events
		});
	};
})(window,jQuery);