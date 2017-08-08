import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollUp {
	constructor() {
		this.headerTriggerElement = $(".large-hero__title");
		this.scrollUpButton = $(".scroll-up a");
		this.scrollUpDiv = $(".scroll-up");
		
		this.visibleScrollUpDiv();
	}
	
	visibleScrollUpDiv() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if (direction == "down") {
					that.scrollUpDiv.addClass("scroll-up--is-visible");
				} else {
					that.scrollUpDiv.removeClass("scroll-up--is-visible");
				}
			}
		});
	}
	
}

export default ScrollUp;