$.jQTouch({
	icon: 'jqtouch.png',
	statusBar: 'black-translucent',
	/*
	preloadImages: [
		'themes/jqt/img/chevron_white.png',
		'themes/jqt/img/bg_row_select.gif',
		'themes/jqt/img/back_button_clicked.png',
		'themes/jqt/img/button_clicked.png'
		 ]
	*/
});

$(document).ready(function(){

	$('#nytt').bind('pageAnimationEnd', function(e, info){
		if (!$(this).data('loaded')) {  // Make sure the data hasn't already been loaded (we'll set 'loaded' to true a couple lines further down)
	    	$(this).append($('<div>Henter...</div>').         // Append a placeholder in case the remote HTML takes its sweet time making it back
	    		load('feeds/', function() {        // Overwrite the "Loading" placeholder text with the remote HTML
	    			$(this).parent().data('loaded', true);  // Set the 'loaded' var to true so we know not to re-load the HTML next time the #callback div animation ends
	    	}));
	    }

	});
	
});