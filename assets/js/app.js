// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();

//
// Custom JS
// --------------------------------------------------

var toggleBtn = $('.toggle-btn');
if(toggleBtn.length > 0){
	
	toggleBtn.on('click', function(){
		
		var idToToggle = $(this).attr('toggle-target');
		
		$(idToToggle).toggleClass('active');
		$(this).toggleClass('active');
		
	});
	
} else {
	// no toggle btn
}