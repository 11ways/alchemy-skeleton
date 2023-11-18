/**
 * Default configuration
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright   Copyright 2013-2023
 * @since       0.1.0
 * @license     http://www.opensource.org/licenses/mit-license.php MIT License
 */
module.exports = {

	// Should fallback translations be allowed?
	// (False by default: can cause a mix of different languages per page)
	allow_fallback_translations: false,

	// Force alchemy to assume it's using https
	// (when using a reverse proxy that doesn't tell us this, for example)
	assume_https: false,

	// Use babel for compiling client-side scripts
	babel: false,

	// Enable caching
	cache: true,

	// Start instance in client mode
	client_mode: false,

	// Gzip/deflate response compression
	compression: true,

	// Use cookies
	cookies: 'cookie_key_or_false_to_disable',

	// The domain for which the cookies should be set
	cookie_domain: false,

	// Use LESS
	css_less: true,

	// Use SASS (SCSS)
	css_sass: true,

	// Use PostCSS
	css_post: true,

	// Disable debugging
	debug: false,

	// Decode json, multipart, urlencode in body
	decoding: true,

	// The current environment to use
	environment: null,

	// Error handling configuration
	errors: {
		// Should uncaught errors be handled (instead of crashing the server)
		handle_uncaught: null,
	},

	// The default file hash method
	file_hash_algorithm: 'sha1',

	// Should uncaught errors be handled (instead of crashing the server)
	handle_uncaught: true,

	// Enable hawkejs on the client side
	hawkejs_client: true,

	// Don't allow access to the info page
	info_page: false,

	// Enable the janeway terminal interface?
	janeway: true,

	// Show a list of all tasks in Janeway
	janeway_task_menu: true,

	// Allow use of JSON-dry in non-hawkejs responses
	json_dry_response: true,

	// Kill the process when a file changes
	kill_on_file_change: false,

	// Override kill extensions
	// kill_extensions: ['js'],

	// Show the lag menu entry
	lag_menu : false,

	// Public layout settings, exposed as 'alchemy_layout'
	layout: {

		// Root layout
		root : {

			// The root layout file to use
			view  : 'layouts/body',

			// The main block to use in this root layout file
			block : 'main',
		},

	},

	// Extra import paths
	less_import_paths: false,

	// Set the debug level
	log_level: 4,

	// Enable debug stack trace (slow)
	log_trace: false,

	// Enable debugTrace for log.debug calls
	log_trace_debug: true,

	// Enable debugTrace for log.error calls
	log_trace_error: true,

	// Listen to logTrace by default
	log_trace_info: null,
	log_trace_warn: null,
	log_trace_verbose: null,

	// The main logo
	main_logo: '/alchemy-logo.png',

	// Maximum allowed event loop lag before the server is considered overloaded
	// 70ms is the default, and would result in a 200ms latency lag
	max_event_loop_lag: 70,

	// What systemload is considered overloaded, as a total percentage?
	max_system_load: 85,

	// How long query results are cached (falsy to disable)
	model_query_cache_duration: '60 minutes',

	// How many assoc data queries are allowed to run at the same time
	model_assoc_parallel_limit: 8,

	// Minify CSS
	minify_css: true,

	// Minify javascript files
	minify_js: true,

	// Multicast ipv4 address
	multicast_ipv4: null,

	// Start listening to multicast on boot?
	multicast_on_boot: false,

	// Allow offline usage? (appcache manifest)
	offline_clients: false,

	// The port to run the server on
	port: 3000,

	// Allow requests postponement/queue when the server is overloaded
	postpone_requests_on_overload: true,

	// Should the home page & client file be preloaded on boot?
	preload: false,

	// Do an extensive and expensive search for modules
	search_for_modules: false,

	// The cookie session key
	session_key: 'alchemy_sid',

	// The length of the session
	session_length: '20 minutes',

	// Show a list of all sessions in Janeway
	session_menu: false,

	// Do not print certain logs when true
	silent: false,

	// The optional socket file to listen to (higher priority than port)
	socket: null,

	// The chmod to set on the socket file
	socketfile_chmod : null,

	// The title of this website
	title: null,

	// Optional suffix to add to route titles
	title_suffix: null,

	// The main URL this site is hosted on
	url: null,

	// Enable websockets
	websockets: 'optional',
};