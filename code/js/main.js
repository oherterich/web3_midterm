/*$document.ready(function(){
	var key = '0bd1d2d41d65047dadb0ce85c999d9cd';
	


)};*/

var overlay = document.getElementById('overlay');

var grid = document.getElementsByClassName('grid');

for (var i = 0; i < grid.length; i++) {
	var s = grid.item(i);
	s.addEventListener('click', function(evt) {
		overlay.classList.remove('is-hidden');
	});
}

overlay.addEventListener('click', function(evt) {
	overlay.classList.add('is-hidden');
});
