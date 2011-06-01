(function(j,$) {
	j.DataCalendar = function(config) {
		$('#'+config.containerId).fullCalendar({
			theme: true,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek'
			}
		});
	};
})(window,jQuery);