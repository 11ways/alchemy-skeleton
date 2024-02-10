/**
 * Dev Environment configuration:
 * these settings override the default.js and can be overridden by local.js
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

	debugging: {
		// Enable debugging
		debug: true,

		// Allow access to the info page
		info_page: true,

		// Kill the process when a file changes
		kill_on_file_change: true,
	},

	performance: {

		// Disable cache
		cache: false,

		// Show the lag menu
		janeway_lag_menu : true,
	},

	frontend: {
		stylesheet: {
			// Disable CSS minification
			minify: false,
		},

		javascript: {
			// Disable JS minification
			minify: false,
		}
	},

	sessions: {
		janeway_menu: true,
	},
};