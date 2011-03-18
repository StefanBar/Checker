/**
 *  jQuery Checker 1.0
 *  Copyright 2011, Stefan Bar | http://stefanbar.com
 *  
 *  Released under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
    $.fn.checker = function () {
        return this.each(function () {
            var el = $(this);
			
			// is element a checkbox
            if (el.is(":checkbox")) {
                var div = $("<div class=\"checker\" />");
                var span = $("<span />");
				
				// wrap the element up
                el.wrap(div);
                el.wrap(span);
                span = el.parent();
                div = span.parent();
				
				// handle default states
                if (el.attr("checked")) { span.addClass("checkerChecked"); }
                if (el.attr("disabled")) { div.addClass("checkerDisabled"); }
				
				// bind events to element
                el.css("opacity", 0).bind({
                    "mousedown.checker": function () { div.addClass("checkerFocus"); },
                    "mouseup.checker": function () { div.removeClass("checkerFocus"); },
                    "mouseenter.checker": function () { div.addClass("checkerActive"); },
                    "mouseleave.checker": function () { div.removeClass("checkerActive checkerFocus"); },
                    "focus.checker": function () { div.addClass("checkerActive"); },
                    "blur.checker": function () { div.removeClass("checkerActive checkerFocus"); },
                    "change.checker": function () {
                        (el.attr("checked")) ? span.addClass("checkerChecked") : span.removeClass("checkerChecked");
                        (el.attr("disabled")) ? div.addClass("checkerDisabled") : div.removeClass("checkerDisabled");
                    }
                });
            }
        });
    };
})(jQuery);