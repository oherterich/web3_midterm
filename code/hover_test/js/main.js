

	var key = '0bd1d2d41d65047dadb0ce85c999d9cd';
	var url = 'http://api.brewerydb.com/v2/?key='+key;
	
	
	// function request(url, callback){
	// 	return function(){
	// 		callback(JSON);
	// 	}
	// }
var grid = document.getElementsByClassName('grid');
for (var i = 0; i < grid.length; i++) {
	var s = grid.item(i);
	s.addEventListener('mouseover', function(evt) {
		// var childNode = s.firstChild.grid_hover;
		// var test = document.getElementsByClassName('grid_hover');
		// 	test.firstChild.style.background="lime";

		var gHover = document.getElementById('grid_hover');
			gHover.style.paddingBottom = 12.5+'%';
			gHover.style.marginTop = 0;
			console.log('hello');
			console.log(test);

	});
	s.addEventListener('mouseout', function(evt) {
		var gHover = document.getElementById('grid_hover');
			gHover.style.paddingBottom = 0;
			gHover.style.marginTop = 12.5+'%';
			console.log('hello2');
	});
}


// function request(url, callback){
//   var xhr = new XMLHttpRequest();xhr.onreadystatechange = (function(myxhr){
//     return function() {
//       callback(myxhr);
//     }
//   })(xhr);
//   xhr.open('GET', url, true);
//   xhr.send('');
// }

// -----------------------


// request("http://api.brewerydb.com/v2/?key=key",function(result) {
  
// 	console.log(result);
//   var rawJson = result.response;
//   var data = JSON.parse(rawJson);
// });



