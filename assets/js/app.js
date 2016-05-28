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

		var moreLinkId = idToToggle + '-more'

		$(moreLinkId).fadeToggle('fast');

		$(idToToggle).toggleClass('active');
		$(this).toggleClass('active');

	});

}

/// SMOOTH SCROLL FOR ANCHORS
$('a[href^="#"]').on('click',function (e) {
	e.preventDefault();

	var target = this.hash;
	var $target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 400, 'swing', function () {
		window.location.hash = target;
	});
});




var categoryDropDown = document.querySelector('#category-dropdown');

if (categoryDropDown){
	categoryDropDown.addEventListener('click', function(){
		categoryDropDown.classList.toggle('active');
	});
}
