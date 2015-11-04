var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $title = $('<h4></h4>');

$('body').append($overlay);

$('.gallery img').click(function(event) {
	event.preventDefault();
	var src = $(this).attr('src');
	var alt = $(this).attr('alt');
	$overlay.append($image.attr('src', src));
	$overlay.append($title);
	$title.text(alt);
	$overlay.show();
});

$overlay.click(function(event) {
	event.preventDefault();
	$overlay.hide();
});