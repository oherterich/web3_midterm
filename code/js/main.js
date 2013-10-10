/*$document.ready(function(){

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



)};*/

var overlay = document.getElementById('overlay');
var extrainfo = document.getElementById('extrainfo');

var grid = document.getElementsByClassName('grid');

for (var i = 0; i < grid.length; i++) {
	var s = grid.item(i);
	s.addEventListener('click', function(evt) {
		overlay.classList.remove('is-hidden');

		extrainfo.classList.remove('extrainfo-hidden');
		extrainfo.classList.add('extrainfo-visible');

		var top = (this.offsetTop / window.innerHeight) * 100;
		var left = (this.offsetLeft / window.innerWidth) * 100;
		
		/*console.log(document.body.clientHeight);
		console.log(top + " " + left);*/

		extrainfo.style.top = top + "%";
		extrainfo.style.left = left + "%";
	});
}

overlay.addEventListener('click', function(evt) {
	overlay.classList.add('is-hidden');
	
	extrainfo.classList.add('extrainfo-hidden');
	extrainfo.classList.remove('extrainfo-visible');
});

extrainfo.addEventListener('click', function(evt) {
	overlay.classList.add('is-hidden');
	
	extrainfo.classList.add('extrainfo-hidden');
	extrainfo.classList.remove('extrainfo-visible');});