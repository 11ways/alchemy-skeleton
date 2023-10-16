/**
 * The App Task class:
 * an abstract Task class all other tasks can inherit from
 *
 * @constructor
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
const AppTask = Function.inherits('Alchemy.Task', 'App');

/**
 * Mark this class as being abstract
 *
 * @author   Jelle De Loecker   <jelle@elevenways.be>
 * @since    0.1.0
 * @version  0.1.0
 */
AppTask.makeAbstractClass();