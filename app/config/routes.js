// Create route with name "Home" that will execute the "home" method of the "Static" controller
Router.add({
	// The unique identifier of this route
	name       : 'Static#home',

	// The supported methods
	methods    : ['get'],

	// The path of this route
	paths      : '/',

	// The handler for this route
	// (If this is not defined, the name is used)
	handler    : 'Static#home',

	// The breadcrumb for this route
	// (for anchor activity)
	breadcrumb : 'static.home',

	// Any optional permission string to check for
	permission : null,

	// Can this be added to the sitemap?
	sitemap: null,

	// The title to use as the page title + in the sitemap
	// Can be a string, or an object with language keys
	title: null,

	// "System routes" are used to indicate API routes
	// (Routes that do not render a page)
	is_system_route : false,

	// Can the response of this route be cached?
	// (If enabled, it even applies to POST requests)
	cache : true,

	// Can this route's path be used in the browser's address location?
	// When set to false, this route will not be set in the address bar.
	// When set to a string, that string will be used as the path.
	visible_location: true,
});

Router.add({
	name       : 'Static#info',
	methods    : ['get'],
	paths      : '/info',
	breadcrumb : 'static.info',
});