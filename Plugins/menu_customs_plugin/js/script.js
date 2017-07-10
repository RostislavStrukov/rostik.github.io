$(document).ready(function() {

	// var $links = $('ul a');
	//
	// $links.hover(function(e) {
	//
	// 	var $submenu = $(this).siblings('.submenu');
	// 	$submenu.slideToggle();
	//
	// 	var $subsubmenu = $(this).siblings('.subsubmenu');
	// 	$subsubmenu.slideToggle();
	// });
  $('a').on('click', function(e){
    e.preventDefault();
  });

  $('.menu li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(200);
    }, this), 100));
  });
});
