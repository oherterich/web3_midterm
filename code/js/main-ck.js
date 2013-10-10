<<<<<<< HEAD
/*$document.ready(function(){
=======


>>>>>>> 4fded2c17c2439a131fe457ebeda9d01a75ed126
	var key = '0bd1d2d41d65047dadb0ce85c999d9cd';
	var url = 'http://api.brewerydb.com/v2/?key='+key;
	
	
	function request(url, callback){
		return function(){
			callback(JSON);
		}
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



<<<<<<< HEAD
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
=======
>>>>>>> 4fded2c17c2439a131fe457ebeda9d01a75ed126
