/**
 * Alchemy: a node.js framework
 * Copyright 2013-2024, Jelle De Loecker
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2013-2024, Jelle De Loecker
 * @link          
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
const ROOT_STAGE = require('alchemymvc');

ROOT_STAGE.getStage('load_core').addPostTask(() => {

	alchemy.start();

});