jquery.input.switch.js
======================

A jQuery plugin that will convert text strings to inputs on click, then revert back to text string once done editing.

Enjoy

------------------------------------------------------------------------------
Usage
------------------------------------------------------------------------------

Initalize like so:

```js
$('.input_switch').InputSwitch();
```

Or with options:

```js
$('.input_switch').InputSwitch({
	inputClass:			'hidden_input', // class of the input that gets created
	inputContainer:		'input_switch_container' // class of the container that wraps around each text string and its input
});
```

HTML on your page for text string

```html
<span class="input_switch" data-input-type="text" data-input-name="first_name">Michael</span>
```

The 'data-input-type' attribute determines which type of input the text string converts to on click. Currently only the text input is supported.

The 'data-input-name' attribute determines the 'name' attribute of the input that gets created for this text string.



------------------------------------------------------------------------------
License
------------------------------------------------------------------------------

No copyright, I created this when I was bored feel free to use / rip apart for your own fun and gains. No rights reserved.