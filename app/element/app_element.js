/**
 * The App custom element.
 * Elements with only 1 word as their name will be prefixed with "al-"
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
var App = Function.inherits('Alchemy.Element', function App() {
	App.super.call(this);
});

/**
 * Don't register this as a custom element, we don't need an "al-app" element
 * The `false` argument makes sure child classes don't also set this property
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
App.setStatic('is_abstract_class', true, false);
