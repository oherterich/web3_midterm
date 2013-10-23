var grid = document.getElementsByClassName('grid');
for (var i = 0; i < grid.length; i++) {
	var s = grid.item(i);
	s.addEventListener('mouseover', function(evt) {
		// var childNode = s.firstChild.grid_hover;
		// var test = document.getElementsByClassName('grid_hover');
		// 	test.firstChild.style.background="lime";

		 //var gHover = this.getElementsByClassName('grid-hover');
		var gHover = this.querySelector('.grid-hover');
		gHover.style.height = 10 + '%';
		gHover.style.paddingBottom = 10+'%';

		 gHover.style.marginTop = 0;

	});
	s.addEventListener('mouseout', function(evt) {
		 var gHover = this.querySelector('.grid-hover');
			// gHover.style.paddingBottom = 0.0+'%';
			// gHover.style.paddingTop = 0.0+'%';
			// gHover.style.marginTop = 16.666666+'%';
			gHover.style.height = 0 + '%';
		 	gHover.style.marginTop = 16.666666 + '%';
		 	gHover.style.paddingBottom = 0;

	});
}