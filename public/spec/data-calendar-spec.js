describe("DataCalendar", function() {
	describe("~initialization", function() {
		var CONTAINER_ID = "blarg",
				DATA = [
					{pandaName: "Polly", pandaDate: "2011-01-03 23:59:00.0" },
					{pandaName: "Peter", pandaDate: "2011-01-08 23:59:00.0" }					
				],
				SCHEMA = {
					title: 'pandaName',
					start: 'pandaDate'
				},
				config;
		beforeEach(function() {
			spyOn($.fn, "fullCalendar");

			DataCalendar({
				containerId: CONTAINER_ID,
				data: DATA,
				schema: SCHEMA,
				dateFormatter: function(dateString) {
					return dateString.substring(0,dateString.length - 2)
				}
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
		
		it("applies the schema to the title", function() {
		  expect(config.events[0].title).toEqual(DATA[0].pandaName);
			expect(config.events[1].title).toEqual(DATA[1].pandaName);
		});
		
		it("attempts to convert the stringy dates to Date objects", function() {
		  expect(config.events[0].start.constructor).toBe(Date);
		});
		
		it("correctly converts the year", function() {
		  expect(config.events[0].start.getFullYear()).toBe(2011);
		});
		
		it("correctly converts the month", function() {
		  expect(config.events[0].start.getMonth()).toBe(0);
		});
		
		it("correctly converts the day", function() {
		  expect(config.events[0].start.getDate()).toBe(3);
		});
	});
});