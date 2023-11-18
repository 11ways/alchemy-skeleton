/**
 * Local configuration:
 * these settings override the default.js and {env}/config.js
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

	// This maps to subdirectories of the `config` folder.
	// By default you'll have 'dev', 'preview' and 'live'
	environment: 'dev',

	// When this is true, the node.js process will be killed when any file changes
	kill_on_file_change: true,

	// Database configuration
	database: {
		dev : {
			type     : 'mongo',
			host     : '127.0.0.1',
			database : '__alchemy_project_name___dev',
			login    : false,
			password : false,
			port     : 27017,
			folder   : null, // In case you want to use the `nedb` datasource type
		}
	}
};