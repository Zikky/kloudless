$(document).ready(function(){
	$('a.modal').bind('click', function(event) { 
	    event.preventDefault();
	    $('#modal').fadeIn(800);
	});
});