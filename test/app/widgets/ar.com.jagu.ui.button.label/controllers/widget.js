/**
 * widget for button label.
 * metrics and grid : http://developer.android.com/design/style/metrics-grids.html
 */

var ButtonLabel = {
	TAG : 'ar.com.jagu.ui.button.label',
	//params on parent tss
	args : arguments[0] || {},
	//intialize widget
	initialize : function(arguments) {
		if (arguments && arguments.click) {
			$.button.addEventListener('click', ButtonLabel.behaviour);
			$.button.addEventListener('click', arguments.click);
		}
		if (ButtonLabel.args.label) {
			//merge properties to label
			_.extend($.label, ButtonLabel.args.label);
		}
		_.extend($.button, _.omit(ButtonLabel.args, 'label'));
		//GC
		ButtonLabel.args = null;
	},
	//simulate click
	behaviour : function() {
		
		var color = $.button.backgroundColor || 'transparent';
		var behaviourColor = color == 'transparent' ? '#CC999999' : color.replace('#', '#CC');
		$.button.backgroundColor = behaviourColor;
		
		setTimeout(function() {
			$.button.backgroundColor = color;
		}, 100);
	}
};

//public method
exports.initialize = ButtonLabel.initialize;
