$.fn.InputSwitch = function(usrOptions) {
	var defaults = {
		inputClass: 'hidden_input',
		inputContainer: 'input_switch_container'
	}

	var options = $.extend({}, defaults, usrOptions);
	var input = {
		selector: this.selector,
		//init
		init: function(selector) {
			//add surrounding html
			$(selector).each(function() {
				var input_type = $(this).attr('data-input-type');
				var input_name = $(this).attr('data-input-name');
				var value = $(this).text();
				$(this).wrap('<div class="' + options.inputContainer + '">');

				switch (input_type) {
					case 'text':
						$(this).after('<input type="text" name="' + input_name + '" class="' + options.inputClass + '" style="display:none" value="' + value + '" />');
					break;
				}
			});

			this.watcher(selector);
		},
		watcher: function(selector) {
			$(selector).click(function() {
				var parent = $(this).parent();
				$(this).hide();
				$('.' + options.inputClass, parent).show().focus();
			});

			$('.' + options.inputClass).blur(function() {
				input.switchBack(this);
			});
		},
		switchBack: function(input) {
			var parent = $(input).parent();
			var new_val = $(input).val();
			$(this.selector, parent).html(new_val).show();
			$(input).hide();
		}
	};

	input.init(input.selector);
};