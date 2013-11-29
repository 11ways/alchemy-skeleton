/**
 * Server
 *
 * The place where the magic starts
 *
 * Alchemy: a node.js framework
 * Copyright 2013, Jelle De Loecker
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright 2013, Jelle De Loecker
 * @link          
 * @license       MIT License (http://www.opensource.org/licenses/mit-license.php)
 */

//var agent = require('webkit-devtools-agent');
require('alchemymvc');

var t = Date.now() - alchemy._TimerStart;
console.log('Server functions executed in ' + t + 'ms');

var user = Model.get('User');
// var news = Model.get('News');
// var profile = Model.get('Profile');
// var tag = Model.get('Tag');

//var n = new profile._model({user_id: '5150c1a6ca1ae65f53000001', firstname: 'Jelle', lastname: 'De Loecker', age: 25, biography: 'This is my special bio!'});
//n.save();

// news.on('test', function() {
// 	pr('Test was emitted!');
// });

alchemy.on('zever', function(){pr('zever!')});
alchemy.emit('zever');

//news.emit('test', 'rr');

var qtest = {
	'User.name': [/ader/, /elle/],
	//'News.name': [/one/, /vader/],
	//'$or': {
	//	'User.age': 25,
	//	'News.title': /title/,
	//	'Other.test': 10
	//}
};


// setInterval(function() {
// 	pr(alchemy.sputnik.getBusy());
// }, 3000)

alchemy.ready(function() {

	var t = Date.now() - alchemy._TimerStart;	
	console.log('Server booted in ' + t + 'ms');

	// pr(alchemy.Plugin)
	// pr(Connection.url('Admin_Controller_Index', {params: {controller: 'user'}}));

	//var Menu = Model.get('Menu');

	// news.find('all', function(err, result) {
	// 	pr(result);
	// 	die();
	// });

	// Menu.get('test', function(result) {

	// });


});