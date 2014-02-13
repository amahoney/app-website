var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

  dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
	$placeholder.html ('<iframe src="http://player.vimeo.com/video/81434517?color=c9ff23&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	/*
	.get() returns the native javascript element for us to access
	when using jQuery we don't have access to the original HTML
	elements directly, we are using jQuery to manipulate them.

	Ex:
	$dialog.show() - will call jQuery's 'show()' function
	$dialogue.get(0).show() - will call Javascripts's native 'show()' function
	*/
	$dialog.get(0).showModal();
	//show() allows multiple dialogues
	//showModal() single dialog, with no user interaction behind

});

$('#btn-close').on('click', function () {

	$dialog.get(0).close();
	$placeholder.html('');

});
