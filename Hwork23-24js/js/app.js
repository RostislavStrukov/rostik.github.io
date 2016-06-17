requirejs.config({
	paths: {
		'jquery': ['https://code.jquery.com/jquery-1.12.3']
	},
	shim: {
		'jquery': {
			exports: 'jQuery'
		}
	}
});

require (
	[
		'model',
		'view',
		'controller',
		'jquery'
	],

	function(model, view, controller, jquery) {}	
);