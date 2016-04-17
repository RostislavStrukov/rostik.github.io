$(document).ready(function() { 

	var $links = $('.menu a');

	$links.on('click', function(e) {

		var $submenu = $(this).siblings('.submenu');
		e.preventDefault();
		$submenu.slideToggle();
		
		var $subsubmenu = $(this).siblings('.subsubmenu');
		e.preventDefault();
		$subsubmenu.slideToggle();
	});
});