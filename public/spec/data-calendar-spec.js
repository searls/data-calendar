describe("DataCalendar", function() {
	describe("~initialization", function() {
		var CONTAINER_ID = "blarg",config;
		beforeEach(function() {
			spyOn($.fn, "fullCalendar");

			DataCalendar({
				containerId: CONTAINER_ID
			});
			
			config = $.fn.fullCalendar.mostRecentCall.args[0];
		});

		it("invokes fullCalendar on the containerId", function() {
			expect($.fn.fullCalendar.mostRecentCall.object.selector).toBe('#'+CONTAINER_ID);
		});

		it("passes an object to fullCalendar", function() {
			expect(typeof config).toBe('object');
		});
		
		it("sets up a the header", function() {
		  expect(config.header).toEqual({
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek'
			});
		});
		
		it("turns on theme", function() {
		  expect(config.theme).toBe(true);
		});
	});
});