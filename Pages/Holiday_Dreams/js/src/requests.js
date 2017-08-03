// $(function() {

	function callback() {
		$.ajax({
			url: "https://pixabay.com/api/?key=2776869-90106665d77adae7942787505&q=flowers&image_type=photo&pretty=true",
			dataType : "jsonp",
			success: function (data) {

				console.log(data.hits);
				console.log(typeof data.hits);

				var html = $('#wrapper-template').html();
				var loadItem = tmpl(html, data);

				$('.tablet-box').append(loadItem);

			}
		});
	}
	callback();
$('.send').on('click', callback);
// });
